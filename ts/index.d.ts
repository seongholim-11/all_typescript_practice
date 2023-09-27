type Age<T> = T extends [string, number] ? string : unknown;
declare let age1: Age<[string, number]>;
declare let age2: Age<[boolean, number]>;
