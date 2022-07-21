//1.  objects
// 오브젝트는 키와 벨류의 집합체
// objects{key:value};

//1. Literals and properies
const obj1={};
//{}을 이용해서 만드는 걸 object literal 오브젝트 리터널

const obj2= new Object();
// 오브젝트 뒤에 new 키워드를 이용하여 만드는 것을 object constructor (오브젝트 컨스트럭터)
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie ={name: 'ellie', age:4}
//이 오브젝트는 네임의 엘리라는 값, 에이지라는 키에 4라는 값을 2개 가진 오브젝트
//js에서는 class가 없어도 {}을 이용하여 바로  오브젝트를 생성가능
print(ellie);

ellie.hasJob=true;//이건 나중에 추가해준것 
//그러나 유지보수가 힘듬 갑자기 추가된 항목이라서 찾거나 수정할때 버그를 일으킬수 있음

//그리고 삭제도 가능함
delete ellie.hasJob;
 

//2.Computed properties 계산된 프로포틱스 
//프로포틱은 꼭 스트링타입으로 지정 
console.log('───────────────────');


//이렇게 다양한데 언제쓸수 있는것인가?
//000.000의 경우 코딩작성시 그 키에 대한 값을 받아오고 싶을때 
console.log(ellie.name);
//코딩할때는 .이 맞음!

console.log(ellie['name']);//오브젝트안에 있는 스트링 형태의 값에 접근이 가능
//정확하게 어떤 키가 필요한지 모르고 런타임에서 결정될때
//실시간으로 출력값을 받고 싶을때에는 이걸 사용가능함 

ellie['hasJob']=true;
console.log(ellie.hasJob);

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie, 'name');
//꼭 스트링 타입으로 써줘야함!!     

// 3.Property value shorthand
console.log('───────────────────');

const person1={name: 'bob', age:2};
const person2={name: 'steve', age:3};
const person3={name: 'dave', age:4};
const person4=new Person('elile', 30);

console.log(person4);;

// 4. constructor Function
function Person(name, age){
    this.name=name;
    this.age=age;
}


// 5. in operator: property existence check (key in obj)
//  오브젝트안에 키를 확인할수 있는 것
console.log('───────────────────');
console.log('name' in ellie); 
console.log('age' in ellie); 
console.log('random' in ellie); 
console.log(ellie.random); 


//6. for in VS for of
console.clear();

// for in 모든 키를 받아올 수 있다 
for(key in ellie){
     console.log(key);
      }
      console.log('───────────────────');


//for(valiue of iterable)  
//오브젝트를 쓰는것이 아니라 배열과 같은 배열리스트를 사용 
const arry=[1,2,4,5]
// for(let i=0; i<arry.length;i++ i++;){
//     console.log('ooo');}
//위의 긴 수식을 대체     

for(value of arry){
    console.log(value);
    // value of arry을 써줌으로써 모든 배열을 보여줌 위와 같은 식 
}

//7. cloning
console.log('───────────────────');
const user={name: 'ellie', age:'20'};
const user2 =user;
user2.name='coder';
//.을 통해서 변경된거래 이해는 안되지만 ㅠㅠ
console.log(user);

//옛날방식 old way
const user3={};
for(key in user){
    user3[key]= user[key];
}
console.clear(); // 콘솔값 지움
console.log(user3);

// const user4={};
// Object.assign(user4, user);
//오브젝트에 있는 어싸인을 사용하는것 위의 수식을 대체 
//모든 오브젝트가 Object에 상속된데? 왜?
//console.log(user4); 

const user4= Object.assign({} , user);//배열전달도 가능
console.log(user4); 

//다른 케이스
const fruit1={color:'red'};
const fruit2={color:'blue', size: 'big'};
const mixed=Object.assign({},fruit1,fruit2);

//1,2공동 프로퍼티는 컬러, 두개를 섞은게 믹스
console.log(mixed.color);
console.log(mixed.size);
//뒤에 나오는 프로포티일 수록 앞에 동일한 프로포티가 있다면 덮어씌워짐 
