//한줄 주석
/*여러줄 주석*/

///////////////////사용자한테 보이는 명령어///////////////////
//alert('ㅎㅇ');
var message;
//message = prompt('메시지 입력시 body 다 날라감 취소 누르셈');
if (message != undefined){
    document.body.innerText = message;
}




///////////////////콘솔창///////////////////
console.log('hello')



///////////////////변수///////////////////
var a;      //선언만
a = 10;     //값 입력

var a=10;   //한번에
//자료형 : number
var a=10, b=3.14, c=1/3; //한번에 여러개
//console.log(typeof(a), typeof(b),typeof(c));
//console.log(parseInt(b));                       //int형으로
//console.log(parseFloat(a));                     //float형으로

//자료형 : string
var a='a', b='ab', c=a+b;
//console.log(typeof(a), typeof(b),typeof(c));
var a = '문자열 안에서 \'를 사용할 수 있다.';
var b = '문자열 안에서 \"를 사용할 수 있다.';
var c = '문자열 안에서 \n을 사용할 수 있다.';
var d = '문자열 안에서 \\를 사용할 수 있다.';

//자료형 : boolean
var t = true, f=false;
//console.log(typeof(t), typeof(f))

//자료형 : null / undefined
var n = null, u=undefined;
//console.log(typeof(n))
//console.log(typeof(u))

//자료형 : object
var obj = {name:'name', age:1000}
console.log(typeof(obj))



///////////////////배열///////////////////
var arr = [1,2,3,4,5]
arr.pop();           //오른쪽에서 빼서 리턴
arr.shift();         //왼쪽에서 빼서 리턴
arr.push(5)          //오른쪽에 추가
arr.unshift(1);      //왼쪽에 추가



///////////////////함수///////////////////
function 함수(인자1, 인자2){
    return 결과값;
}


























