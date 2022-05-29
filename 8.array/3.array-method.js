// 배열의 함수들
// 배열 자체를 변경하는지, 반환할때 새로운 배열을 반환하는지 잘 보자..//  함수를 사용할 떄 꼭 확인하자! 

const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
//클래스이름을 사용하면 static 메소드임. 
console.log(Array.isArray(fruits));
console.log(Array.isArray({})); //빈 오브젝트를 전달하면 false가 나옴 

// 특정한 아이템의 위치를 찾을때
console.log(fruits.indexOf('🍎'));

// 배열안에 특정한 아에팀이 있는지 체크
// 문자열도 이런식으로 했었음 /
console.log(fruits.includes('🍎'));

// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)
console.log(fruits);
console.log(lastItem);





// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); //1부터 시작해서 1개를 삭제한다. 
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(deleted); //사과가 출력됨 . 삭제된걸 반환받았음. 
fruits.splice(1, 1, '🍎', '🍓'); //1부터 시작해서 1개 없애고 추가해주자~~
//fruits.splice(1, 0, '🍎', '🍓'); // 0쓰면 하나도 삭제 안하고 추가해주는 것임. 
console.log(fruits); // 배열 자체를 수정(업데이트)

//새로운 배열을 만드는 함수들 

// 잘라진 새로운 배열을 만듬
let newArr = fruits.slice(0, 2); //2는 제외하고 출력해라~! 
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1); //제일 뒤에서 한칸 땡겨진 놈부터. 
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); //배열을 이어줌 
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse(); 
console.log(arr4); 
console.clear();
// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3)); //기본적으로 1단계까지만 flat을 해줌.
arr = arr.flat(3); //  이러면 3단계까지 flat시킴

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열 자체를 수정
console.log(arr);

arr.fill('s', 1, 3); //1부터 3까지 s로 채워줌 
console.log(arr);

arr.fill('a', 1); //시작하는 거부터 끝까지 a로 채워줌 
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(); //item을 하나의 문자열로 합할 수가 있음. 
console.log(text);
text = arr.join(' | ');
console.log(text);
