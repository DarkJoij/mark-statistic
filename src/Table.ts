import { mainTableLine, bodyTableLine } from './Constants';
import { Subject } from './Subjects';
import { generateHead, generateLine, generateBottom } from './Utils';

function getLongestNameLength(subjects: Subject[]): number {
    let sortedSource = subjects.sort(
        (left, right) => right.name.length - left.name.length
    );
    
    let targetSubject = sortedSource[0];
    if (targetSubject.name.length < 9) {
        return 9;
    }

    return targetSubject.name.length + 2;
}

export function createTable(subjects: Subject[]): never | string {
    if (!subjects) {
        throw new Error('You don\'t typed any subjects.');
    }

    const nameLength = getLongestNameLength(subjects);
    const mainLine = mainTableLine.replace('{s}', '-'.repeat(nameLength));
    const bodyLine = bodyTableLine.replace('{s}', '-'.repeat(nameLength));

    let marksTable = generateHead(nameLength, mainLine, bodyLine);

    for (let subject of subjects) {
        marksTable += generateLine(subject, nameLength, bodyLine);
    }

    marksTable += generateBottom(subjects, mainLine);

    return marksTable;
}