// [Symbol.iterator](): IterableIterator<T>;
// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!


//for of 말고 next를 사용해보자~! 


const iterator = array.values();
console.log(iterator.next());// value와 done이라는 것이 있음 
//value에는 실제 값이 done은 마지막인지 아닌지! 
console.log(iterator.next().value);
console.log(iterator.next().done); // 이렇게 써주어도 됨


while(true){
  const item=iterator.next();
  if(item.done)break;
  console.log(item.value);
}






// const multiple = {
//   [Symbol.iterator]() { // 함수를 호출했을 떄 iterator를 반환하면 됨 !  
//     const max = 10;
//     let num = 0;
//     return {
//       next() {//next 할대마다 값을 return한다
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };








const multiple = {
  [Symbol.iterator]: () => {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

console.clear();
for (const num of multiple) {
  console.log(num);
}
