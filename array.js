'use strict';

//배열
//1. Array
//오브젝트는 토끼와 당근 : 각각의 특징을 가지고 있음  
//토끼는 행동(메소드), 명사등을 가지고 있고
//당근은 명사(특징)만 가지고 있음  
//오브젝트는: 특징으로 묶어놓은것 토끼: 뛴다. 먹는다, 동물, 포유류 
//이런 토끼는 한 울타리에 넣는게 어레이  
//어레이는 순서가 있는 □□□□□□ 이런식의 자료구조 그리고 
//각 칸마다 인덱스가(번호) 있음 0~부터 시작!!     


//1 Declaration(배열선언)
const arr1=new Array();
const arr2=[1,2];
//index을 기준으로 저장이 되기 때문에 어떻게 데이터를 삽입 제거하는지 아는지가 중요

//2.Index position
const fruits =['🍿','🥨'];
console.log(fruits);
console.log(fruits,length);
console.log(fruits['0']);
console.log(fruits['1']);
console.log(fruits['3']); 
console.log(fruits[fruits.length-1]); 
//마지막 배열 찾는법  0부터 시작하기 때문에 총 길에서-1 하면 마지막 key를 찾아올 수 있음  


// 3.Looping over an array
// print all fruits
console.log('───────────────────');
console.clear();

for(let i=0; i< fruits.length; i++)
{console.log(fruits[i]);
}

 //for of 
 //순차적으로 할당하면서 실행  
 for(let fruit of fruits){
     console.log(fruits);
 }

 //forEach
 //콜백함수를 받아옴 
console.log('───────────────────');

 fruits.forEach((fruit)=>
 console.log(fruit));// he가 2번출력된 이유는 프룻츠의 데이터가 2개라서
 console.log('───────────────────');


 //4. Addtion 빼기,복사 add to the end 
 //아이템을 배열 끝쪽에 위치 :push
fruits.push('🌮','🍘'); 
console.log(fruits  );




 //배열 끝에서 부터 아이템 삭제 :pop
 fruits.pop(); 
 //fruits.pop(); 하면 한개더 뺄수 있음 
 console.log(fruits);

 //add to the front :unshift
 console.log('───────────────────');


 fruits.unshift('🍛','🍣')
 console.log(fruits);

 //remove to the front 
 fruits.shift();
// fruits.shift();
 console.log(fruits);
 
//shitft, unshift는 정말 느림! 팝과 푸쉬보다
//end부터는 빈공간에 자료를 넣고 지웠다가 하면 되는데(그전 데이터에 영향 X)
//앞쪽에서 빼고 추가하는건
//모든 자료를 밀고 당기고 해야 되기 때문에 매우 느림 (그래서 이름이 쉬프트임 이동 옮기다!)

fruits.push('🍜','🌭','🍰')
console.log(fruits);

console.log('───────────────────');
fruits.splice(1, 1);
//지우고자 하는 갯수를 안써주면 지정숫자 뒤로는 모조리 지움 꼭 지울 숫자 지정 
console.log(fruits);
fruits.splice(1, 1, '🥗','🥪');
console.log(fruits);


// 2가지의 배열을 묶어서 만들수 있음
const fruits2=['🍱','🥡'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//5.검사, 검색 인덱스를 검사하는것  
//indexOf

console.clear();


console.log(fruits);
console.log('───────────────────');
console.log(fruits.indexOf('🥗'));
console.log(fruits.indexOf('🍜'));
console.log(fruits.indexOf('🍠'));
//includes
console.log('───────────────────');
console.log(fruits.includes('🍜'));
console.log(fruits.includes('🍠'));
//인덱스오브 검사에서 결과가 없으면 -1이 출력 

//lastIndexof
console.clear();
console.log(fruits);
console.log('───────────────────');

fruits.push('🥗');
console.log(fruits);
console.log(fruits.indexOf('🥗')); 
//샐러드가 2개의 경우 인덱스오브는 앞에 있는 인덱스 번호를 호출함 
console.log(fruits.lastIndexOf('🥗')); 
//last인덱스오브는 맨 뒤에 있는 인덱스 번호를 호출함 







  
 

 
 

 
 

