interface MyType {
    'font-size': number;
    [key: string]: number | MyType;
}
declare let obj: MyType;
