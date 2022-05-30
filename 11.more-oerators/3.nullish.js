// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''
let num = 0;
console.log(num || '-1'); // num이 없을 때만 -1을 출력하고 싶은 것인데 num에는 0이 있음 0은 flashy하므로 -1이 나옴 
console.log(num ?? '-1'); //null과 undefinde인 경우에만 
