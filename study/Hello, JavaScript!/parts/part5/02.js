var str = 'abcdefghijklmnopqrstuvwxyz';

//인덱스로 문자열 알아내기
console.log(str[3])
console.log(str.charAt(3))

//부분문자열 구하기
console.log(str.substr(3,5));   //A위치부터 B길이만큼
console.log(str.substr(3));     //A위치부터 끝까지
console.log(str.substring(3,5));//A위치부터 B위치부터
console.log(str.substring(3));   //A위치부터 끝까지

//문자열 위치 구하기
console.log(str.indexOf('b'));  //앞에서부터 찾음
console.log(str.indexOf('b'));  //뒤에서부터 찾음
