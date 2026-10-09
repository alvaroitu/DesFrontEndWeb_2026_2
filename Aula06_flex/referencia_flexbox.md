# CSS Flexbox - Guia de Referência

## O que é Flexbox?

Flexbox (Flexible Box) é um modelo de layout CSS que simplifica a criação de layouts flexíveis, resolvendo limitações dos métodos antigos como `float` e `position`. Permite distribuir itens de forma inteligente em uma dimensão (linha ou coluna).

## Conceitos Fundamentais

### Flex Container e Flex Items

- **Flex Container**: elemento pai com `display: flex` ou `display: inline-flex`
- **Flex Items**: filhos diretos do container
- Apenas os filhos diretos recebem propriedades flexbox
- `float`, `clear` e `vertical-align` não têm efeito em flex items

### Os Dois Eixos

- **Main Axis (Eixo Principal)**: direção primária do layout
- **Cross Axis (Eixo Transversal)**: perpendicular ao eixo principal

---

## Propriedades do Container

### `display: flex | inline-flex`
Ativa o layout flexbox no elemento.
- `flex`: comportamento de bloco
- `inline-flex`: comportamento inline

### `flex-direction`
Controla a direção do fluxo dos itens.

| Valor | Descrição |
|-------|-----------|
| `row` | itens em linha (padrão) |
| `row-reverse` | itens em linha invertida |
| `column` | itens em coluna |
| `column-reverse` | itens em coluna invertida |

### `flex-wrap`
Gerencia quebra de linha quando os itens não cabem.

| Valor | Descrição |
|-------|-----------|
| `nowrap` | todos em uma linha (padrão) |
| `wrap` | quebra para próxima linha |
| `wrap-reverse` | quebra para linha anterior |

### `flex-flow`
Atalho que combina `flex-direction` e `flex-wrap`.
```css
flex-flow: row wrap;  /* direção coluna */
```

### `justify-content`
Alinha itens no **eixo principal**.

| Valor | Descrição |
|-------|-----------|
| `flex-start` | alinha ao início (padrão) |
| `flex-end` | alinha ao final |
| `center` | centraliza |
| `space-between` | espaço igual entre itens |
| `space-around` | espaço igual ao redor de cada item |
| `space-evenly` | espaço igual em todos os lados |

### `align-items`
Alinha itens no **eixo transversal**.

| Valor | Descrição |
|-------|-----------|
| `stretch` | expande para preencher (padrão) |
| `flex-start` | alinha ao início |
| `flex-end` | alinha ao final |
| `center` | centraliza |
| `baseline` | alinha pela linha de base do texto |

### `align-content`
Distribui espaço entre **múltiplas linhas** (só funciona com `flex-wrap: wrap`).

Mesmos valores de `justify-content`.

---

## Propriedades dos Items

### `order`
Muda a ordem visual dos itens (não afeta ordem no HTML).
```css
order: 1;  /* padrão: 0 */
```

### `flex-grow`
Define a taxa de expansão quando há espaço disponível.
```css
flex-grow: 1;  /* padrão: 0 */
```

### `flex-shrink`
Define a taxa de encolhimento quando não há espaço.
```css
flex-shrink: 1;  /* padrão: 1 */
```

### `flex-basis`
Define o tamanho padrão antes da distribuição de espaço.
```css
flex-basis: 200px;  /* padrão: auto */
```

### `flex`
Atalho para `flex-grow`, `flex-shrink` e `flex-basis`.
```css
flex: 1 1 200px;  /* grow shrink basis */
flex: 1;          /* 1 1 0 */
```

### `align-self`
Sobrescreve o `align-items` do container para um item específico.
```css
align-self: center;
```

---

## Dicas Práticas

1. **Centralize com facilidade**: `display: flex; justify-content: center; align-items: center;`
2. **Criar cards iguais**: use `flex: 1;` em itens para distribuir espaço igualmente
3. **Espaçamento**: `gap` (propriedade moderna) cria espaço entre itens
4. **Mobile first**: inverta a direção com `flex-direction: column;` em telas pequenas
5. **Suporte**: flexbox é suportado em 99%+ dos navegadores modernos

---

## Referência Visual

```
Container (display: flex)
├─ Item 1
├─ Item 2
└─ Item 3

Main Axis ────────────────>
    ↓
Cross Axis
```
