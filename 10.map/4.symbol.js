// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2)); //당연히 const key1='key'면은  true나옴.  하지만 symbol을 쓰고 있으면 symbol 때문에 false나옴 
console.log(key1 === key2);

//symbol은 서로 다른 유일한 키로 만들기 가능 
// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)

//이 이름의 열쇠를 바로 지정하고 그걸 계속 사용할수가 있음  symbol.for // symbol 은 전혀 다름 
const k1 = Symbol.for('key');
//열쇠를 바로 지정하고 그걸 계속 사용해보도록 하자.
const k2 = Symbol.for('key');

console.log(k1 === k2); //이러면 true가 나옴.

console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1));

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]);
