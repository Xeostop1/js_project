'use strict';
//class 한데 묶어 놓는 컨테이너
//속성, 행동(메소트)
//class는 조금더 연관있는 데이터를 묶어놓은 필드와 메소드로 만들어졌음
//그러나 행동(메소드)는 없고 필드 값만 있는경우도 있음 =>데이타클래스

//class는 붕어빵을 만드는 틀같은것 (청사진,템플릿)
//그래서 자체에 데이터가 들어있지 않고 틀만 정의해 놓음
//1번만 선언하고 그뒤로 값이 들어와서 만들어 진것이 object
//붕어빵틀에 팥이랑, 슈크림, 피자붕어빵이 만들어 지듯이 

//class is added in es6
//완벽하게 추가 된게 아니고 프로토 타입에 기반하여 그위에 간편하게 쓸수 있도록 추가된것 

//1. class 
class Person{
    constructor(name, age){
        this.name=name;//전달받은 name,age를 constructor에 전달해 주는역할
        this.age=age;
    }
speak(){
console.log(`${this.name}: hello!`);
}}

const ellie =new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2.Getter and setters (번역안하고 게터와 세터라고 한데)
console.log('───────────────────');

class User{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
get age(){
return this._age;}

//세터와 게터를 쓰게되면서 age를 받아오게 되는데 세터의 경우 계속 순환참조가
//가 되어버리면서 오류발생! 그래서 this.조금 다른 age를 쓰게도ㅔㅁ
set age(value){
    this._age= value<0 ? 0: value; 
}

}

//아래의 함수의 경우 성=스티브, 이름=잡스, 나이=-1 인 상태
//이러면 성립이 되지 않기때문에 이런걸 미연에 방지하기 위해 게터와 세터를 사용
const user1=new User('steve','Job',-1);
console.log(user1.age);



//3.Fields(public, private)
//완전 최신 추가판 
console.log('───────────────────');

class Experiment{
    publicField=2;//그냥 정의하면 외부에서 접근 가능
    #privateField=0;//#으로 정의하면 클래스내부에서만 이용사용, 외부에서는 리딩라이딩 모두 안됌
}
const experiment= new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Stasic properties and methods
class Article{
    static publisher='Dream Coding';
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
               
    }
}

const article1=new Article(1);
const article2=new Article(2);
console.log(Article.publisher);
Article.printPublisher();


//5.Inheritance
console.log('───────────────────');

class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);;
            }
    getArea(){
        return this.width *this.height;
    }
}



//extends 라는 클래스를 이용하여 연장함 계속적으로 사용가능하게 해줌 
//삼각형의 경우 0.5를 곱해야 하는데 오버라이딩해서 함수를 고쳐서 사용
class Rectangle extends Shape{}
class Triangle extends Shape{
draw(){
    super.draw();
    console.log('🔺');
    }
getArea(){
    return (this.width * this.height) / 2;
}

toString(){
return `Triangle: Color: ${this.color}`;
}}
 


const rectangle=new Rectangle(20,20,'bule');
rectangle.draw();
console.log(rectangle.getArea() );

const triangle=new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea() );

//6. Class checking: instanceof 
//왼쪽의 오브젝트가 오른쪽의(왼쪽의 의해서 만들어진것) 클래스인지 확인 
//T/F를 리턴함 
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);




