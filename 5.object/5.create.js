// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: ๐`);  //key๋ display value๊ฐ์ด ํจ์์ ๊ฐ์ฒด ์์์ ์๊ธฐ ์์ ์ ์์ฑ์ ์ ๊ทผํ  ๋๋ this๋ผ๋ ๊ฑธ ์ด์ฉํจ.
//   },
// };

//๊ฐ์ฒด๋ ์๋ก ์ฐ๊ด๋ ์ ๋ณด์ ํจ์๋ค์ ๋ฌถ์ด์ ๊ด๋ฆฌํ  ์ ์์. 

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: ๐`);
//   },
// };

//๋๋ฌด ๊ท์ฐฎ์์ ํํ๋ฆฟ์ ๋ง๊ฒ ์์ฑ์ ํจ์๋ฅผ ์ด์ฉํด๋ณด์! 
//๊ฐ์ฒด ๋ง๋ค๊ธฐ๊ฐ ๋๋ฌด ๊ท์ฐฎ์! 


// ์์ฑ์ ํจ์ ํจ์ ์ด๋ฆ์ ๋๋ฌธ์๋ก ์์ฑํ๋ฉด์ ์์ฑ์ ์ญํ ์ ํ  ์ ์์! 

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  //์ด๋ ๊ฒ ํจ์๋ ๋ง๋ค ์ ์์.
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  // return this; // ์๋ต๊ฐ๋ฅ ์์ฑ์ํจ์์์๋ ์๋์ผ๋ก return ํ๋๋ก ๋ง๋ค์ด์ค.
}


// ์์ฑ์ ํจ์๋ฅผ ์ด์ฉํด์ ๋ง๋ค์ด๋ณด์! 
const apple = new Fruit('apple', '๐');
const orange = new Fruit('orange', '๐');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();
