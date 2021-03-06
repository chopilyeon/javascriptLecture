const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλκ²(μ½λ°±ν¨μ)μ ν λ
fruits.forEach(function (value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π₯', price: 2 };
const item2 = { name: 'πͺ', price: 3 };
const item3 = { name: 'π', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((item) => item.name === 'πͺ'); //findλΌλ κ³ μ°¨ν¨μλ₯Ό μ΄μ©ν μ μμ 
console.log(result);
//findμ callbackν¨μμ λ°νκ°μ μ λ¬ν  μλ μλλΌ~ 
//returnλ§ μμΌλ©΄ μμμ²λΌ μ€μΌ μλ μμ. 
// let result = product.find(function(item){
//   return item.name==='πͺ';
// });

// let result = product.find((value)=>{
//   return value.name==='πͺ';
// });



//findλ predicateλ‘ λμ΄ μμ 
//foreachλ callback ν¨μ

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((item) => item.name === 'πͺ');
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ μ΄λ¬λ©΄ trueλ₯Ό λ°νν¨ 
result = products.some((item) => item.name === 'πͺ');
console.log(result);

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((item) => item.name === 'πͺ');
console.log(result);

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((item) => item.name === 'πͺ');
console.log(result);

console.clear();

// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2); //return μ΄λ―λ‘ μ΄λ°μμΌλ‘ μλ΅μ΄ κ°λ₯ν¨. 
console.log(result);
result = nums.map((item) => { //mapμ μ΄μ©ν΄ νΉμ  μμλ§ mapping ν  μκ° μμ. 
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// Flatmap: μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ μλ‘μ΄ λ°°μ΄λ‘!
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]); 
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split('')); //returnμ΄λ―λ‘ μλ΅μ΄ κ°λ₯ν¨. 
// result = ['dream', 'coding'].flatMap((text) =>{
//  return text.split('');
// });

console.log(result);

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
//mapμ²λΌ μλ‘μ΄ λ°°μ΄μ λ§λλ κ²μ΄ μλλΌ λ°°μ΄μ μμ ν¨. 
const texts=['hi','abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); //μ΄λ¬λ©΄ λ¬Έμμ΄ ννλ‘ λ³΄μ¬μ£Όκ² λ¨ 
console.log(numbers);
//0 1 10 μ΄λ°μμΌλ‘ μ λ ¬ν΄λ²λ¦Ό 
// < 0 aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
// > 0 bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ

//μ«μ 2κ°μ© μ°¨λ‘λ‘ λμν΄μ 0μΈμ§ μμμΈμ§ μμμΈμ§ νμΈν¨ 
numbers.sort((a, b) => a-b); //μ΄κ² μμλ₯Ό returnνλμ§ 0μ returnνλμ§ μμλ₯Ό return νλμ§ μμμΌν¨ .
// numbers.sort((a, b) => b-a); // μμμ΄λκ² μμλ‘ λμμΌλ λ°λλ‘ μ λ ¬ν΄μ£Όκ² μ§~! 
console.log(numbers);



// reduce λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘!
//sumμ΄λΌλ μΈμμ κ·Έ κ°μ΄ ν©μ³μ§ valueλ€μ΄ μ‘΄μ¬ν  κ²μ. 
//μ μ΄μ μ μ΄μ κ°μ μ΅μ’μ μΌλ‘ μ²λ¦¬νλ€λ κ²μ μ μ μλ€. 
//μ΄λ»κ² μ²λ¦¬ν μ§λ μ°λ¦¬κ° callback ν¨μ μ μν΄μ μ²λ¦¬ν¨! 
//μ²«λ²μ¨° μΈμλ κ³μν΄μ κ°μ μ μ₯ν  μΈμμ sumμ μ΄κΈ°κ°μ λλ²μ¨° μΈμμμ μ ν  μ μμ 
//valueμλ κ°κ°μ μμλ€μ΄ μμ°¨μ μΌλ‘ μ λ¬μ΄ λ¨ ! 
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);

result = [1,2,3,4,5].reduce((sum,value)=>{
  sum+=value;
  return sum;
},0); // 0μ μ£Όλ©΄μ μ²μμ μμν  κ° sumμ 0μΌλ‘ μ΄κΈ°νν  μ μκ» λ¨.
//sumμ΄ κ³μ λ³νλ€ 0 ->1 -> 3 -> 6 -> ........... μ΄λ°μ 
console.log(result);
