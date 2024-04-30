// Lazy evaluation da função gerador da sequencia de fibonacci
function fibonacciGenerator (){
  let a = 0;
  let b = 1;
  return {
    next: function(){
      const current = a;
      a = b;
      b = current + a;
      return { value: current }
    }
  }
}
const fibonacci = fibonacciGenerator()
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())
console.log(fibonacci.next())