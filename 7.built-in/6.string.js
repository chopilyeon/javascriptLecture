
//이것도 mvn에 가서 확인을 하자! 

const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

//각각의 문자열에 무엇이 있는지 확인할 수 있음 
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));


console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.includes('tx'));
console.log(text.includes('h'));
console.log(text.includes('H'));

console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.substring(0, 2)); //부분적인 string 끌고옴 
console.log(text.slice(2)); //문자열 삭제할 수 있음. 
console.log(text.slice(-2)); //뒤에서터 2번쨰 있는거까지 삭제 가능 

const space = '            space       ';
console.log(space.trim());

//알고리즘에서 정말 많이 사용함. 
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(', ', 2)); //끊어진것 중에 2덩어리만 갖고 싶다면? 
