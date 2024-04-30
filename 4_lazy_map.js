// Lazy Evaluation - Sem utilizar Yield
// Função LazyMAP para iterar sobre itens de um array a cada chamada
function lazyMap(array, mappingFunction) {
  let position = 0;

  return {
    next: function() {
      if(position < array.length){
        const mappedValue = mappingFunction(array[position])
        position += 1
        return { value: mappedValue, done: false }
      } else { 
        return {done: true}
      }
    }
  }
}

const numbers = [1, 2, 3, 4, 5];
const mappingFunction = x => x + `${x}`;

const mappedValues = lazyMap(numbers, mappingFunction);

console.log(mappedValues.next().value); // 11
console.log(mappedValues.next().value); // 22
console.log(mappedValues.next().value); // 33
console.log(mappedValues.next()); // { value: '44', done: false }
console.log(mappedValues.next()); // { value: '55', done: false }
console.log(mappedValues.next()); // done: true
