const fruits = ['🍌', '🍓', '🍇', '🍓'];

// 배열을 빙글 빙글 돌면서 원하는것(콜백함수)을 할때
fruits.forEach(function (value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을때
// find: 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === '🍪'); //find라는 고차함수를 이용할수 있음 
console.log(result);
//find에 callback함수의 반환값을 전달할 수도 있더라~ 
//return만 있으면 위에처럼 줄일 수도 있음. 
// let result = product.find(function(item){
//   return item.name==='🍪';
// });

// let result = product.find((value)=>{
//   return value.name==='🍪';
// });



//find는 predicate로 되어 있음 
//foreach는 callback 함수

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 이러면 true를 반환함 
result = products.some((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪');
console.log(result);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2); //return 이므로 이런식으로 생략이 가능함. 
console.log(result);
result = nums.map((item) => { //map을 이용해 특정 요소만 mapping 할 수가 있음. 
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: 중첩된 배열을 쫘악 펴서 새로운 배열로!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]); 
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split('')); //return이므로 생략이 가능함. 
// result = ['dream', 'coding'].flatMap((text) =>{
//  return text.split('');
// });

console.log(result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
//map처럼 새로운 배열을 만드는 것이 아니라 배열을 수정함. 
const texts=['hi','abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); //이러면 문자열 형태로 보여주게 됨 
console.log(numbers);
//0 1 10 이런식으로 정렬해버림 
// < 0 a가 앞으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순

//숫자 2개씩 차례로 대입해서 0인지 음수인지 양수인지 학인함 
numbers.sort((a, b) => a-b); //이게 음수를 return하는지 0을 return하는지 양수를 return 하는지 알아야함 .
// numbers.sort((a, b) => b-a); // 양수이던게 음수로 나왔으니 반대로 정렬해주겠지~! 
console.log(numbers);



// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
//sum이라는 인자와 그 값이 합쳐진 value들이 존재할 것임. 
//접어서 접어서 값을 최종적으로 처리한다는 것을 알 수 있다. 
//어떻게 처리할지는 우리가 callback 함수 정의해서 처리함! 
//첫번쨰 인자는 계속해서 값을 저장할 인자임 sum의 초기값은 두번쨰 인자에서 정할 수 있음 
//value에는 각각의 원자들이 순차적으로 전달이 됨 ! 
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);

result = [1,2,3,4,5].reduce((sum,value)=>{
  sum+=value;
  return sum;
},0); // 0을 주면은 처음에 시작할 값 sum을 0으로 초기화할 수 있께 됨.
//sum이 계속 변한다 0 ->1 -> 3 -> 6 -> ........... 이런식 
console.log(result);
