// 접근제어자 - 캡슐화
// private(#), public(기본), protected -자바는 이렇게 함 ()는 자바스크립트에서 쓰는 방식임. 
//자바 스크립트는 #
class Fruit {
  #name;
  #emoji; // #을 붙이면 class 내에서만 제어가 가능함
  #type = '과일'; //type ='과일' 이런식으로 인스턴스를 만들 때 먼저 초기화가 되어야 한다면 생성자 밖에다 써주도록 하자.
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎'); // 외부에서 변경이 불가능하게 하고 싶다. 한번 만들어지면 변경이 불가능하게 하고 싶다 이거임. 
//apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함 
console.log(apple); 
//function에도 # 붙이면 호출도 안되고 보이지도 않음.
