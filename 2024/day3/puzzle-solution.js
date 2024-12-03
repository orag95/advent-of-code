import { readInputFile } from "../utils.js";

const data = readInputFile("./input.txt");

let addedMultiplications = 0;
data.split("do()").forEach(doSubMem => {
    const dontSubMem = doSubMem.split("don't");
    addedMultiplications += findAndExecuteMulOperation(dontSubMem[0]).reduce((prev, curr) => prev + curr);
})

console.log(addedMultiplications);

function findAndExecuteMulOperation(memory) {
    const mulRegex = /mul\(\d+,\d+\)/gm;
    const mulInstructions = memory.match(mulRegex);

    let multiplications = [];

    mulInstructions.forEach(instruction => {
        const splitted = instruction.split(",");
        const a = Number(splitted[0].split("(")[1]);
        const b = Number(splitted[1].split(")")[0]);
        multiplications.push(a * b);
    })

    return multiplications;
}