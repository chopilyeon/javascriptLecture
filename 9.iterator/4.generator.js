// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

//함수를 사용해야함 *를 사용해주도록 하자 이래야 generator인줄 알음. 
// function* multipleGenerator() {
//     for (let i = 0; i < 10; i++) {
//       console.log(i);
//       yield i ** 2; //사용자가 원할떄마다 하나하나씩 return 해줌. // next를 호출해야 다음을 돌게 됨 ->  사용하는 사람에게 제어권을 양도한 셈 
 //     }
// } // 원래는 이랬었음 
// let next = multiple.next();
// console.log(next.value, next.done);



function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2; //사용자가 원할떄마다 하나하나씩 return 해줌.
    }  
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); 이러면 나 이제 그만할거야! 이런 뜻임. 
multiple.throw('Error!'); // multiple 안으로 error를 던짐 

next = multiple.next(); // 이러면 죽어버림 이거 캐치 하기 위해서 위에다가 try - catch문을 씀. 
console.log(next.value, next.done);
 //우리가 외부에서도 generator를 제어할 수 있더라~ 