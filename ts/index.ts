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

type CutZero = (a: string) => string;
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

type MadeF = (a: string, b: "cutZero", c: "removeDash") => number;

const 만들함수 = (a, b, c) => {
    let first = b(a);
    let second = c(first);
    return second;
};

console.log(
    "🚀 ~ file: index.ts:207 ~ 만들함수('010-1111-2222', cutZero, removeDash):",
    만들함수("010-1111-2222", cutZero, removeDash)
);
