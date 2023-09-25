/* function hiname(n?:string):string{
    if(typeof n === 'string'){
        return `안녕하세요 ${n}`
    }else{
        return `이름이 없습니다.`
    }
}

console.log(hiname('홍길동')); */
/* function count(n:string | number):number{
    const a = String(n).length
    return a
}

console.log("🚀 ~ file: index.ts:17 ~ count(a):", count(15616))
 */
/* function married(n: number, b: boolean, s: string): string {
    let house: number;
    let charming: number;
    if (b) {
        house = 500;
    } else {
        house = 0;
    }
    if (s === "상") {
        charming = 100;
    } else {
        charming = 0;
    }

    const total: number = n + house + charming;

    if (total >= 600) {
        return "결혼가능";
    } else {
        return null;
    }
}

console.log("🚀 ~ file: index.ts:43 ~ married(700, false, '중'):", married(100, false, '상')) */
/* function isMarriagePossible(age: number, hasHouse: boolean, socialStatus: string): string | void {
    const houseValue = hasHouse ? 500 : 0;
    const charmingValue = socialStatus === "상" ? 100 : 0;

    const totalValue = age + houseValue + charmingValue;

    return totalValue >= 600 ? "결혼가능" : '';
}

console.log(isMarriagePossible(30, true, "하")); // 출력: null
console.log(isMarriagePossible(25, true, "상")); // 출력: "결혼가능" */
/*
function 내함수(x :number | string){
    if(typeof x === 'string') return x + 1  //에러남
 }

 console.log("🚀 ~ file: index.ts:62 ~  내함수('아'):",  내함수('아'))
 */
/*
function 변환(a: (number | string)[]): number[] {
    let b:number[] = []
    a.map((item, idx) => {
        b[idx] = Number(item);
    });
    return b;
}

console.log("🚀 ~ file: index.ts:73 ~ 변환(['1', 2, '3']):", 변환(['1', 2, '3'])) */
/* function 과목(a: { subject: string | string[] }) {
    if (typeof a.subject === "string") {
        const n = Object.keys(a.subject).length;
        return a.subject
    } else if (typeof a.subject === "object") {
        const n = Object.keys(a.subject).length;
        return a.subject[n-1]
    }
}
*/
/* type Person = {
    name: string;
    age: number;
};

let teacher: Person = { name: "john", age: 20 };

type Girlfriend = {
    readonly name: string;
};

const 여친: Girlfriend = {
    name: "엠버",
};

여친.name = "우라"; */
/* type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let position: NewType = {
    x: 10,
    y: 20,
};
 */
/* type PositionX = { x: number };
type PositionY = { x: number };

type NewType = PositionX & PositionY;

type Abc = {
    color?: string;
    size: number;
    readonly position: number[];
};

type Bcd = {
    name: string;
    phone: number;
    email: string;
    ch: boolean
};

const qwe: Bcd = { name: "kim", phone: 123, email: "abc@naver.com", ch:true };
 */
/* let 이름: "kim";
let 접니다: "대머리" | "솔로";
접니다 = "대머리";

function name1(params: "hello"): 1 | 0 {
    return;
}

function gbb(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
    return ["가위"];
}

var 자료 = {
    name: "kim",
} as const4;

function 내함수(a: 'kim'){

}

내함수(자료.name) */
/*
type 함수타입 = (a: string) => number;

const 함수: 함수타입 = function (a) {
    return 10;
};

let 회원정보: Member = {
    name: "kim",
};

type Member = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
  }

function 함수1(a) {
    a();
}

function 함수2() {}

함수1(함수2); */
/* type CutZero = (a: string) => string;
type RemoveDash = (a: string) => number;

let cutZero: CutZero = (s) => {
    const str = s.substr(0, 1);
    if (str === "0") {
        return s.replace("0", "");
    } else {
        return s;
    }
};
let removeDash: RemoveDash = (str) => {
    return Number(str.replace(/-/g, ""));
};

type MadeF = (a: string, b: CutZero, c: RemoveDash) => number;

const 만들함수: MadeF = (a, b, c) => {
    let first = b(a);
    let second = c(first);
    return second;
};

console.log(
    "🚀 ~ file: index.ts:207 ~ 만들함수('010-1111-2222', cutZero, removeDash):",
    만들함수("010-1111-2222", cutZero, removeDash)
);
 */
