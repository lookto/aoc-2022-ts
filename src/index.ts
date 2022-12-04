import { exit } from 'process';
import Day01 from './day01/index';
import Day02 from './day02/index';

if (!process.argv[2]) {
    console.log(
        'Please provide a valid day argument.'
    );
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
        default:
            console.log(
                `No solution for day ${arg} implemented.`
            );
    }
} else {
    console.log(
        `Argument '${arg}' is not a valid day.`
    );
}
