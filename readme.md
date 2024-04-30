# JS Data Functions

Este portfólio apresenta uma coleção de funções JavaScript especializadas em manipulação de dados e conceitos avançados de programação, como composição de funções, closures, funções de ordem superior e chamadas de cauda.

### Function composition

A função `filterUniqueWords` recebe uma string de caracteres (texto apenas), insere em um array, remove os dados duplicados e ordena.

```javascript
const items = "hello Hello    hellO     ,  .  @#$   !!! DUDE Dudt dudT Dudt";

console.table(filterUniqueWords(items));
```

A função `getAverageGrade` recebe um array de estudantes com suas notas e calcula a média total da turma de acordo com a quantidade total de médias.

```javascript
const students = [
  { name: "Ana Silva", grades: [8.5, 6.7, 7.8, 9.2] },
  { name: "Maria Santos", grades: [6.3, 7.1, 8.3, 9.0] },
  { name: "Carla Oliveira", grades: [7.7, 8.2, 6.5, 9.4] },
  { name: "Aline Pereira", grades: [9.2, 8.0, 7.3, 6.9] },
  { name: "Camila Almeida", grades: [5.8, 7.6, 8.9, 6.4] },
];

console.log(getAverageGrade(students));
```

### Closures and Higher-Order Functions

A função `createCounter` retorna um novo contador sempre que é chamada.

```javascript
const counter1 = createCounter();
const counter2 = createCounter();
console.log("Contador 1: ", counter1());
console.log("Contador 1: ", counter1());
console.log("Contador 1: ", counter1());
console.log("Contador 2: ", counter2());
console.log("Contador 2: ", counter2());
```

A função `repeatFunction` invoca uma outra função um número controlado de vezes. Caso o parâmetro de contagem seja negativo, a função será chamada infinitamente, até ser interrompida.

```javascript
// controlled loop
const repeatCounter = repeatFunction(counter, 3);
repeatCounter();
console.log(counter()); // Should print 4

// infinity
const infiniteCounter = repeatFunction(createCounter(), -1);
infiniteCounter();
```

### Tail Call

A função `calculateFactorial` calcula o fatorial de um número usando recursão.

```javascript
console.log(calculateFactorial(10)); // 3628800
```

A função `power` calcula a potenciação de um número usando recursão.

```javascript
console.log(power(9, 2)); // 81
```

### Lazy Map

A função `lazyMap` retorna uma função que itera sobre itens de um array a cada chamada.

```javascript
const numbers = [1, 2, 3, 4, 5];
const mappingFunction = (x) => x + `${x}`;

const mappedValues = lazyMap(numbers, mappingFunction);

console.log(mappedValues.next().value); // 11
console.log(mappedValues.next().value); // 22
console.log(mappedValues.next().value); // 33
console.log(mappedValues.next()); // { value: '44', done: false }
console.log(mappedValues.next()); // { value: '55', done: false }
console.log(mappedValues.next()); // done: true
```

A função `fibonacciGenerator` retorna um gerador da sequência de Fibonacci.

```javascript
const fibonacci = fibonacciGenerator();
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
```
