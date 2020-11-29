var arr = [1,2,3,4,5];

arr.pop();          //오른쪽에서 빼서 리턴
arr.shift();        //왼쪽에서 빼서 리턴
console.log(arr);

arr.push(5)          //오른쪽에 추가
arr.unshift(1);      //왼쪽에 추가
console.log(arr);

console.log(arr.reverse());
console.log(arr.reverse().sort());

var arr2 = [6,7,8,9,10];
console.log(arr.concat(arr2));

console.log(arr.indexOf(3));
console.log(arr.lastIndexOf(3));

var str = '1,2,3,4,5';
console.log(str.split(','));