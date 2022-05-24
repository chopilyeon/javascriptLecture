const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y }; {}는 객체 만드는 것임.
console.log(coordinate);



//이런 식으로도 객체를 만들 수 있음. 
function makeObj(name, age) {
  return {
    name,
    age,
  };
}
