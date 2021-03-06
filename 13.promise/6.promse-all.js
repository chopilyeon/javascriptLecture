function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000); //1์ด ๋ค์ ๋ฐ๋๋๋ฅผ ๋ฐํํจ 
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 3000); //3์ด ๋ค์ ์ฌ๊ณผ๋ฅผ ๋ฐํํจ
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange')); // ์ค๋ ์ง๋ ๋ฐ๋ก ์๋ฌ๋ฅผ ๋์ง. 
}

// ๋ฐ๋๋๊ณผ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ (4์ด ๊ฑธ๋ฆผ))
getBanana() //
  .then((banana) => // ์ธ์๊ฐ์ด ๊ฐ์ง ์์ผ๋ฏ๋ก ์๋ต์ ๋ชปํ์ ๋์  return๊ฐ์ ์๋ตํจ
    getApple() // apple ํจ์ ๋ถ๋ฅด์!~! 
      .then((apple) => [banana, apple]) // return์ด ์๋ต ๋ ๊ฒ์ promise๊ฐ return์ด ๋จ. 
  )
  .then(console.log); // 4์ด ์๋ค๊ฐ ์ถ๋ ฅ์ด ๋จ.  ์์ฐจ์ ์ผ๋ก ์งํํ๋๊น ๋งค์ฐ ๋ฒ๊ฑฐ๋ก์. 
//.then((result)=>console.log(result));

  //์๋ ์ฝ๋๋ ์ด๋ฌ๋๋ฐ return์ ์๋ตํ์. 
  //์ค์ฒฉ๋ ์ฝ๋๋ ์ฝ๋ฐฑํฌ์ด ๋จ. 
  // getBanana() //
  // .then((banana) => // ์ธ์๊ฐ์ด ๊ฐ์ง ์์ผ๋ฏ๋ก ์๋ต์ ๋ชปํ์ ๋์  return๊ฐ์ ์๋ตํจ
  //   getApple() //
  //     .then((apple) => {
  //      return [banana, apple]) // return์ด ์๋ต ๋ ๊ฒ์ 
  //     })
  // .then(console.log); // 4์ด ์๋ค๊ฐ ์ถ๋ ฅ์ด ๋จ.  ์์ฐจ์ ์ผ๋ก ์งํํ๋๊น ๋งค์ฐ ๋ฒ๊ฑฐ๋ก์. 









// Promise.all ๋ณ๋ ฌ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ! all ์ด๋ผ๋ staticํจ์๋ฅผ ์ฒ๋ฆฌํด๋ณด์! 
Promise.all([getBanana(), getApple()]) // ๋ฐฐ์ด๋ก ์ ๋ฌํ๋ฉด ๋จ. 
  .then((fruits) => console.log('all', fruits)); //์คํํ ๊ฒฐ๊ณผ๋ค์ด ๋ฐฐ์ด๋ก ์ ๋ฌ์ด ๋จ. 3์ด ์๋ค๊ฐ ์ถ๋ ฅ์ด ๋จ
  //๋ณ๋ ฌ์ด๋ฏ๋ก 3์ด๊ฐ ๊ฑธ๋ฆฐ๋ค!!
  

// Promise.race ์ฃผ์ด์ง Promise์ค์ ์ ์ผ ๋นจ๋ฆฌ ์ํ๋๊ฒ์ด ์ด๊น!
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit)); //then์์ ๋ฐฐ์ด๋ก ๋ฐ์์ด. 

Promise.all([getBanana(), getApple(), getOrange()]) // orange๋ error๊ฐ ๋์ด ์๋ฌ๊ฐ ๋ฐ์ํ๋ ๊ฒ์ promise all์ ๋๋ฆฌ๋ฉด 
  .then((fruits) => console.log('all-error', fruits)) //then์ด ํธ์ถ๋ ์๋จ. all ์ค์ ์๋ฌ๊ฐ ๋๋๊ฒ ์์ผ๋ฉด catch๋ฅผ ํด์ค์ผํจ.
  .catch(console.log); // ์ ๋ถ ์ฑ๊ณตํด์ผ console๋ก ๋์ด๊ฐ๋ฏ๋ก all error ๊ฐ ์ฐํ์ง ์์. 
  // catch(e => console.log(e)) ์ 

Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
//์คํจํ๋  ์ฑ๊ณตํ๋  ๋ฐฐ์ด๋ก ๋ฌถ์ด์ ๋ณด์ฌ์ค.