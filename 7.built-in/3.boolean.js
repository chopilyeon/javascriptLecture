// Boolean
//당연히 boolean이라는 객체를 만들 수도 있음 근데 보통은 원시타입으로 만듦. 유용한 함수가 없음. 
const isTrue = new Boolean(true); //이런 식으로 객체를 만들지는 않음 -> 메모리 낭비임 
console.log(isTrue.valueOf()); // BOOLEAN 객체안에는 그렇게까지 유용한 함수가 존재하지는 않음


/**
 * Falshy 거짓이 되는 값들은 이렇다! datatype에서 거짓이 되는 값들!~~!
 * 0
 * -0
 * null
 * NaN
 * undefined
 * ''
 */

/**
 * Truthy 진실이 되는 값들은 이렇다!~~ 
 * 1
 * -1
 * '0'
 * 'false' false이긴 해도 문자열이면 true임. 
 * []
 * {}
 */
