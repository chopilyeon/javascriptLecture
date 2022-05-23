// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
//함수는 값으로 계산될수 있는 표현식이다
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => a + b;

console.log(add(1, 2));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸

// IIFE (Immediately-Invoked Function Expressions)
(function run() {
  console.log('😍');
})(); //함수는 값으로 표현될 수 있는 표현식이다.
