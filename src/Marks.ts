import { Subject } from './Subjects';

export function toHundredPoint(result: number, max: number): number {
    let dirtyPercents = result / max * 100;
    let percents = Math.round(dirtyPercents); // Rounded to the nearest integer.
    return percents;
}

export function countHundredPoints(subjects: Subject[]): number {
    let points = 0;

    for (let subject of subjects) {
        if (subject.countable) {
            points += toHundredPoint(subject.result, subject.max);
        }
    }

    return points;
}