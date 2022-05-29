//왜 유용한 객체를 쓰지 않나요? -> 객체는 다앙한 정보를 담고 있기 때문에 원시타입보다 메모리를 많이 차지하게 됨
//그래서 가능하면 원시타입을 쓰다가 피룡에 따라 객체로 바꾸는 것임. 
//이제 글로벌적으로 쓸 수 있는 value와 함수들에 대해 알아볼 것임! 

console.log(globalThis); //전역적으로 globalThis라는 걸 쓸  수 있음 글로벌적으로 전역적으로 사용할 수 있음 

console.log(this); //node에서의 this와 window에서의 this는 다른 개념임 
//node에서의 
//이 밑에거 다 전역적으로 사용할 수 있음. 
console.log(Infinity); 
console.log(NaN);
console.log(undefined);
//


eval('const num = 2; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43')); //문자열이긴 하지만 숫자로 변환해줌 
console.log(parseInt('12.43')); // 문자열 안에 들어있는 숫자를 정수로 변환해줌 
console.log(parseInt('11')); //

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://드림코딩.com';// (url 은 uri(어떤 리소스를 가르키는 아이디나 주소를 가르킴)의 하위 개념 ) 웹사이트를 가르키는게 유일하게 url 주소임 

const encoded = encodeURI(URL); //아스키 코드로 바꿔주게 됨. 인코딩 해준다고 생각하면 됨. encodeURI는 전역함수임.   
console.log(encoded); 


const decoded = decodeURI(encoded); //이걸 decode해주면 바꿔줌 원래의 한글로 변환이 됨. 나중에 프론트엔드 백엔드 통신할떄 유용하게 쓰임 
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com'; //http가 없고 .com 만 있으면 encodeURIComponent라는 메소드 이용하자~! 
console.log(encodeURIComponent(part));


