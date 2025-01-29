const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function pertenceFibonacci(num) {
  let i = 0;
  let fib = fibonacci(i);

  while (fib < num) {
    i++;
    fib = fibonacci(i);
  }

  return fib === num;
}
prompt("Informe um número:").then((numero) => {
  if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
  }
});
