// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)
function display(num) {
  num = 5; // ❌
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const ellie = { name: 'Ellie' };
displayObj(ellie);
console.log(ellie);


//이름을 변경한다는 느낌을 주자  기존에 주어진 object의 값을 유지하면서 이름만 변경햊주자. 문법은 뒤에서
function changeName(obj) {
  return { ...obj, name: 'Bob' };
}

//함수 내부에서 무언가 바꾸어야 한다면 이름부터 변경하는 느낌을 주자. 
//반환할떄는 새로운 오브젝트를 만드는 것이 중요함. 