// function fetchEgg(chicken) {
//   return Promise.resolve(`${chicken} => 🥚`);//promise를 만들고 나서 즉각적으로 성공한 RESOLVE시킬수가 있음. 
// }
// //resolve를 통해 then에서 값을 전달받앗음. 
// fetchEgg('shark').then((egg1)=>console.log(egg1)); // then에서는 egg라는 매개변수값을 전달받은 것임
// fetchEgg('shark').then((egg2)=>console.log(egg2)); // then에서는 egg라는 매개변수값을 전달받은 것임









//이렇게 할수도 있음. 
// function fetchEgg(chicken) {
//   return new Promise((resolve,reject)) // 
// }



function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);//promise를 만들고 나서 즉각적으로 성공한 RESOLVE시킬수가 있음. 
}




function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  // return Promise.resolve(`🪴 => 🐓`);
}

//promise에도 static함수가 있음.




//길게 늘어쓰면 이런식인것

// getChicken()
//   .then((e) => fetchEgg(e))
//   .then((e) => fryEgg(e))
//   .then((e)=>console.log(e));


//원래는 
//getChicken().then(chicken => {return fetchEgg(chicken);}) 임  



// getChicken()
//   .catch((e) => '🐔') // 무조건 닭으로 이라는 놈으로 만들어버려라. 
//   .then(fetchEgg) //여기서의 return값을 또 fryEgg에 보내버려! 
//   .then(fryEgg)
//   .then(console.log);

//   //promise도 thenthenthen으로 연결이 가능함! 
// getChicken()
// .catch(e=>console.log(e)); //이러면 치킨을 가지고 없음 출력함. 






  
// getChicken()
// .catch((e) => '🐔') // 무조건 닭으로 이라는 놈으로 만들어버려라. 
// .then(fetchEgg) //여기서의 return값을 또 fryEgg에 보내버려! 
// .then(fryEgg)
// .then(console.log);

// getChicken()
// .catch((e) => {
// console.log(e.name);
// return '🐔';  // 이렇게 해줘도 됨. 
// }) // 무조건 닭으로 이라는 놈으로 만들어버려라. 
// .then(fetchEgg) //여기서의 return값을 또 fryEgg에 보내버려! 
// .then(fryEgg)
// .then(console.log); // 중간중간에 catch로 에러를 잡아서 해결해줄 수도 있음. 

// //에러를 뒤에서 잡느냐 앞에서 잡느냐의 차이

getChicken()
.then(fetchEgg) //여기서의 return값을 또 fryEgg에 보내버려! 
.then(fryEgg)
.then(console.log)
.catch((e) => '🐔')
.then(e=>console.log(e)); // 무조건 닭으로 이라는 놈으로 만들어버려라. 



//에러의 버블이 발생해서 마지막 catch에서 잡아냄 
getChicken()
.then(fetchEgg) //여기서의 return값을 또 fryEgg에 보내버려! 
.then(fryEgg)
.then(console.log)
.catch(console.log); // 무조건 닭으로 이라는 놈으로 만들어버려라. 






//promise도 thenthenthen으로 연결이 가능함! 
