let num1 = 50;
let num2 = 20;
let difference = (num1>num2) ? num1-num2 : num2-num1;
let msg = (num1>num2)? `첫번째 수가 ${difference}만큼 더 크다` :
                (num2>num1)? `두번째 수가 ${difference}만큼 더 크다` : '두 수는 같다';
console.log(msg);