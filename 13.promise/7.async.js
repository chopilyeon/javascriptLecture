//then을 계속 쓰면 너무 지저분함. 




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


function fetchFruits(){
  return getBanana() //
  .then ((banana)=>
   getApple()
          .then((apple)=>[banana,apple]) // 다 return한 promise가 다 resolve가 되면~! 
  );
}


//결국 이 함수는 promise를 return하게 된다는 것을 알 수 있음. 

fetchFruits().then(result=>console.log(result));

//비동기적인걸 동기적으로 보이게끔 해보자 -> 즉 then을 사용하지 않고도 절차적으로 보이게끔 할 수 있음. 

//call back 계속 하면 여전히 지저분함 
// 




//promise니까 aswait를 꼭 할당해준다 
// 바나나과 사과를 같이 가지고 오기
//async 붙이면 이 코드는 비동기적인 함수야~ 이제 동기적으로 작성할 수 있게 됨 
async function fetchFruits() { // 이 함수는 비동기 함수야! -> async 는 바나나와 
  const banana = await getBanana(); //바나나 가져올떄까지 기다려라! 
  const apple = await getApple(); // apple에는 promise가 들어있음. getapple의 promise가 끝날 떄까지 기다렸다가 값 자체를 apple 에 할당함 
  return [banana, apple]; // 그리고 반환하자! 
}


//promise를 쓸 때 then then 으로 엮는 것이 아니라 async는 동기적으로 사용할 수 있더라~! 
//단 await를 꼭 써주자! 

//이러면 조금 더 동기적인 코드를 사용할 수가 있음. 

fetchFruits() //
  .then((fruits) => console.log(fruits));
