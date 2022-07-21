'use strict';
//javaScript is synchronous.(자바스트립트는 동기적)
//하나하나씩 동기적으로 호스팅됨
//hoisting: var, functuin의 선언들이 제일 위로 올라감 
console.log('1');
// setTimeout(function()
// {console.log('2');
// },1000);

setTimeout(()=>
{console.log('2');
},1000);

//셋타임아웃 지정한 시간이 지나면 전달한 콜백함수를 호출
//전달함수를 나중에 불러주는것! 
//나중에 전달해서 불러줘 콜백 비동기
console.log('3');


//동기적 콜백이랑, 비동기적 콜백 있음!  
function printImmdiatyly(print){
    print();
}
printImmdiatyly(()=>console.log('hello');
)

//비동기적 콜백