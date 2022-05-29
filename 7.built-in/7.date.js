// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date());
console.log(new Date('Jun 5, 2022')); //특정한 시간을 지정할 수가 있음. 
console.log(new Date('2022-12-17T03:24:00'));

//공통된 세계 시간 단위로 만들어줌. 
console.log(Date.now()); //date의 static함수도 사용할 수 있음. 
console.log(Date.parse('2022-12-17T03:24:00')); //특정한 문자열로 입력하게 되면은 바꿔줌

const now = new Date(); //이제 instance 레벨로 사용이 가능함. 
now.setFullYear(2023); 
now.setMonth(0); // 0: 1
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1 //0부터 index 시작함. 
console.log(now.getDay()); // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString()); //날짜만 
console.log(now.toTimeString()); //시간만 이런식으로 표현이 가능함. 
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));