/* let 제목 = document.querySelector('#title')

if(제목?.innerHTML != undefined){
    제목.innerHTML = '반가워요'
} */
/* let 이미지 = document.querySelector("#image");

if(이미지 instanceof HTMLImageElement){
    이미지.src = 'test1.jpg'
} */
/* if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.om";
} */
/* let 링크들 = document.querySelectorAll(".naver");
console.log("🚀 ~ file: index.ts:230 ~ 링크들:", 링크들);

링크들.forEach((item) => {
    if (item instanceof HTMLAnchorElement) {
        item.href = 'https://kakao.com'
    }
});
 */
/* class Person {
    name: string;
    constructor(a: string) {
        this.name = a;
    }
    함수(a: string) {
        console.log("안녕" + a);
    }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("lim");

class Car {
    model: string;
    price: number;
    constructor(a: string, b: number) {
        this.model = a;
        this.price = b;
    }
    tax(): number {
        return this.price / 10;
    }
}

let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300 */
/* class Word {
    num: number[] = [];
    str: string[] = [];
    constructor(...a: (string | number)[]) {
        a.forEach((item) => {
            if (typeof item == "number") {
                let num = this.num.push(item);
                return num
            } else if (typeof item == "string") {
                let str = this.str.push(item);
                return str
            }
        });
    }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
 */
/* interface Square {
    color: string;
    width: number;
}
let 네모: Square = { color: "red", width: 100 };

interface Stu {
    name: string;
}
interface Stu {
    score: number;
}
interface Tea extends Stu{
    age: number;
}

let 선생:Cat={name: '123', age: 20}

type Animal = {name: string}
type Cat = {age: number} & Animal */
/* interface Pro {
    brand: string;
    serialNumber: number;
    model: string[];
}

let 상품: Pro = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};

let 장바구니:Cart[] = [
    { product : '청소기', price : 7000, card : false },
    { product : '청소기', price : 7000, card : false },
];

interface Card{
    card: boolean
}

interface Cart extends Card {
    product: string;
    price: number;
}

interface Calculation{
    plus:(a:number, b:number)=>number,
    minus:(a:number, b:number)=>number,
}

let 오브젝트 :Calculation = {
    plus(a,b){
      return a + b
    },
    minus(a,b){
      return a - b
    }
  }  */
/* function 함수(...a: number[]) {
    console.log("🚀 ~ file: index.ts:351 ~ a:", a);
}

함수(1, 5, 8, 6, 4, 7, 8);


let arr = [1,2,3,4];

let [변수1, 변수2] = ['안녕', 100]
console.log(변수1) */
/* let 오브젝트:Obj = { student: true, age: 20 };

interface Obj{
    student: boolean,
    age: number
}



function 함수({student, age}:{
    student: boolean,
    age: number
}):void {
    console.log(student, age);
}

함수({ student: true, age: 20 });
 */
/* function max(...a: number[]) {
    let max;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
            max = a[i];
        }
    }
    return max;
}

console.log("🚀 ~ file: index.ts:392 ~ max(6, 3, 7, 2);:", max(6, 3, 7, 2)) */
/* function 함수({user, comment, admin}:{
    user: string,
    comment: number[],
    admin: boolean
}):void{
    console.log(user, comment, admin)
}

함수( { user : 'kim', comment : [3,5,4], admin : false } ) */
/* type Data = (string|number|boolean)[]

function 함수1([a, b, c]:Data):void{
    console.log(a,b,c)
}

함수1([40, 'wine', false]) */
/* function 함수(a: string | undefined){
    if( a && typeof a === 'string'){

    }else{

    }
} */
/* type Fish = {swim:string}
type Bird = {fly:string}


function 함수(animal: Fish | Bird){
    if( 'swim' in animal ){
        console.log("🚀 ~ file: index.ts:428 ~  animal.swim:",  animal.swim)
    }
} */
// 오브젝트 instanceof 부모class
/*
let 날짜 = new Date();
if (날짜 instanceof Date){
    
} */
/* type Car = {
    wheel: '4개',
    color: string
}

type Bike = {
    wheel: '4개',
    color: string
}

function 함수(x:Car | Bike){
if(x.wheel === '4개'){
    console.log('x는 car타입이에여')
}
}

함수({wheel: '4개', color: 'black'}) */
/* function 함수(parameter: string) {
    if(typeof parameter == 'string'){
        console.log(parameter)
    } else{
        console.log(parameter)
    }
}
 */
