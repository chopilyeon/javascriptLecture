// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) { // 숫자가 아니거나 0보다 작다면
      this.#value = 0; //class 내에서만 제어가 가능함. 
    } else {
      this.#value = startValue; //외부에서 접근 못하게 private field로 만듬 
    }
  }

  get value() { //접근 제어자
    return this.#value; //#을 통해서 외부로부터 데이터를 다 제한함
  }

  increment = () => {
    this.#value++; //#으로 value를 증가시키는건 increment 함수뿐임. 
  };
}
const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.value);
