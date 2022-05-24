// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();



class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 내가 상속하고 있는 부모 클래스임. // 부모클래스에 color를 전달해서 dog라는 class에만 owner name을 전달
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자아~!');
  }

  // 오버라이딩 overriding 덮어 씌우는 거임.
  eat() {
    super.eat(); //부모에 있는 함수 불러들일수도 있음 *super 
    console.log('강아지가 먹는다!');
  }
}



const dog = new Dog('빨강이', '엘리');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
