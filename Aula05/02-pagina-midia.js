// ================= PLAYER DE VIDEO =================
const video      = document.getElementById("meuVideo");
const btnPlay    = document.getElementById("btnPlay");
const btnParar   = document.getElementById("btnParar");
const btnMudo    = document.getElementById("btnMudo");
const barra      = document.getElementById("barra");
const tempo      = document.getElementById("tempo");
const velocidade = document.getElementById("velocidade");
const aviso      = document.getElementById("aviso");

// transforma 75 segundos em "1:15"
function mmss(segundos) {
  const m = Math.floor(segundos / 60);
  const s = Math.floor(segundos % 60);
  return m + ":" + String(s).padStart(2, "0");
}

// METODOS: play() e pause()
btnPlay.addEventListener("click", function () {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// nao existe stop(): pausa e volta ao inicio
btnParar.addEventListener("click", function () {
  video.pause();
  video.currentTime = 0;
});

// PROPRIEDADE: muted
btnMudo.addEventListener("click", function () {
  video.muted = !video.muted;
  btnMudo.textContent = video.muted ? "Com som" : "Mudo";
});

// PROPRIEDADE: playbackRate
velocidade.addEventListener("change", function () {
  video.playbackRate = Number(velocidade.value);
});

// arrastar a barra move o video
barra.addEventListener("input", function () {
  video.currentTime = barra.value;
});

// EVENTOS: o video avisa, o codigo responde
video.addEventListener("play", function () {
  btnPlay.textContent = "Pause";
  aviso.hidden = true;
});

video.addEventListener("pause", function () {
  btnPlay.textContent = "Play";
});

// so aqui a duracao ja e conhecida (antes e NaN)
video.addEventListener("loadedmetadata", function () {
  barra.max = video.duration;
  tempo.textContent = "0:00 / " + mmss(video.duration);
});

// dispara varias vezes por segundo enquanto toca
video.addEventListener("timeupdate", function () {
  barra.value = video.currentTime;
  tempo.textContent = mmss(video.currentTime) + " / " + mmss(video.duration);
});

video.addEventListener("ended", function () {
  aviso.hidden = false;
});


// ================= GRAFICO NO CANVAS =================
const dados = [
  { mes: "Jan", valor: 120 },
  { mes: "Fev", valor: 180 },
  { mes: "Mar", valor: 90 },
  { mes: "Abr", valor: 150 }
];

const ctx = document.getElementById("grafico").getContext("2d");
const base = 180;       // linha do chao (lembre: y cresce para baixo)
const alturaMax = 120;  // altura da maior barra
const maior = Math.max(...dados.map(d => d.valor));

// linha de base
ctx.beginPath();
ctx.moveTo(20, base);
ctx.lineTo(300, base);
ctx.strokeStyle = "#333";
ctx.lineWidth = 2;
ctx.stroke();

// uma barra para cada item do vetor
dados.forEach(function (d, i) {
  const altura = (d.valor / maior) * alturaMax;  // calculada, nao escrita a mao
  const x = 30 + i * 70;
  const y = base - altura;

  ctx.fillStyle = "#1d7a4d";
  ctx.fillRect(x, y, 50, altura);

  ctx.fillStyle = "#333";
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.fillText(d.valor, x + 25, y - 6);   // valor em cima
  ctx.fillText(d.mes, x + 25, base + 16); // mes embaixo
});
