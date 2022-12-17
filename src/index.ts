import { exit } from 'process';
import Day01 from './day01/index';
import Day02 from './day02/index';
import Day03 from './day03/index';
import Day04 from './day04/index';
import Day05 from './day05/index';

if (!process.argv[2]) {
    console.log('Please provide a valid day argument.');
    exit();
}

const arg = Number(process.argv[2]);

if (arg > 0 && arg <= 24) {
    switch (arg) {
        case 1:
            Day01.run();
            break;
        case 2:
            Day02.run();
            break;
        case 3:
            Day03.run();
            break;
        case 4:
            Day04.run();
            break;
        case 5:
            Day05.run();
            break;
        default:
            console.log(`No solution for day ${arg} implemented.`);
    }
} else {
    console.log(`Argument '${arg}' is not a valid day.`);
}
