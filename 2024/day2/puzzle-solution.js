import { readInputFile } from "../utils.js";

const data = readInputFile("./input-test.txt");

const MIN_DIFF = 1;
const MAX_DIFF = 3;

const reports = data.split("\n");
const safeReports = [];

reports.forEach(report => {
    const levels = report.trimEnd().split(" ").map(v => Number(v));
    const check = checkIncrease(levels) || checkDecrease(levels);
    if (check) {
        safeReports.push(report);
    }
    console.log(report.trimEnd(), check);
})
console.log(safeReports.length);

function checkIncrease(levels) {
    let check = false;
    for (let levelIdx = 0; levelIdx < levels.length - 1; levelIdx++) {
        const level = levels[levelIdx];
        const nextLevel = levels[levelIdx + 1];
        if (nextLevel > level) {
            check = true ? (nextLevel - level) >= MIN_DIFF && (nextLevel - level) <= MAX_DIFF : false;
        } else {
            return false;
        }

        if (!check) {
            return false;
        }
    }
    return true;
}

function checkDecrease(levels) {
    let check = false;
    for (let levelIdx = 0; levelIdx < levels.length - 1; levelIdx++) {
        const level = levels[levelIdx];
        const nextLevel = levels[levelIdx + 1];
        if (nextLevel < level) {
            check = true ? Math.abs(nextLevel - level) >= MIN_DIFF && Math.abs(nextLevel - level) <= MAX_DIFF : false;
        } else {
            return false;
        }

        if (!check) {
            return false;
        }
    }
    return true;
}