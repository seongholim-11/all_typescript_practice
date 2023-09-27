type Bus = {
    color: string;
    model: boolean;
    price: Number;
};
type Change<My, T> = {
    [key in keyof My]: T;
};
type new1 = Change<Bus, string>;
