const obj = {
  name: '엘리',
  age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key]; //obj.key는 쓸 수 없음. 우선 obj에 key라는 property가 없름. 그래서 대괄호를 이용함. 전달된 키로 접근할 수 있도록 하자. 
}
console.log(getValue(obj, 'name'));

//대괄호 표기법은 동적으로 뭔가를 할 때 많이 사용함. 
//자 그럼 새로운 걸 할당할 때도 쓸 수 있다는 걸 알겠다! 

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
  delete object[key];
}

//대괄호 표기법은 동적으로 뭔가를 할 때 많이 사용함. 

