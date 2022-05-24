// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() { // 함수처럼 만들기 싫어! 
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);
//console.log(student.fullName()); 함수처럼 호출하니까 좀 이상함.  
//full Name 이라는 property를 만들면 안되나 ?
//first Name 아무리 바꿔도 fullName이 안바뀜 -> 즉 update가 안되더라~! 
//함수를 호출하는 시점에  update 된걸로 바꾸고 싶더라~! 이럴 떄 쓰는게 접근자 property
//get으로 만들어 버리면 이건 속성에 가까우므로 밑에 처럼 쓸수 있더라~ 
//set도 마찬가지임. 
console.log(student.fullName); // .을 하면은 get을 호출함. 
student.fullName = '김철수'; //set 함수를 쓰면 이렇게 쓸 수 있음. 
//뭔가를 할당하면 set 메소드 이용함. 

console.log(student);
