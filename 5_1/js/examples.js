var myStringOne = 'Тестовая строка';
var myStringTwo = '   test   string number       two  ';

console.log('Исходная строка: ' + myStringOne);

function lastChar(myString) {
  return myString.charAt(myString.length - 1);
}

console.log('Последний символ строки: ' + lastChar(myStringOne));

function withoutLastChar() {
  return myStringOne.slice(0, myStringOne.length - 1);
}

console.log('Строка без последнего символа: ' + withoutLastChar(myStringOne));

function reverseString(myString) {
  var newString = '';
  for (var i = myString.length; i >= 0; i--)
    newString += myString.charAt(i);
  return newString;
}

console.log('Перевернутая строка: ' + reverseString(myStringOne));

function deleteExtraBlanks(myString) {
  var newString = '';
  var strLenght = myString.length;
  var i = 0;
  while (myString.charAt(i) == ' ') i++;
  for (i; i < strLenght;) {
    while (myString.charAt(i) != ' ') {
      newString += myString.charAt(i++);
    }
    while (myString.charAt(i) == ' ') i++;
    if (myString.charAt(i) != ' ') {
      newString += ' ';
    }  
  }
  return newString;
}

console.log('Исходная строка: ' + myStringTwo);
console.log('Строка без лишних пробелов: ' + deleteExtraBlanks(myStringTwo));
