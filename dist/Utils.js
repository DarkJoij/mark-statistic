"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBottom = exports.generateLine = exports.generateHead = void 0;
const Constants_1 = require("./Constants");
const Marks_1 = require("./Marks");
function createCell(text, emptySpaces, addVertical) {
    let spaces = emptySpaces - text.length;
    let leftSpaces = Math.ceil(spaces / 2);
    let rightSpaces = spaces - leftSpaces;
    let cell = ' '.repeat(leftSpaces) + text + ' '.repeat(rightSpaces) + '|';
    if (addVertical)
        return '|' + cell;
    return cell;
}
function join(...params) {
    return params.join('\n') + '\n';
}
function generateHead(nameLength, mainLine, bodyLine) {
    let phrase = createCell(Constants_1.title, mainLine.length - 2, true);
    let colomns = createCell('Subject', nameLength, true);
    for (let word of Constants_1.bodyWords) {
        let wordIndex = Constants_1.bodyWords.indexOf(word);
        let wordCellLength = Constants_1.bodyWordsLength[wordIndex];
        colomns += createCell(word, wordCellLength);
    }
    return join(mainLine, phrase, bodyLine, colomns, bodyLine);
}
exports.generateHead = generateHead;
function generateLine(subject, nameLength, bodyLine) {
    let line = createCell(subject.name, nameLength, true);
    // Integer:
    line += createCell(`${subject.result} / ${subject.max}`, Constants_1.bodyWordsLength[0]);
    // D. Mark:
    let dMark = 2;
    for (let grade of subject.grades) {
        if (subject.result >= grade) {
            dMark += 1;
        }
    }
    line += createCell(`${dMark} / 5`, Constants_1.bodyWordsLength[1]);
    // Percents:
    let percents = (0, Marks_1.toHundredPoint)(subject.result, subject.max);
    line += createCell(`${percents} %`, Constants_1.bodyWordsLength[2]);
    return join(line, bodyLine);
}
exports.generateLine = generateLine;
function generateBottom(subjects, mainLine) {
    let points = (0, Marks_1.countHundredPoints)(subjects);
    let phrase = createCell(`${Constants_1.bottom} ${points}B`, mainLine.length - 2, true);
    return join(phrase, mainLine);
}
exports.generateBottom = generateBottom;
