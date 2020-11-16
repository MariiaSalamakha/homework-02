
let n = prompt(`Введіть ціле число N`) ;
const N = parseFloat(n);

let m = prompt(`Введіть ціле число M`) ;
const M = parseFloat(m);

if (Number.isInteger(N) && Number.isInteger(M)) {
document.writeln(`${N} - ціле число N <br>`);
document.writeln(`${M} - ціле число M <br>`);
} else {
    alert(`Введіть будь ласка цілі числа для N i M`);
}

let isEvenNumbers = confirm(`Пропускати парні числа ?`);

if (isEvenNumbers) {
    document.writeln(`Пропущено парні числа <br>`);
} else {    
    document.writeln(`Не пропущено парні числа <br>`);
}

let sum = 0;
for(let i = N; i <= M; i++) {
 
  if (isEvenNumbers) {
      i % 2 === 0 ? sum = sum + 0 : sum = sum + i;
  }
  else {
    sum = sum + i ;
  }
}
document.writeln(`Сума від ${N} до ${M}: ${sum} <br>`);
