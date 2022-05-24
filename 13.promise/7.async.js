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
          .then((apple)=>[banana,apple])
  );
}


//call back 계속면 여전히 지저분함 






// 바나나과 사과를 같이 가지고 오기
async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
