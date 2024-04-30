// Recursão e Otimização de Tail Call 
// Utilizando recursão, crie uma função que calcule o fatorial de um número

function calculateFactorial(n, aggegator = 1) {
  if (n === 0) {
    return aggegator;
  }
  return calculateFactorial(n - 1, n * aggegator);
}

console.log(calculateFactorial(10));

// ---------------------------------------------------------------------------
// Utilizando recursão, crie uma função que calcule a potenciação de um número

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

console.log(power(9, 2)); 
