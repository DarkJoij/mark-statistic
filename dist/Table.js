"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTable = void 0;
const Constants_1 = require("./Constants");
const Utils_1 = require("./Utils");
function getLongestNameLength(subjects) {
    let sortedSource = subjects.sort((left, right) => right.name.length - left.name.length);
    let targetSubject = sortedSource[0];
    if (targetSubject.name.length < 9) {
        return 9;
    }
    return targetSubject.name.length + 2;
}
function createTable(subjects) {
    if (!subjects) {
        throw new Error('You don\'t typed any subjects.');
    }
    const nameLength = getLongestNameLength(subjects);
    const mainLine = Constants_1.mainTableLine.replace('{s}', '-'.repeat(nameLength));
    const bodyLine = Constants_1.bodyTableLine.replace('{s}', '-'.repeat(nameLength));
    let marksTable = (0, Utils_1.generateHead)(nameLength, mainLine, bodyLine);
    for (let subject of subjects) {
        marksTable += (0, Utils_1.generateLine)(subject, nameLength, bodyLine);
    }
    marksTable += (0, Utils_1.generateBottom)(subjects, mainLine);
    return marksTable;
}
exports.createTable = createTable;
