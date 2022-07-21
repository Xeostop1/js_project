//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals:
....
1+2 =${1+2}`);//줄바꿈 중간에 기호를 넣어도 쓸수 있음

console.log('ellie\'s \n\tbook');

//2. Numeric operators
console.log(1+1); //더하기
console.log(1-1); //빼기
console.log(1/1); //나누기
console.log(1*1); //곱하기
console.log(5%2); //나머지
console.log(2**3); //2의 3승 

//3. Increment and decrement operators
let counter =2;
const preIncrement=++counter;//프리 인크리먼트 
//카운터에 1을 +1 더해서 카운터의 값을 할당한다 
console.log(`preIncrement: ${preIncrement}, counter${counter}`);

const postIncrement=counter++;
//포스트인크리먼트는  변수의 값을(여기서는 카운터) 포스트 인크리먼트에 할당한
//다음에 그뒤에 카운터의 값을 증가시키는 것  
console.log(`preIncrement: ${postIncrement}, counter${counter}`);

const preDecrement=--counter;
console.log(`preIncrement: ${preDecrement}, counter${counter}`);
const postDecrement=counter--;
console.log(`preIncrement: ${postDecrement}, counter${counter}`);

//4. Assignment operators
let x=3;
let y=6;
x+=y;//x=x+y 반복되는 x를 생략한 식 반복되는 x 생략가능 
x-=y;//x=x-y
x*=y;//x=x*y
x/=y;//x=x/y

//5.Comparison operators
console.log(10<6); //작거나 
console.log(10<=6);// 작거나 같거나
console.log(10>6); //크거나 
console.log(10>=6);


//6. Logical operators || 0r, && and, ! not 
const value1=false;
const value2=4<2; 

//or ||연산자는 or가 나타나면 더이상 작동하지 X
// 그래서 가벼운것을 앞에 무거운 함수는 뒤쪽에 배치  
console.log(`or: ${value1 || value2 || check()}`);

//&& and 
//그래서 가벼운것을 앞에 무거운 함수는 뒤쪽에 배치  
//null을 체크할 때도 많이 사용 
console.log(`or: ${value1 && value2 && check()}`);


function check(){
    for(let i=0; i<10; i++){
    console.log('😨');
    }
return true;
}

//! not 연산자
console.log(!value1);


//7. Equality
const stringFive ='5';
const numverFive=5;

console.log('Equality ==와 ===의 차이');

//==을 쓰면 타입을 변경해서 검사함 숫자5, 문자5나 검사해보니 똑같다
console.log(stringFive==numverFive);
console.log(stringFive!=numverFive);//똑같지 않다


//=== 타입을 신경써서 타입이 다르면 다르다고 인식   
//strict equality 스트릭 이퀄리티을 사용하여 검사하는 것을 추천 
console.log(stringFive===numverFive);
console.log(stringFive!==numverFive);


//object equality by reference
console.log('-------------- ');
//엘리1, 엘리2의 값은 같지만 오브젝트로 묶여 있기때문에 
//컴퓨터에서는 서로 다르게 할당되어 있음 

const ellie1={name: 'ellie'}
const ellie2={name: 'ellie'}
const ellie3=ellie1;
console.log(ellie1==ellie2);
console.log(ellie1===ellie2);
console.log(ellie1===ellie3);

//cquality--puzzler
console.log('-------------- ');
console.log(0==false);
console.log(0===false);
console.log(''==false);
console.log(''===false);// 블리언 타입이 아니라서 
console.log(null==undefined);
console.log(null===undefined);

//8. Conditional operators: if
//if, else if, else
console.log('-------------- ');
const name ='coder';
if(name==='ellie')
{console.log('Welcome, Ellie!');
} else if(name=== 'coder'){
    console.log('You are amazing coder');
    }
else{console.log('unkwnon');
}

//9.Ternart operator:? 터널리 오퍼레이트
//물음표를 붙이면 엘리가 트루이면 ? 왼쪽의 실행 아니면 다음것을 실행해
//너무 많이 붙이면 가독성이 떨어짐, 많이 사용하고 싶다면 스위치 문을 사용
//간단한 문장에만 사용할 수 있도록 
console.log('-------------- ');
console.log(name=== 'ellie'? 'yes':'no');

//10. Switch statement
console.log('-------------- ');

const browser='ID';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chome':
    case 'Firefox':
            console.log('love you');
        break;
    
        // case 'Firefox':
    //     console.log('love you');
    //     break; 같은 실행문이 반복되기 때문에 이렇게 쓰지말고
    default:
        console.log('same all!');
        break;
//else if를 반복한다면 차라리 스위치 사용이 더 좋음
}

//10. Loops While 와일 반복문
console.log('-------------- ');

let i=3;
while(i>0){
    console.log(`while:${i}`);
    i--;
   }// 무한대로 계속 도는것!
//블럭이 먼저라면 와일을 사용

 //11. Do while 반복문
console.log('-------------- ');

 do{
     console.log(`do while:${i}`);
     i--;
      } while (i>0);
      //do를 먼저 실행한다음에 조건이 맞는지 검사함 
      //조건문이 먼저라면 do를 사용

//11. for 조건문
//시작문, 컨디션, 스텝문 
//(for i=3 시작문(1번만 쓰임) 
// i>0는 계속되는 컨디션(안쪽에 써있는 문구 검사)
// 안쪽이 다 실행되면 i-- 을 감소시켜서  실행 2,3번만 계속 쓰임)


console.log('-------------- ');
for(let i=3; i>0; i--){
    console.log(`for: ${i}`);  
}

for(let i=3; i>0; i=i -2){
    console.log(`inline variable for: ${i}`);
    }
//의 경우 블럭안에 let 지역변수를 선언하여 사용하기도 함

//for문 안에 for문을 작성함
for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        console.log(`i:${i}`);
    }
}

// 0~10까지 짝수만 불러옴
for(let i =0;   i < 11; i++){
    if(i%2 !==0){
        console.log(`q1.${i}`);
    }
}
console.log('-------------- ');
//0~10까지 나오게 하지만 8에서 멈추기 
for(let i =0;   i < 11; i++){
    if(i>8)
    {break;}
    console.log(`q1.${i}`);}