// https://adventofcode.com/2022/day/4
import fs from 'fs';
import Sections from './sections';

class Day04 {
    static run() {
        const pairs = this.importData();

        const sumFullyContainedSections = pairs.reduce(
            (total: number, pair) => {
                if (
                    pair[0].fullyContains(pair[1].sections) ||
                    pair[1].fullyContains(pair[0].sections)
                ) {
                    return total + 1;
                }

                return total;
            },
            0
        );
        console.log(
            `Part 1:\nThere are ${sumFullyContainedSections} sections in total that are fully contained by the partners.`
        );

        const sumOverlappingSections = pairs.reduce((total: number, pair) => {
            if (
                pair[0].partialyContains(pair[1].sections) ||
                pair[1].partialyContains(pair[0].sections)
            ) {
                return total + 1;
            }

            return total;
        }, 0);
        console.log(
            `Part 2:\nThere are ${sumOverlappingSections} overlapping assignments.`
        );
    }

    static importData() {
        const input = fs
            .readFileSync('src/day04/input', {
                encoding: 'utf-8',
            })
            .split('\n')
            .filter((element) => element.length !== 0)
            .map((element) => element.match(/[0-9]+/g));

        return input.map((element) => [
            new Sections(Number(element[0]), Number(element[1])),
            new Sections(Number(element[2]), Number(element[3])),
        ]);
    }
}

export default Day04;
