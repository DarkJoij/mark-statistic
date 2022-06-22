"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countHundredPoints = exports.toHundredPoint = void 0;
function toHundredPoint(result, max) {
    let dirtyPercents = result / max * 100;
    let percents = Math.round(dirtyPercents); // Rounded to the nearest integer.
    return percents;
}
exports.toHundredPoint = toHundredPoint;
function countHundredPoints(subjects) {
    let points = 0;
    for (let subject of subjects) {
        if (subject.countable) {
            points += toHundredPoint(subject.result, subject.max);
        }
    }
    return points;
}
exports.countHundredPoints = countHundredPoints;
