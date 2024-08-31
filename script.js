// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(numero) {
  let a = 0;
  let b = 1;

  if (numero === 0 || numero === 1) {
    return `O número ${numero} pertence à sequência.`;
  }

  while (b <= numero) {
    let prox = a + b;
    a = b;
    b = prox;

    if (b === numero) {
      return `O número ${numero} pertence à sequência.`;
    }
  }

  return `O número ${numero} não pertence à sequência de Fibonacci.`;
}

console.log(fibonacci(4)); // O número não pertence à sequência de Fibonacci.

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

function verificandoLetraA(string) {
  let contador = string.match(/[aáàãâä]/gi).length;

  if (contador > 0) {
    return `A letra 'a' aparece ${contador} vezes.`;
  } else {
    return "A letra 'a' não foi encontrada.";
  }
}

console.log(verificandoLetraA("A aviação, atrás, ânimo, déjà-vu, parara.")); // 11 vezes

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // Ao final do processamento, qual será o valor da variável SOMA? -> 77


// 4) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, 9
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2,10, 12, 16, 17, 18, 19, 20

// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 

// Bom, se eu tenho (3) interruptores e posso ir duas vezes em uma das salas eu faria o seguinte:
// (1) ligaria um dos interruptores e deixaria ligado por alguns minutos - gerando calor nas lâmpadas - e em seguida, desligaria esse mesmo interruptor.
// (2) Ligaria outro interruptor e iria em uma das salas.
// (3) Se a lampada estiver acesa, trata-se do segundo interruptor, caso esteja desligada, mas quente, seria o primeiro. Caso esteja desligada e fria, seria o terceiro. 
// (4) Com as informações dos outros 3 passos, eu voltaria à sala dos interruptores e realizaria os ajustes necessários para verificar a próxima sala.
// (5) Indo até outra sala com as informações obtidas eu conseguiria facilmente identificar qual interruptor aquela lâmpada pertence utilizando a lógica de eliminação.