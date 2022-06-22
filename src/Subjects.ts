import { ISubject, CheckableParams } from './Types';

export class Subject implements ISubject {
    public readonly name: string;
    public readonly result: number;
    public readonly grades: number[];
    public readonly max: number;
    public readonly countable: boolean;

    /**
     * Class for representing your result
     * for current subject.
     * @param name String subject name.
     * @param result Number of balls you earned on this exam.
     * @param max Max number of balls can be earned on this exam.
     * @param grades `number[]` with number of balls 
     * requered for marks going in order 3, 4, 5.
     * Example: `[4, 10, 16]`.
     * @param countable If `true`, will be counted with other similar exams.
     */
    constructor(
        name: string, result: number, max: number, 
        grades: number[], countable: boolean = false
    ) {
        this.checkParams(result, max, grades);

        if (grades.length !== 3) {
            throw new Error('You can\'t add more or less than 3 grade.');
        }

        this.name = name;
        this.result = result;
        this.max = max;
        this.grades = grades;
        this.countable = countable;
    }

    private checkParams(...params: CheckableParams[]): never | void {
        let unpackedParams = [];

        for (let param of params) {
            if (typeof param === 'object') {
                unpackedParams.push(...param);
                continue;
            }

            unpackedParams.push(param);
        }

        for (let target of unpackedParams) {
            if (target < 0 || target >= 100) {
                throw new Error(`Invalid data: 'result' or 'max' or 'grades'.`);
            }
        }
    }
}