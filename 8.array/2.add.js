const fruits = ['🍌', '🍎', '🍇', '🍑'];
//ARRAY라는클래슬르 이용하기 보다는 
//보통 리터럴로 많이 만든다 .

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);


//for문을 이용하자~ 
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩
fruits[6] = '🍓'; //인덱스로 접근하는 건 좋지 않음. 
console.log(fruits);

//fruits[fruits.length]= 이런식으로 쓰면 됨.  

//delete를 이용하는것도 좋지 않다~! 


//object에서 key를 삭제할떄 사용했던 delete을 이용하자
//이러면 삭제도 가능함. 
delete fruits[1];
console.log(fruits);
