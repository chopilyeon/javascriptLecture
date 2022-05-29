// Set
//set은 중복이 안된다. 객체도 넣을 수 있음 
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item)); //배열의 고차함수처럼 사용이 가능함. 
for (const value of set.values()) {  //values를 보아하니 iterable이구나! 
  console.log(value);
}

// 추가 // SET은 중복이 안된다
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트 //객체도 넣을 수 있더라~! 
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10; //shallow  copy를 하므로 값을 변경하더라도 set의 크기가 3이 되지는 않음. 그냥 같은 주소값을 계속 가지고 있음. 
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: '🍌', price: 5 }; //참조주소가 다르므로 set의 크기는 3이 되더라~! 
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
