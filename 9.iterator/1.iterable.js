// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체다! 라는것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있어.
const array = [1, 2, 3];

for(const item of array){
  console.log(item);
}

//Array가 정말 이 규격사항을 따르는지 보려면 ctrl 을 눌러서 들어가보면 됨! 


//iterator 프로토콜이 아니므로 iteration의 규격사항을 따르지 않기 때문임. 
// const obj = {0:1,1:2};
// for(const item of obj){
//   console.log(item); 
// }

console.log(array.values()); //values를 정의부분 가보면 iterable한 iterator를 반환함. 
//이런것도 spread연산자나 for of 에서 사용이 가능함. 
for(const item of array.values()){
  console.log(item);
}
for(const item of array.keys()){
  console.log(item);
}
for(const item of array.entries()){
  console.log(item);
}
//인덱스마다 뽑아버림 

console.log(array.entries());
console.log(array.keys());

//반환된 iterator들이 next next를 호출하면서 순회가 가능함. 

// iterator 사용해 보기!
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

for (let item of array) {
  console.log(item);
}

for (let item of array.values()) {
  console.log(item);
}


//iterator랑 관련이 없기에 
//in이란 연산자를 대신 사용해주도록 하자 ! 
const obj = { id: 123, name: 'Ellie' };
for (const key in obj) { //key를 출력함 
  console.log(key);
}

// for(const key of obj.values()){
//   console.log(key);
// } vlues는 array의 함수임!!.. 


//iterable 하다는 건 순회가 가능하다는 것 
//객체 안에서 [Symbol.iterator]() : Iterator; 를 반환하면 됨 
//심볼 정의를 가진 객체나, 특정한 함수가 iterator를 반환해도 순회가 가능하다는 걸 볼수 있음 . array는 iterator를 반환함! 
//심볼 정의를 가진 객체나, 특정한 함수가 iterator를 리턴한다는 것은 순회 가능한 객체이다 라는 걸 알 수 있음. 
//순회가 가능하면 뭘 할 수 있을까? -> 빙글빙글 도는 연산자를 사용 가능함 for .. of 나 spread를 사용할 수 있떠라. 
