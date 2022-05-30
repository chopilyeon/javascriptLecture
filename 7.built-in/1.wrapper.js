// 래퍼 객체 (Wrapper Object) -> 원시값을 관련된 값들을 빌트인 객체로 변환함
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입  //number는 객체가 아닌데? -> 객체에서 함수를 썼던 것처럼 사용됨
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString());
console.log(number); // number 원시 타입

const text = 'text'; // string 문자열 원시타입
console.log(text);
text.length; // String 객체
text.trim();
