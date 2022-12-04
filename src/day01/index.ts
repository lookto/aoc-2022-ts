// https://adventofcode.com/2022/day/1
import fs from 'fs';

class Day01 {
    static run = () => {
        try {
            const input = fs
                .readFileSync(
                    './src/day01/input',
                    {
                        encoding:
                            'utf-8',
                        flag: 'r',
                    }
                )
                .split('\n\n');

            if (!input)
                throw new Error(
                    'Input file is empty.'
                );

            const sums = input
                .map((elv) =>
                    elv
                        .split('\n')
                        .reduce(
                            (
                                sumCalories: number,
                                calories
                            ) =>
                                sumCalories +
                                Number(
                                    calories
                                ),
                            0
                        )
                )
                .sort((a, b) => b - a);

            console.log(
                `The heaviest loaded Elf is carrying ${sums[0]} calories.`
            );
            console.log(
                `The top three Elves are carrying ${
                    sums[0] +
                    sums[1] +
                    sums[2]
                } calories in total.`
            );
        } catch (error) {
            console.log(error);
        }
    };
}

export default Day01;
