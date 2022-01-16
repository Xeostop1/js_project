//function은 프로그램을 구성하는 기본적인 빌딩 블럭
//여러번 재사용 가능
//한가지의 일과 값을 계산하기 위해 쓰임
//function 사용법
//function name(param1, param2){body~return;
// 펑션의 이름을 지정 (파라미터 나열) {바디 함수의 기본적 조직을 작성한 다음 리턴}
//1개의 함수는 ===1개의 일만 하도록 만들어야함
// 함수의 이름은 커맨드, 동사형태로 지정 doSomething (변수의 이름은 명사로 지정함)
//이름을 동사형태로 지정하지 못한다면 분명 여러가지를 실행하고 있을것 2가지 이상이라면
//나누어서 함수를 만드는 방법을 생각하자
//js에서 function은 object이다 변수, 리턴, 파라미터도 가능함

function printHello(){
    console.log('Hello');
    }
    printHello();

    console.log('───────────────────');

    function log(message){
    console.log(message);   
}
    log('Jscript@');
    log(1234);//js는 타입이 중요하지 않아서 숫자를 그냥 문자로 출력해줌 
    //그러나 깐깐한 언어의 경우 위와 같이 쓰면 백퍼 오류임! 
    
    // 2. Parameters
    function changeName(obj){
        obj.name='coder';
    }
    const ellie={name: 'ellie'};
    changeName(ellie);
    console.log(ellie,'💜');

    //3. Default parameters(added in es6에 추가됨)
    //2개의 메세지와 프롬의 파라미터를 받아옴
    //메세지는 출력이 있지만, 프롬은 정의 되지않아서 언디파인으로 출력됨
    //from을 입력받지 않았을떄를 설정하고 싶으면 펑션
    //에서 프롬파라미터를 적을떄 =unknown하고 설정해주면 됌
    function showMessage(message, from='unknown'){
        console.log(`${message} by ${from}`);
    }
    showMessage('Hi!');
    

    //4.Rest parameters (added in es6에 추가됨)
    //...는 배열형태로 전달됨
    function printAll(...args){
        for(let i=0; i<args.length; i++){
            console.log(args[i]);
        }//배열의 1방법
        
        console.log('───────────────────');
    
    for (const arg of args){
        console.log(arg);
    }   //배열의 2 방법 
    }
    printAll('dream', 'coding', 'ellie')
    //프린트 올 함수에 3개의 인자를 전달함  

    // 5. Local scope
    console.log('───────────────────');
    let globalMessage='global';
    //위의 globalMessage의 경우 전역변수라서 펑션이 아닌곳에도 계속 쓰임
    function printMessage(){
        let message='Hello';
        console.log(message);
        console.log(globalMessage);
        }
        // function안에 있는 let 지역변수 {}안에서만 사용가능함
            printMessage();


//6. Return a value
//함수에서 정의된것을 계산한 후 리턴할 수 있음
console.log('───────────────────');
 
function sum(a,b){
    return a+b;}
const result =sum(1,2);
console.log(`sum:${sum(1,2)}`);

//7. Early return, early exit
function upgradeUser(user){
    if(user.point>10){ 
    }
}//의 경우 컴퓨터가 쓸데 없이 10까지 계속 돌려보고 있기 때문에

function upgradeUser(user){
    if(user.point<=10){ 
    return;//함수를 빠르게 리턴으로 종료하고
    }
}// 이후 조건에 맞는 함수들을 실행하는게 빠르다 

//1. Function expression 
console.log('───────────────────');


const print=function(){//펑션에 ()이름이 없는걸 anonymous function이라고 함(어노니먼스)
    //헷갈리면 function print(이름역할) () 이렇게도 작성 가능 >named function
    console.log('print');
};
print();
const printAgain=print;
printAgain();
const sumAagin=sum;
console.log(sumAagin(1,3));

//2.Callback function 
console.log('───────────────────');


function randomQuiz(answer, printYes, printNo){
    //프린트yes, 프린트no는 2개의 콜백함수
    if(answer ==='love you'){
        printYes();
    }
    else{
        printNo();
    }
}
//yes의 function의 경우 위에서 배운 언어넘언스(익명이라는 뜻) 함스 
const printYes=function(){
    console.log('yes!');
    };

//no의 경우 name function 인데 디버깅을 할때 함수이름이 나오게 하기 위해서
    const printNo=function print(){
  console.log('no!');
    };
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


//3. Arrow functuin 
// const simplePrint=function(){
//     console.log('simplePrint!');
//     };

    const simplePrint= () => console.log('simplePrint!');
    const add= (a,b)=> a+b; 
const simpleMultiply=(a,b)=>{
    return a*b;
}

//IIFE:Immeduately invoked Function Expression
(function hello(){
    console.log('IIFE');
})();//함수에 괄호를 걸어주고 제일 나중에 ()실행 함수표시를 걸면 바로 출력!

//function calculate(command,a,b)
//command: add, substract, divide, multiply, remainder