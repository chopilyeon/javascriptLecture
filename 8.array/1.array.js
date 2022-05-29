// 배열 생성 방법
let array = new Array(3); //배열이름에 index를 지정해주면 됨. 
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

array = Array.of(1, 2, 3, 4, 5); //Array의 static함수를 이용하자. 
console.log(array);

const anotherArray = [1, 2, 3, 4]; //배열 리터럴을 이용해서도 만들 수 있음. 
console.log(anotherArray);
array = Array.from(anotherArray); //iterable로부터 만든다고 되어 있음 iterable은 순회가 가능한 것임. 문자열도 순회가 가능함
//기존의 배열 복사해줌.from 은 iterable object? -> 순회가 가능한. 
//Array.from('text'); 문자열도 순회가 가능해서 이렇게 쓸수도 있음. 


console.log(array);

// 일반적으로 다른언어에서는 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Collections)
//사실 연속적으로 이어져있고, 동일한 메모리 크기를 가져야지!
//근데 자바스크립트는 다른 데이터 타입을 넣을 수 있었지! -> 타입이 정해져있는 타입 배열이 있더라~ 
//typed collection을 보면 나옴. 배열이 그냥 오브젝트와 유사하더라~ 


array = Array.from({ //오브젝트로 배열을 만들었음 
  0: '안',
  1: '녕',
  length: 2, // length로 크기를 정해줄 수 있음. 
});
console.log(array);
