# Calculadora Profissional

**Made by Ketener**

Este é um projeto de uma calculadora simples, inspirada no estilo do iPhone, que foi criada utilizando HTML, CSS e JavaScript. A calculadora realiza operações básicas como soma, subtração, multiplicação e divisão, e inclui funcionalidades adicionais como apagar caracteres individualmente e uma interface moderna e limpa.

## Funcionalidades

- **Operações Básicas**: Soma, Subtração, Multiplicação e Divisão.
- **Tecla de Limpar (C)**: Limpa a tela e redefine o cálculo.
- **Tecla de Apagar (Backspace)**: Apaga o último número ou operação inseridos, sem limpar toda a conta.
- **Tecla de Igual (=)**: Realiza o cálculo e exibe o resultado.
- **Tecla de Parênteses**: Permite o uso de parênteses para operações mais complexas.

## Como Funciona

O código é dividido em três partes principais:

1. **HTML**: A estrutura da página, que contém a área da calculadora (display) e os botões de entrada.
2. **CSS**: O estilo e layout visual da calculadora, proporcionando uma interface moderna e intuitiva.
3. **JavaScript**: A lógica de funcionamento da calculadora, lidando com a entrada de números, operações e cálculo do resultado.

### Estrutura do Código

#### HTML

O arquivo HTML contém a estrutura básica da calculadora, incluindo:

- Um `<div>` com a classe `calculator` que engloba a calculadora inteira.
- Um `<div>` com a classe `display`, que exibe o número ou operação que o usuário digita.
- Vários botões dentro de um `<div>` com a classe `buttons`, onde cada botão executa uma função de JavaScript correspondente.

#### CSS

O arquivo CSS define o layout e o estilo visual da calculadora:

- **Cor de fundo e bordas**: O fundo da calculadora é escuro (#333), com bordas arredondadas e sombras para criar uma aparência elegante e profissional.
- **Botões**: Cada botão tem um estilo específico, com transições suaves ao serem clicados (efeito `:active`), tornando a interação mais agradável.
- **Display**: A área de exibição é destacada com um fundo mais escuro (#444) e texto branco, para garantir legibilidade.

#### JavaScript

O arquivo JavaScript contém a lógica para as operações da calculadora:

- **Função `appendNumber`**: Adiciona números ao display ou começa uma nova operação se o display estiver vazio ou exibindo "erro".
- **Função `clearDisplay`**: Limpa o display e redefine os valores das variáveis internas.
- **Função `setOperation`**: Define a operação matemática (soma, subtração, multiplicação, divisão) e a adiciona ao display.
- **Função `calculate`**: Realiza o cálculo usando a função `eval()` e exibe o resultado.
- **Função `deleteLastChar`**: Apaga o último caractere digitado (número ou operador) sem limpar toda a conta.

### Como Usar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/ketener/calculadora-profissional.git
