const fruits = ['๐', '๐', '๐', '๐'];
//ARRAY๋ผ๋ํด๋์ฌ๋ฅด ์ด์ฉํ๊ธฐ ๋ณด๋ค๋ 
//๋ณดํต ๋ฆฌํฐ๋ด๋ก ๋ง์ด ๋ง๋ ๋ค .

// ๋ฐฐ์ด ์์ดํ์ ์ฐธ์กฐํ๋ ๋ฐฉ๋ฒ
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);


//for๋ฌธ์ ์ด์ฉํ์~ 
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['๐', '๐', '๐', '๐'];
// ์ถ๊ฐ, ์ญ์  - ์ข์ง ์์ ๋ฐฉ์ ๐ฉ
fruits[6] = '๐'; //์ธ๋ฑ์ค๋ก ์ ๊ทผํ๋ ๊ฑด ์ข์ง ์์. 
console.log(fruits);

//fruits[fruits.length]= ์ด๋ฐ์์ผ๋ก ์ฐ๋ฉด ๋จ.  

//delete๋ฅผ ์ด์ฉํ๋๊ฒ๋ ์ข์ง ์๋ค~! 


//object์์ key๋ฅผ ์ญ์ ํ ๋ ์ฌ์ฉํ๋ delete์ ์ด์ฉํ์
//์ด๋ฌ๋ฉด ์ญ์ ๋ ๊ฐ๋ฅํจ. 
delete fruits[1];
console.log(fruits);
