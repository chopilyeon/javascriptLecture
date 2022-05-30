// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷

// 자유롭게 왔다갔다 jason은 object로 object는 jason으로
// stringify(object): JSON
// parse(JSON): object

//자바 스크립트에서 사용하는 객체 (object)를 조금더 서버와 주고받기 쉽게 문자열형태로 반환한 형태가 됨. 



const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};




// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(ellie); // 이걸 json 형태의 문자로 변환을 할 수가 있음.
console.log(ellie);
console.log(json);
//먹는다는 함수는 포함되지 않음 
//데이터에 대해서는 문자열로 변환이 가능하지만 함수는 json은 포함되지 않음
//그래서 데이터의 상태만 포함이 됨 

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);
