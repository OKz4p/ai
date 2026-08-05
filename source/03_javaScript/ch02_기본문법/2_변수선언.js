// 자료형 : string, number, boolean, function, object(array), undefined
// undefined는 변수 초기화가 안되었을 때, null은 개발자가 인위적으로 null을 할당
var variable;
console.log("1.variable 타입 :", typeof(variable), "-값:", variable);
//variable = "이름은 '홍길똥강아지' 입니다" ;
let name = "홍길동강아지";
variable = `이름은 "${name}"입니다`;
console.log("2.variable 타입 :", typeof(variable), "-값:", variable);
variable = -3.2323;
console.log("3.variable 타입 :", typeof(variable), "-값:", variable);
variable = false;
console.log("4.variable 타입 :", typeof(variable), "-값:", variable);
variable = function(){
    alert("hello");
};
console.log("5.variable 타입 :", typeof(variable), "-값:", variable);
variable = null; // null은 타입이 Object
console.log("6.variable 타입 :", typeof(variable), "-값:", variable);
variable = {'name':'홍길동', 'age':20}; //객체
console.log('6.variable 타입:', typeof(variable), '-값:',variable);
variable = ['홍길동',20,function(){}, true,[1,2],{'name':'홍길동'}]; //배열
console.log('8.variable타입:',typeof(variable),'-값:',variable);