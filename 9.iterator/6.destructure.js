// 구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다


const fruits = ['🍏', '🥝', '🍓', '🍌'];
console.log(fruits[0]);//이렇게 하면 귀찮음.  
const [first, second, ...others] = fruits; // 배열처럼 그룹을 만들어!!! 배열의 구조가 분해되어 저장이 되게 됨. 
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
// const [x,y] = point ; // 이렇게 해도 됨 
const [y, x, z = 0] = point; // z값이 없다면 z=0 으로 기본적으로 설정을 해주어도 됨. 
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

//react에서 정말 많이 쓰는 구조임 

const [title, emoji] = createEmoji(); //이렇게도 배열을 받을 수 있다! 
console.log(title);
console.log(emoji);

const ellie = { name: 'Ellie', age: 20, job: 's/w engineer' };

// function display(person){
//   console.log(person.name);
//   console.log(person.age);
//   console.log(person.job); // 이런식으로 쓸 수 있음 근데 person 너무 귀찮다 
// }


//이렇게 쓸거다! 

function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(ellie);



const { name, age, job: occupation, pet = '강아지' } = // ellie; job이라는 이름을 occupation으로 받을수도 있더라 여기에 없는 새로운 키도 쓸 수가 있더라.
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);

// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}
changeColor(prop);
