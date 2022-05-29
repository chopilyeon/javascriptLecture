// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
// 자바스크립트에서 object가 복사할되거나 전달되어 질때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign //기존의 object를 어딘가에 전달하거나 만들때는 새로운 object를 만드는 것이 아니라
// 얕은 복사가 이루어 지더라~!  


const pizza = { name: '🍕', price: 2, owner: { name: 'Ellie' } }; //이걸 복사하고 전달할떄는 owner object가 만들어지는 것이 아닌 메모리 주소를 보내주더라~! 
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1); //새로운 배열을 만듦. 
console.log('store1', store1);
console.log('store2', store2);
//서로 다른 배열 객체를 만들고 있다. 

store2.push(sushi);
console.log('store1', store1);
console.log('store2', store2);
//당연히 SOTRE2에만  sushi가 있는 것이 당연하게 느껴짐


pizza.price = 4;
console.log('store1', store1);
console.log('store2', store2);


//배열을 건들지도 않았는데 전부 4로 수정이 됨. 