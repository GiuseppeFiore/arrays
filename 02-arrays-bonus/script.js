const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers[reversedTeachers.length] = teachers[i];
}
// OPTION SOLUTION reversedTeacher[teachers.length -1-i]] = teachers[i];

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames[longNames.length] = teachers[i];
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// Utilizzo splice visot in mdn che modifica il contenuto delle array rimuovendo o sostituendo gli elementi esistenti
// non posso usare ne shift ne pop perche rimuovono il primo e ultimo elemento della lista
const edIndex = teachers.indexOf('Ed');

if (edIndex !== -1) {
  teachers.splice(edIndex, 1);
}

console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;