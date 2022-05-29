// Spread 연산자, 전개구문
// 모든 Interable은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018 
//정말 최신의 문법은 browser에서 지원을 안할 수 있으니 babel을 이용하더라~ 
function add(a, b, c) {
  return a + b + c;
}



const nums = [1, 2, 3];
// add(nums[0],nums[1],nums[2]); 이렇게는 안함.
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) { //...nums 뭐 올지 모르니까 그냥 저렇게 쓰면 알아서 받음 
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4); // 첫번쨰 두번쨰는 내가 아는데 나머지는 몰라~ 하면은 저렇게 ...nums라고 써주더라! 

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍓', ...fruits2]; //...가 spread임. //fruits1과 fruits2사이에 추가도 쉬움
console.log(arr);

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const updated = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie);
console.log(updated);
