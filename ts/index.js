/* function hiname(n?:string):string{
    if(typeof n === 'string'){
        return `안녕하세요 ${n}`
    }else{
        return `이름이 없습니다.`
    }
}

console.log(hiname('홍길동')); */
let cutZero = (s) => {
    const str = s.substr(0, 1);
    if (str === "0") {
        return s.replace("0", "");
    }
    else {
        return s;
    }
};
let removeDash = (str) => {
    return Number(str.replace(/-/g, ""));
};
const 만들함수 = (a, b, c) => {
    let first = b(a);
    let second = c(first);
    return second;
};
console.log("🚀 ~ file: index.ts:207 ~ 만들함수('010-1111-2222', cutZero, removeDash):", 만들함수("010-1111-2222", cutZero, removeDash));
