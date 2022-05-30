function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error) //이거 원래 catch(error => console.errror(error)) 였는데 생략된 것임 인풋값이랑 들어가는 인자값이랑 다 똑같아서.
  .finally(() => console.log('끝났다!'));
