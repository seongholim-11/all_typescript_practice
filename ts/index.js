/* let lastname: string = "lim";
let age: number = 24;
let hometown: string = "seoul";

let favorite: {
    title: string;
    singer: string;
} = {
    title: "안녕",
    singer: "폴킴",
};

let project: {
    member: string[];
    days: number;
    started: boolean;
} = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};


 */
/* // union type
let 회원: number | string = 123;
let 회원들: (number | string)[] = [123, "456"];
let 오브젝트: { a: string | number } = { a: 123 };

let 나이:unknown = 123; */
let user = "kim";
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