/* class User {
    name: string;
    private familyName: string = "kim";
    constructor(a: string) {
        this.name = this.familyName + a;
    }
    이름변경함수() {
        this.familyName = "park";
    }
}

let 유저1 = new User("민수");
유저1.이름변경함수();
console.log("🚀 ~ file: index.ts:472 ~ 유저1:", 유저1);

class Person{
    constructor(public name: string){
        
    }
}

let 자식 = new Person('kim')
console.log("🚀 ~ file: index.ts:485 ~ 자식:", 자식) */
/* class User {
   static x = 10;
    y = 20;
}

let 자식 = new User();

console.log(자식.y) */
/* class User {
    static skill = "js";
    intro = User.skill + "전문가입니다.";
}

let 철수1 = new User();
console.log("🚀 ~ file: index.ts:502 ~ 철수:", 철수1.intro)

User.skill = 'ts'

let 철수2 = new User();
console.log("🚀 ~ file: index.ts:502 ~ 철수:", 철수2.intro)

let 철수3 = new User();
console.log("🚀 ~ file: index.ts:502 ~ 철수:", 철수3.intro) */
/* class User {
    // class 안에서만 수정 가능
    private static x = 10;
    // 자식도 수정 가능
    public static y = 20;
    // private과 다르게 extends 가능
    protected z = 30;
} */
/* class User {
    private static x: number = 10;
    public static y: number = 20;
    addOne(a: number) {
        User.x = User.x + a;
    }
    printX() {
        console.log(
            "🚀 ~ file: index.ts:529 ~ User ~ printX ~ User.x:",
            User.x
        );
    }
}

let one = new User();

one.addOne(3); //이렇게 하면 x가 3 더해져야함
one.addOne(4); //이렇게 하면 x가 4 더해져야함
one.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함 */
/* class Square {
    a: number;
    b: number;
    c: string;

    constructor(a: number, b: number, c: string) {
        // const div = document.createElement("div");
        // div.style.width = "300px";
        // div.style.height = "300px";
        // div.style.backgroundColor = "blue";
        // document.body.appendChild(div);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    draw() {
        const rw: number = Math.random() * 270;
        const rh: number = Math.random() * 270;
        const div1 = document.querySelector(".div");
        div1.style.position = 'relative';
        const hello = document.createElement("div");
        hello.style.position = `absolute`;
        hello.style.width = `${this.a}px`;
        hello.style.height = `${this.b}px`;
        hello.style.backgroundColor = this.c;
        hello.style.top = `${rw}px`;
        hello.style.left = `${rh}px`;
        div1.appendChild(hello);
    }
}

let 네모 = new Square(30, 30, "red");
네모.draw();
네모.draw();
네모.draw();
네모.draw(); */
/* ///<reference path="./a.ts"/>

import {Name}  from './a'

let 변수: Name = 'park' */
/* function 함수<MYType>(x: MYType[]):MYType{
    return x[0]
}

let a = 함수<number>([4,2])
let a1 = 함수<string>(['4','2']) */
/* interface LengthCheck{
    length: number
}

function fn<MyType extends LengthCheck>(x: MyType){
    return x.length
}

let a = fn<string[]>(['100']) */
/* function check<Mytype extends string[]>(a:Mytype):void{
    let length:number = a.length
    return console.log(length)
}

check<string[]>(['hello', '123']) */
/* interface Animal {
    name : string;
    age : number
  }
  
  let data = '{"name" : "dog", "age" : 1 }'

  const t = ex<Animal>(data)
  console.log("🚀 ~ file: index.ts:617 ~ t:", t)

  function ex<myType>(a: string){
    let ace:myType = JSON.parse(a)
    return ace
  } */
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var a = new Person(123);
a.name; //any 타입이 되었넹 
