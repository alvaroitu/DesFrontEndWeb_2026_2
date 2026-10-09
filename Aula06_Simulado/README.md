# Exercício Simulado — Portfólio de Desenvolvedor

**Disciplina:** Desenvolvimento Front-End para Web  
**Semestre:** 2º/2026  
**Campus:** Salto  
**Objetivo:** Simulado de avaliação que integra todas as aulas (02 a 07)

---

## 📋 Estrutura do Projeto

```
Aula06_Simulado/
├── index.html                 (HTML semântico — ARQUIVO PRINCIPAL)
├── css/
│   ├── main.css              (importa todos os módulos)
│   ├── base/
│   │   ├── reset.css         (zera padrões do navegador)
│   │   ├── variaveis.css     (cores, fontes, espaçamentos)
│   │   └── tipografia.css    (text, links, headings)
│   ├── layout/
│   │   ├── cabecalho.css     (header com flex)
│   │   ├── secoes.css        (seções, grid de cards)
│   │   └── responsividade.css (@media queries)
│   └── componentes/
│       ├── botao.css         (botões e variações)
│       ├── formulario.css    (campos e validação)
│       └── card.css          (cards de projetos)
├── img/
│   └── avatar.png            (avatar genérico do desenvolvedor)
├── svg/
│   └── icone-codigo.svg      (ícone decorativo)
├── TEXTOS_DO_PROJETO.txt     (copie e cole os textos)
├── REQUISITOS.txt            (o que fazer)
└── README.md                 (este arquivo)
```

---

## 🚀 Como Usar Este Projeto

### Passo 1: Copiar Textos
1. Abra `TEXTOS_DO_PROJETO.txt`
2. Copie cada bloco entre `[` e `]` e cole nas tags HTML correspondentes
3. **NÃO digite os textos novamente** — use copy/paste

### Passo 2: Estrutura HTML
1. Abra `index.html` como exemplo
2. Estude a semântica: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
3. Veja como os `<label>` estão ligados aos `<input>` por `id`/`for`

### Passo 3: CSS Modular
1. Cada responsabilidade tem um arquivo separado
2. Todas as cores vêm de `variaveis.css` — **troque --cor-primaria e veja o site inteiro mudar**
3. A ordem dos `@import` em `main.css` é do geral para o específico

### Passo 4: Responsividade
1. Abra em navegador e reduza a largura
2. Veja o layout se reorganizar com a `@media (min-width: 768px)`
3. O grid de cards muda de 1 → 2 → 3 colunas automaticamente

---

## ✅ Checklist de Validação

Antes de entregar, verifique:

- [ ] **HTML válido:** Abra DevTools (F12) → Console → sem erros
- [ ] **W3C:** Vá a validator.w3.org, copie o HTML → zero erros
- [ ] **CSS:** DevTools → Styles → nenhuma linha riscada com alerta
- [ ] **HeadingsMap:** Instale a extensão → veja a hierarquia de títulos sem pulos
- [ ] **Formulário:** Deixe campos vazios e clique "Enviar" → navegador barra sozinho
- [ ] **Flexbox:** `display: flex` no header e os botões fluem
- [ ] **Grid:** Cards lado a lado no desktop, empilhados no mobile
- [ ] **Variáveis:** Mude `--cor-primaria` em variaveis.css → site inteiro muda

---

## 🎓 Conceitos Cobertos

| Aula | Conceito | Arquivo |
|------|----------|---------|
| 02 | HTML semântico, estrutura | `index.html` |
| 03 | Hierarquia, `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` | `index.html` |
| 04 | Formulário, `<label>`, validação nativa, `<fieldset>`, `<legend>` | `index.html` + `formulario.css` |
| 05 | `<figure>`, `<figcaption>`, alt, SVG, imagem responsiva | `index.html` + `avatar.png` |
| 06 | Seletores, cascata, especificidade, box model, variaveis CSS | Todos os arquivos CSS |
| 07 | Pseudo-classes (`:hover`, `:focus`), pseudo-elementos (`::after`), Flexbox, Grid | `cabecalho.css`, `card.css`, `secoes.css` |

---

## 💡 Dicas de Estudo

1. **Seletores:** Abra DevTools → Console → cole `document.querySelectorAll(".card")` → veja quantos pegou
2. **Cascata:** Mude a ordem dos `@import` em main.css → veja o que acontece
3. **Especificidade:** Em formulario.css, tente trocar uma classe por id → note a diferença
4. **Flexbox:** Em cabecalho.css, remova `space-between` → menu e logo juntos
5. **Responsividade:** Em responsividade.css, mude `768px` para `600px` → veja quando quebra

---

## 🔧 Arquivos Fornecidos vs. Arquivos Que Você Faz

### Fornecido (Use Como Referência)
- ✅ `index.html` — estrutura completa
- ✅ Todos os CSS — organizados em módulos
- ✅ `TEXTOS_DO_PROJETO.txt` — copie e cole
- ✅ `avatar.png`, `icone-codigo.svg` — imagens prontas

### Você Deve Criar (Simulado)
- 📝 Seu próprio `index.html` (use este como guia)
- 🎨 Seus próprios CSS (com as mesmas responsabilidades)
- ✍️ Sua estrutura de pastas (css/, img/, svg/)

---

## 🏆 Critério de Sucesso

✓ **Validação W3C:** 0 erros  
✓ **DevTools:** sem declarações CSS riscadas  
✓ **Formulário:** barrado pelo navegador quando vazio  
✓ **Responsividade:** layout muda na @media  
✓ **Cores:** todas de variáveis CSS  
✓ **Estrutura:** HTML semântico (header, nav, main, section, footer)

---

## 📞 Dúvidas Frequentes

**P: Preciso digitar os textos?**  
R: Não! Use TEXTOS_DO_PROJETO.txt com copy/paste.

**P: Posso mudar a estrutura HTML?**  
R: Sim, mas mantenha a semântica (header, main, section, footer).

**P: Posso adicionar mais CSS?**  
R: Sim! Adicione em um novo arquivo em css/componentes/ e importe em main.css.

**P: E se eu usar IDs no CSS?**  
R: Funciona, mas especificidade fica alta. Evite — use classes.

**P: O avatar precisa ser uma foto real?**  
R: Não. Este projeto usa um SVG simples. Você pode substituir por uma foto, mas o SVG já funciona.

---

## 🎯 Próximos Passos Após o Simulado

1. Revise os REQUISITOS.txt
2. Compare seu código com index.html
3. Abra ambos nos DevTools lado a lado
4. Veja o que é diferente e aprenda

**Boa sorte! 🚀**
