// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
//symbol을 씀으로써 이름은 비록 똑같지만 서로 다른 값이 생성이 됨.! 
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello'); //난 key1으로 만들었는데 key2로도 접근하는 상황이 만들어짐. 
console.log(map.get(key2)); //당연히 const key1='key'면은  true나옴.  하지만 symbol을 쓰고 있으면 symbol 때문에 false나옴 
console.log(key1 === key2); //이러면 값과 키가 같으므로 true 하지만 symbol 쓰면은 false가 나옴. 

//symbol은 서로 다른 유일한 키로 만들기 가능 
// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)-> 이 이름의 symbol을 만들고 계속해서 사용할 수 있더라~! 

//이 이름의 열쇠를 바로 지정하고 그걸 계속 사용할수가 있음  symbol.for // symbol 은 전혀 다름 
const k1 = Symbol.for('key');
//열쇠를 바로 지정하고 그걸 계속 사용해보도록 하자.
const k2 = Symbol.for('key');

console.log(k1 === k2); //이러면 true가 나옴.

console.log(Symbol.keyFor(k1)); //해당 심볼이 가진 문자열에 대한 정보를 볼수 있음. 
console.log(Symbol.keyFor(key1)); //keyfor은 전역 resister에 저장된 것만 볼 수가 있음. key1은 resister에 저장되어 있찌 않기 때문에 갖고 올 수가 없음 

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 }; //map에서 key에 대한 보안을 높일 수 있을때 symbol을 이용할 수 있더라.
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]); //이거 undefined 나옴. 위에 symbol key랑 전혀 다른 key이기 떄문임 
