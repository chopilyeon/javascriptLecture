// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다. 단순히 하나의 값만 들어있음 어디 할당하거나 할 때 값이 복사되어서 전달이 됨. 
//객체에서 함수를 쓸 수 있었던 것처럼 쓰게 됨 
//자바스크립트에는 wrapper 객체라는 개념이 있기 떄문임. 
//다른 언어에도 비슷한 언어가 있음 
//원시값을 필요에따라서 관련된 빌트인 객체로 변환한다. 


//지금은 숫자를 할당했으니 number원시 타입임.
//.을 찍는 순간 이 number의 원시타입을 감싸고 있는 number라는 클래스인 객체로 감싸지게 됨. 

const number = 123; // number 원시 타입  //number는 객체가 아닌데? -> 객체에서 함수를 썼던 것처럼 사용됨

// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
//.을 찍는 순간 객체로 바뀌게 됨 

console.log(number); // number 원시 타입 자 이러면 원시타입으로 바뀜. //문자열도 비슷함. 
//text를 가지고 length도 사용할 수 있음. 



const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체로 바뀌게 된다 .을 썼으므로! 
text.trim();//이것도 . 찍었으므로 객체로 바뀌게 되고 그 객체 내의 메소드를 사용할 수 있게 된다!. 
