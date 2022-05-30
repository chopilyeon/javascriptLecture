// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' };
//if문 안에서는 평가를 함 boolean 값으로 반환이 됨 
if (obj1 || obj2) {
  console.log('둘다 true!');
}

let result = obj1 && obj2; //변수에 그냥 할당하게 되면? object 자체가 할당이 됨 obj1이 true 이므로 obj2가 할당이 됨 
console.log(result);

result = obj1 || obj2; //obj1이 true이므로 obj1이 할당이 됨 
console.log(result);

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우


function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1); //obj1.owner가 없지 않다면 changeOwner를 바꿀수가 있더라.
obj2.owner && changeOwner(obj2); // obj2 같은 경우는 주인이 있으므로 changeOwner가 실행이 됨.
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1); //앞의 것이 false이므로 주인을 만들어줘야함 뒤에걸 true로 
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
const price = item && item.price; //null이면 죽어버림  //item이 true라면은 item.price에 접근해서 price에 할당할 것입니다.
console.log(price);


// //let item; //
// const price = item.price;
// console.log(price) //에러나게 됨 


// 기본값을 설정
// default parameter는 null과 undefined인 경우
// || falshy한 경우 설정(할당) 0, -0, null, undefined, ''



function print(message = 'Hi') {
  const text = message || 'Hello'; //message가 없다면 hello라고 할당해줄것입니다.
  console.log(text);
}

//이런식으로 default parameter를 쓸 수도 있음 null과 undefined인 경우 
function print(message = 'Hi') {
  const text = message; //message가 없다면 hello라고 할당해줄것입니다.
  console.log(text);
}


print('안녕!');
print();
print('');
