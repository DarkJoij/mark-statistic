export interface ISubject {
    readonly name: string;
    readonly result: number;
    readonly grades: number[];
    readonly max: number;
    readonly countable: boolean;
}

export type CheckableParams = number | number[];