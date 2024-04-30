// Function Composition and Point-Free Style
// Receba uma string de caracteres (texto apenas), insira em um array, remova os dados duplicados e ordene.

const items = 'hello Hello    hellO     ,  .  @#$   !!! DUDE Dudt dudT Dudt'

const cleaningInput = (input) => input.toLowerCase().replace(/[^a-z ]+/g, ' ').replace(/ +/g, ' ').trim();
const splitString = (input) => input.split(" ");
const filterArray = (array) => array.filter((element, index) => array.indexOf(element) === index);
const sortArray = (array) => array.sort();

const filterUniqueWords = (input) => sortArray(filterArray(splitString(cleaningInput((input)))));

console.table(filterUniqueWords(items));

// ---------------------------------------------------------------------------
//Receba um array de estudantes com suas notas, e calcule a média total da turma de acordo com a quantidade total de médias

const students = [
  { name: "Ana Silva", grades: [8.5, 6.7, 7.8, 9.2] },
  { name: "Maria Santos", grades: [6.3, 7.1, 8.3, 9.0] },
  { name: "Carla Oliveira", grades: [7.7, 8.2, 6.5, 9.4] },
  { name: "Aline Pereira", grades: [9.2, 8.0, 7.3, 6.9] },
  { name: "Camila Almeida", grades: [5.8, 7.6, 8.9, 6.4] },
  { name: "Natália Costa", grades: [9.4, 6.1, 7.2, 8.7] },
  { name: "Juliana Oliveira", grades: [8.1, 7.4, 6.8, 9.5] },
  { name: "Gabriela Gomes", grades: [7.9, 8.6, 6.2, 9.3] },
  { name: "Fernanda Martins", grades: [6.7, 7.9, 8.4, 9.1] },
  { name: "Larissa Silva", grades: [8.9, 6.8, 7.5, 9.8] },
  { name: "Raquel Alves", grades: [9.8, 7.3, 8.1, 6.5] },
  { name: "Bruna Oliveira", grades: [7.2, 8.9, 6.7, 9.4] },
  { name: "Mariana Costa", grades: [6.5, 8.2, 9.0, 7.6] },
  { name: "Daniela Ferreira", grades: [8.3, 6.4, 7.7, 9.6] },
  { name: "Amanda Gonçalves", grades: [9.1, 7.5, 8.8, 6.3] },
  { name: "Patrícia Lima", grades: [7.4, 8.1, 6.6, 9.2] }
];

const totalStudents = (students) => students.length;
const sumStudentGrade = (student) => student.grades.reduce((sum, grade) => sum + grade, 0);
const getTotalGrade = (students) => students.reduce((total, student) => total + sumStudentGrade(student), 0);
const getAverageGrade = (students) => {
  return (getTotalGrade(students) / (students.length * students[0].grades.length)).toFixed(2);
}

console.log(getAverageGrade(students));