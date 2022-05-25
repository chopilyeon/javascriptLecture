function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}


//이러면 4초가 걸림 

function fetchFruits(){
  return getBanana()//
  .then((banana)=>
    getApple()
    .then((apple)=>console.log([banana,apple])));
    
}

// function fetchFruits(){
//   return getBanana()//
//   .then((banana)=>
//     getApple()
//     .then((apple)=>console.log(apple))
//     );
// }

fetchFruits();





// 바나나과 사과를 같이 가지고 오기
// async function fetchFruits() { //async 붙이면 이 함수는 비동기 함수야~! 하지만 조금 더 동기적으로 보이게 작성할 수 있음. 
//   const banana = await getBanana(); //banana 값을 기다렸다가 banana에 받아옴 
//   const apple = await getApple(); //getApple()만 하면은 apple에는 promise가 들어있음. 그래서 await로 값을 받아와야 함! promise가 끝날때까지 기다림 
//   return [banana, apple]; //promise값을 받아오는게 아니라 banana와 apple에는 값을 받아옴 
// }
//우리가 promise 함수를 쓸 때 
//getBanana와 getApple은 promise를 return함 이걸 then then으로 엮는 것이 아니라 
//async를 사용해서 비동기적인 코드를 동기적으로 즉 절차적으로 사용할수가 있음. 
//단 promise를 받아올때는 await로 값을 받아와야함. 
//async 때문에 [banana,apple]값을 resolve하는 값이 만들어짐. 

//즉 위에것도 promise를 return함 

//즉 비절차적인것들을 모아놓아서 한번에 묶어서 promise로 뱉어낼수 있다
//banana와 apple을 resolve 한다! 


//즉 4초가 걸림
//banana 얻어오는데 1초 apple 얻어오는데 3초 
// fetchFruits() //
//   .then((fruits) => console.log(fruits));
