// Closures and Higher-Order Functions
// Crie um clousure counter, que retorne um novo contador sempre que ele for chamado
const createCounter = () => {
  let count = 0;
  function counter() {
    count += 1;
    return count;
  }
  return counter;
}
const counter1 = createCounter();
const counter2 = createCounter();
console.log('Contador 1: ', counter1())
console.log('Contador 1: ', counter1())
console.log('Contador 1: ', counter1())
console.log('Contador 2: ', counter2())
console.log('Contador 2: ', counter2())

// ---------------------------------------------------------------------------
/*
* Função de high order que invoca uma outra função um número controlado de vezes.
* Caso o parâmetro de contagem seja negativo, a função será chamada infinitamente, até ser interrompida
*/

function repeatFunction(fn, times) {
  if (times < 0) {
    return function (...args) {
      let count = 0;
      while (true) {
        fn(...args);
        count++;
        console.log(`Function ${fn.name} called ${count} times`);
      }
    };
  } else {
    return function (...args) {
      for (let i = 0; i < times; i++) {
        fn(...args);
      }
    };
  }
}

// controlled loop
const repeatCounter = repeatFunction(counter, 3);
repeatCounter(); 
console.log(counter()); // Should print 4

// infinity
const infiniteCounter = repeatFunction(createCounter(), -1);
infiniteCounter();