// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined을 확인할때
let item = { price: 1 };
const price = item?.price; //있니? 있으면 price에 접근하고 없으면 접근하지 마.
console.log(price);

let obj = { name: '🐶', owner: { name: '엘리' } };
const ownerName = obj && obj.owner && obj.owner.name; //원래 이렇게 복잡함 
//conse ownerName=obj.owner.name; 이렇게 쓰면은  없을 때  printName()에러남 -> 없는데 할당하라고 했으므로 
//carshed 됨 

function printName(obj) {
  const ownerName = obj?.owner?.name; //obj가 있으면 owner owner가 있다면 name 없으면 undefined 
  console.log(ownerName);
}
printName(obj);
//printName(); 아무런것도 전달하지 않으면 아무것도 출력이 되지 않음. undefined 
