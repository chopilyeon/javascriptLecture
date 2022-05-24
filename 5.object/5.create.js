// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);  //key는 display value값이 함수임 객체 안에서 자기 자신의 속성을 접근할 때는 this라는 걸 이용함.
//   },
// };

//객체는 서로 연관된 정보와 함수들을 묶어서 관리할 수 있음. 

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

//너무 귀찮아서 템플릿에 맞게 생성자 함수를 이용해보자! 
//객체 만들기가 너무 귀찮아! 


// 생성자 함수 함수 이름을 대문자로 생성하면은 생성자 역할을 할 수 있음! 

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  //이렇게 함수도 만들 수 있음.
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // 생략가능 생성자함수에서는 자동으로 return 하도록 만들어줌.
}


// 생성자 함수를 이용해서 만들어보자! 
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
