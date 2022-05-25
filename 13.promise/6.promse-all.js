function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000); //1초 뒤에 바나나를 반환함 
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000); //3초 뒤에 사과를 반환함
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange')); // 오렌지는 바로 에러를 던짐. 
}

// 바나나과 사과를 같이 가지고 오기
getBanana() //
  .then((banana) => // 인자값이 같지 않으므로 생략은 못했음 대신 return값은 생략함
    getApple() //
      .then((apple) => [banana, apple]) // return이 생략 된 것임 promise가 return이 됨. 
  )
  .then(console.log); // 4초 있다가 출력이 됨.  순차적으로 진행하니까 매우 번거로움. 


  //원래 코드는 이랬는데 return을 생략했음. 
  //중첩된 코드는 콜백헬이 됨. 
  getBanana() //
  .then((banana) => // 인자값이 같지 않으므로 생략은 못했음 대신 return값은 생략함
    getApple() //
      .then((apple) => {
       return [banana, apple]) // return이 생략 된 것임 
      })
  .then(console.log); // 4초 있다가 출력이 됨.  순차적으로 진행하니까 매우 번거로움. 









// Promise.all 병렬적으로 한번에 모든 Promise들을 실행! all 이라는 static함수를 처리해보자! 
Promise.all([getBanana(), getApple()]) // 배열로 전달하면 됨. 
  .then((fruits) => console.log('all', fruits)); //실행한 결과들이 배열로 전달이 됨. 3초 있다가 출력이 됨
  //병렬이므로 3초가 걸린다!!
  

// Promise.race 주어진 Promise중에 제일 빨리 수행된것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit)); //then에서 배열로 받아옴. 

Promise.all([getBanana(), getApple(), getOrange()]) // orange는 error가 나옴 에러가 발생하는 것을 promise all을 떄리면 
  .then((fruits) => console.log('all-error', fruits)) //then이 호출도 안됨. all 중에 에러가 나는게 있으면 catch를 해줘야함.
  .catch(console.log); // 전부 성공해야 console로 넘어가므로 all error 가 찍히지 않음. 
  // catch(e => console.log(e)) 임 

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
//실패하든 성공하든 배열로 묶어서 보여줌.