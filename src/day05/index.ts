import fs from 'fs';

interface Instruction {
    from: number;
    to: number;
    number: number;
}

class Day05 {
    static run() {
        this.importData();
    }

    static importData() {
        const input = fs
            .readFileSync('src/day05/input', {
                encoding: 'utf-8',
            })
            .split('\n')
            .filter((element) => element.length !== 0);

        const instructions: Array<Instruction> = input
            .filter((element) => element.includes('move'))
            .map((element) => element.match(/[0-9]+/g))
            .map((element) => ({
                from: Number(element[1]),
                to: Number(element[2]),
                number: Number(element[0]),
            }));
    }
}

export default Day05;
