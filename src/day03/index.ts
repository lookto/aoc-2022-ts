// https://adventofcode.com/2022/day/3
import fs from 'fs';
import Rucksack from './rucksack';

class Day03 {
    static run = () => {
        const rucksacks = this.importData();

        const sumPriorities = rucksacks.reduce(
            (total: number, rucksack) =>
                total +
                rucksack.duplicatedItems.reduce(
                    (rucksackSum: number, duplicate) =>
                        rucksackSum + this.calcItemPriority(duplicate),
                    0
                ),
            0
        );

        console.log(
            `Part 1:\nThe total sum of the priorities of the duplicated items is ${sumPriorities}.`
        );

        const groupBadges: Array<string> = [];

        for (let i = 0; i < rucksacks.length; i += 3) {
            const group = rucksacks.slice(i, i + 3);
            const items = new Map<string, number>();

            group.forEach((member) => {
                member.uniqueItems.forEach((item) => {
                    items.set(item, (items.get(item) || 0) + 1);
                });
            });

            groupBadges.push(
                Array.from(items).find((element) => element[1] === 3)[0]
            );
        }

        const sumPrioritiesBadges = groupBadges.reduce(
            (total: number, badge) => total + this.calcItemPriority(badge),
            0
        );

        console.log(
            `Part 2:\nThe total sum of the badge priorities is ${sumPrioritiesBadges}.`
        );
    };

    static calcItemPriority = (input: string) => {
        if (!input) throw Error('No input provided.');

        const utf16Charcode = input.charCodeAt(0);

        if (utf16Charcode >= 65 && utf16Charcode <= 90) {
            return utf16Charcode - 38;
        }

        return utf16Charcode - 96;
    };

    static importData = (): Rucksack[] => {
        const input = fs
            .readFileSync('src/day03/input', {
                encoding: 'utf-8',
            })
            .split('\n')
            .filter((element) => element.length !== 0);

        return input.map((rucksack) => new Rucksack(rucksack));
    };
}

export default Day03;
