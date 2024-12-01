import { readInputFile } from "../utils.js";

const data = readInputFile("./input.txt");

const dataRows = data.split("\n");
const [leftList, rightList] = [[], []];

dataRows.forEach(row => {
    const rowValue = row.split(" ");
    leftList.push(rowValue[0]);
    rightList.push(rowValue[3]);
});
leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

function calculateTotalDistance() {
    const distances = [];
    let i = 0;
    while (i < leftList.length) {
        distances.push(Math.abs(leftList[i] - rightList[i]));
        i++;
    }
    return distances.reduce((p, c) => p + c);
}

function calculateSimilarityScore() {
    let similarityScore = 0;
    leftList.forEach(leftValue => {
        similarityScore += leftValue * rightList.filter(rightValue => rightValue === leftValue).length;
    })
    return similarityScore;
}

console.log(calculateTotalDistance(), calculateSimilarityScore());