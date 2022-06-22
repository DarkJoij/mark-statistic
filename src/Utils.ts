import { title, bottom, bodyWords, bodyWordsLength } from './Constants';
import { toHundredPoint, countHundredPoints } from './Marks';
import { Subject } from './Subjects';


function createCell(text: string, emptySpaces: number, addVertical?: boolean): string {
    let spaces = emptySpaces - text.length;
    let leftSpaces = Math.ceil(spaces / 2);
    let rightSpaces = spaces - leftSpaces;

    let cell = ' '.repeat(leftSpaces) + text + ' '.repeat(rightSpaces) + '|';

    if (addVertical) return '|' + cell;
    return cell;
}

function join(...params: string[]): string {
    return params.join('\n') + '\n';
}

export function generateHead(nameLength: number, mainLine: string, bodyLine: string): string {
    let phrase = createCell(title, mainLine.length - 2, true);
    let colomns = createCell('Subject', nameLength, true);

    for (let word of bodyWords) {
        let wordIndex = bodyWords.indexOf(word);
        let wordCellLength = bodyWordsLength[wordIndex];
        colomns += createCell(word, wordCellLength);
    }

    return join(mainLine, phrase, bodyLine, colomns, bodyLine);
}

export function generateLine(subject: Subject, nameLength: number, bodyLine: string): string {
    let line = createCell(subject.name, nameLength, true);

    // Integer:
    line += createCell(`${subject.result} / ${subject.max}`, bodyWordsLength[0]);

    // D. Mark:
    let dMark = 2;

    for (let grade of subject.grades) {
        if (subject.result >= grade) {
            dMark += 1;
        }
    }

    line += createCell(`${dMark} / 5`, bodyWordsLength[1]);

    // Percents:
    let percents = toHundredPoint(subject.result, subject.max);
    line += createCell(`${percents} %`, bodyWordsLength[2]);

    return join(line, bodyLine);
}

export function generateBottom(subjects: Subject[], mainLine: string): string {
    let points = countHundredPoints(subjects);
    let phrase = createCell(`${bottom} ${points}B`, mainLine.length - 2, true);

    return join(phrase, mainLine);
}