const num1 = 123;
const num2 = new Number(123); //메모리 낭비가 될 수 있음 . 
console.log(typeof num1); //원시타입 
console.log(typeof num2);//객체 타입이 됨 

 //number의 클래스에는 이런 것들이 있음 지정되어 있는 상수 밸류들도 있음 
console.log(Number.MAX_VALUE); //number에 지정된 최대값이 됨 
console.log(Number.MIN_VALUE); //number에 지정된 최소값이 됨 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN); 
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); //10이 2승임. 지수표기법으로 사용함. 

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); 

console.log(num4.toString()); //그냥 문자열로 바꿔줌 
console.log(num4.toLocaleString('ar-EG')); //그 나라에 맞는 문자열로 표기할 수 있음 eg는 아라빅 언어임. 

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // 0.1 10진수지만 컴퓨터는 2진수로 바꿔줌.  ->이떄 약간의 우리 생각과 다른 오차가 발생함. 이런 작은 오차까지 보는것이   EPSILON임
console.log(num);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON; //엄청나게 작은 오차가 발생할 수 있다. 이걸 감지하려면 EPSILON을 사용하자. 

}
console.log(isEqual(1, 1)); // ture
console.log(isEqual(0.1, 0.1)); //true 
console.log(isEqual(num, 0.1)); //false 0.0000000003이 나옴 
