export type Die = {
    name: string;
    sides: number;
};

export type DieResult = Die & {
    result: number;
};
