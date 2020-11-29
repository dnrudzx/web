var a = 'Hello';
var b = 'world';

a = a.concat(b)     //문자열 붙이기
a = a+b;            //결과가 같은데 왜 위에걸 쓰라는 것인가?

console.log(a);
console.log(a.length);  //문자열 길이 구하기