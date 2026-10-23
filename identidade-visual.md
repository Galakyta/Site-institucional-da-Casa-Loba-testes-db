# Identidade visual da Casa Loba

A marca é acolhedora e arredondada: arcos, cápsulas e cantos generosos, com cores quentes sobre fundo creme. As variáveis abaixo ficam em `src/styles/` e devem ser sempre usadas no lugar de valores soltos.

## Cores

| Variável | Hex | Uso |
|---|---|---|
| `--vermelho` | `#DA4D3F` | Cor principal da marca, destaques e botão principal |
| `--rosa` | `#F5A9B8` | Selos, tags e seção "para quem é" |
| `--creme` | `#FDF1EA` | Fundo padrão das páginas |
| `--agua` | `#CAF5F7` | Fundo da seção de planos e detalhes |
| `--azul` | `#2B4FE8` | Plano em destaque e botão azul |
| `--ameixa` | `#2B1C2E` | Texto, seções escuras e rodapé |
| (branco) | `#FFFFFF` | Fundo de cards e texto sobre azul |

Regras de uso:
- Texto padrão em `--ameixa` sobre `--creme`. Em seções escuras (`--ameixa`), texto em `--creme`.
- Em seções com fundo `--rosa`, **nunca** usar botão vermelho. Use o botão ameixa.
- Texto secundário usa a mesma cor com opacidade (0.7 a 0.9), sem criar um cinza novo.

## Tipografia

| Função | Fonte | Pesos | Variável |
|---|---|---|---|
| Títulos, botões, menu, tags, preços | **Outfit** | 400, 600, 700, 800 | `--font-titulo` |
| Texto corrido | **Nunito** | 400, 600, 700 | `--font-corpo` |

Ambas vêm do Google Fonts, com `sans-serif` como reserva.

- Corpo: 18px, altura de linha 1.6.
- Títulos (`h1` a `h3`): Outfit 800, altura de linha 1.1, espaçamento entre letras `-0.02em`. Tamanhos fluidos, por exemplo `clamp(2rem, 4vw, 3rem)` em títulos de seção e `clamp(3rem, 7vw, 5.5rem)` no hero.
- Tags e selos: Outfit 600 a 700, minúsculas, espaçamento entre letras `0.1em` a `0.12em`.
- Botões: Outfit 700, 1rem.
- Nomes de plano em minúsculas.

## Formas e espaçamento

| Variável | Valor | Uso |
|---|---|---|
| `--raio` | `32px` | Cards e planos |
| `--capsula` | `999px` | Botões, tags e selos (formato de pílula) |
| `--container` | `1120px` | Largura máxima do conteúdo |
| `--gap` | `32px` | Espaço entre cards e colunas |

- Seções com `120px` de espaço vertical (hero: `140px` em cima e `100px` embaixo).
- Conteúdo com `24px` de margem lateral.
- Quebras de responsividade: `860px` (tablet) e `560px` (celular). No celular os botões ocupam a largura toda.

## Componentes

- **Botões:** variações `vermelho`, `azul`, `rosa`, `ameixa` e `ghost` (só contorno ameixa), nos tamanhos normal, pequeno e largura total. Padding `14px 28px`, no hover sobem 2px.
- **Tags:** cápsula rosa, ou com contorno ameixa de `1.5px` e fundo transparente.
- **Cards:** fundo branco, raio de `32px`, padding `40px 32px`, sobem 4px no hover. Cada um começa com um arco colorido de `80px` (vermelho, azul ou água).
- **Planos:** fundo creme, raio de `32px`. O plano em destaque tem fundo branco e contorno azul de `3px`. Selo em cápsula: rosa (inicial), azul (destaque) ou vermelho (maior).
- **Menu:** fixo no topo. Transparente no início; ao rolar mais de `40px` fica com fundo creme e uma linha fina embaixo.

## Arcos decorativos

Elemento central da identidade. São semicírculos vermelhos:
- Hero: um arco grande no canto inferior direito (`520px`) e um invertido no canto superior esquerdo (`400px`), que diminuem no tablet e no celular.
- Cards das frentes: arco pequeno no topo.
- Foto da seção "para quem é": moldura em arco (`180px` de raio no topo).
- "Uivo": três arcos concêntricos em água e rosa, usados como ornamento antes do manifesto.

## Logo

Logo da loba uivando em vermelho `#DA4D3F` (SVG), usada no menu entre as palavras **casa** e **loba**, escritas em Outfit 800, minúsculas. Fica em `public/` e deve ser usada sempre em SVG, sem recolorir nem distorcer.

## Tom de voz

Frases curtas e acolhedoras, em minúsculas nos títulos de destaque, falando direto com a pessoa. Slogan provisório: **"rede de apoio é estrutura"**.
