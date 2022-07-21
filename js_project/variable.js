'use strict';

console.log('Hello World!');

//2. Vaiable 
//변수: 변경될 수 있는 값 let라는 키워드를 이용
//let(es6에서 추가됨)
{
let name='ellie';
console.log(name);
name='hello';
console.log(name);
//console.log(globalName);
}
console.log(name);
//console.log(globalName);

//var hoisting 
//어디에 선언했던 상관 없이 제일 위의 선언을 끌어올림 호이스팅 끌어올려주다
{age=4;
var age;}
//var는 {}를 무시함 
//console.log(age);
//최신기술은 호환성을 꼭 생각해야함 let

//3. Contants : 한번 할당하면 절대 값이 변경되지 않는 값(컨스던스 끊임없는 정수, 항수라는 뜻)
//보안상의 이유 
//수정이나 보안에 실수를 줄일수 있음
//let , const 두개의 변수가 있음

//4. variable types
// primitive 타입(프리미티브 타입)
//더이상 나누어질 수 없는 1가지의 아이템: number, string, boolean, null, undefiedn, symbol
// object 타입: 싱글아이템을 여러개 묶어서 한단위로 관리해주는 것
//function :데이터 타입중 하나 > 변수에 할당 가능, 함수의 인자 전달가능, 함수에서 리턴타입으로도 사용가능
//js는 숫자는 number만 있음 그래서 굳이 number를 선언하지 않아도 됌 
const count = 17;
const size =17.1;
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

//string
const char ='c';
const brendan ='brendan';
const greeting ='hello'+ brendan;
console.log(`value: ${greeting}, type: ${tyopof greeting}`);

//null 명확하게 0상태를 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined(언디파인) 선언은 되었지만 값이 지정되어있지 않은것!
let x;
console.log(`value: ${x}, type: ${tyopof x}`);

//symbol 맵이나 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 코드에서 우선순위를 주고 싶을 때 정말로 고유한 식별자가 필요할때 쓰임

const symbol1= symbol('id');
const symbol2= symbol('id');
console.log(`symbol1===symbol2`);
//심볼의 경우 스트링 타입으로 변환해서 출력해줘야함! 

//5.dynamic typing 다이나믹 타입 언어
//빠르게 프로토 타입으로 가능! 변수와 타입을 알아보자

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
 









