// Object literal { key: value }
// new Object()
// Object.create(); object의 class 함수를 이용해보자!~ 
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 //(함수)도 가능함  함수도 객체이므로 
let apple = {
  name: 'apple',
  'hello-bye': '✋', //따옴표를 쓰면 단어를 연결할 수가 있음 
  0: 1,
  ['hello-bye1']: '✋', // 여러가지 문자열을 연결할 수 있음. 
};
//쓸수는 있지만 그냥 이름만 쓰자. 특수한 경우는 그냥 카멜 케이스 쓰면 됨 helloBye 같은 것. 


// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation . 으로는 접근이 안되는 경우가 있음 대괄호 같은거. 
console.log(apple['hello-bye1']); // 대괄호 표기법 bracket notation 대괄호는 . 으로는 접근이 안됨 
apple['name']; // 모든 오브젝트의 키는 저런 식으로 접근이 가능함. 

// 속성 추가 동적으로 추가도 가능함. 
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);
