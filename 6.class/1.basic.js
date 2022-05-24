// 객체를 손쉽게 만들수 있는 템플릿


// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨




// 클래스 class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  

    // this.display=()=>{
    //   console.log(`${this.name}: ${this.emoji}`);
    // }; 이렇게 해도 상관은 없지만 보통은 생성자 밖에서 정의를 한다. 

  };
  //function이란 keyword 붙이면 에러남. 
  // display(){
  //   console.log(`${this.name}: ${this.emoji}`);
  // }
  //위에처럼 함수 정의해도 됨

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'ellie' };
