'use strict';


//1. object to json(오브젝트를 제이슨으로 변환)
//stringfy(obj)
let json=JSON.stringify(true);
console.log(json);

//overroding 
//parse stringify
//함수의 이름은 동일하지만 어떤(몇개의) 파라미터를 전달하냐 따라서 각각 다른 호출방식
//parse 콜백함수인데 결과값을 변화한다 
//결과값을 받아서 스트링으로 변환함
//콜백함수를 전달하면 통제하면서 스트링으로 변환 가능함 


json=JSON.stringify(['apple', 'banana'])
console.log(json);
//출력물이 배열처럼 보이게 ""로 표시됨 

const rabbit={
name: 'tori',
color: 'white',
size:null,
birthDate:new Date(),
jump:()=>{
    console.log(`${name} can jump!`);
    },
};

json=JSON.stringify(rabbit);
console.log(json);

console.log('───────────────────');

json=JSON.stringify(rabbit,["name"]);
console.log(json,);

console.log('───────────────────');

json=JSON.stringify(rabbit, (key, value)=>{
    console.log(`key:${key},value: ${value}`);
    return key=== 'name'? 'ellie':value;
}
);
console.log(json);
//,을 넣게 되면 리플레이서 라고 배열형식으로 전달
//함수는 제외하고 출력함 

//2. josn to object 
console.clear;
json=JSON.stringify(rabbit);
const obj=JSON.parse(json);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); 오류남




