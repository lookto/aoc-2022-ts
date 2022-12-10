// https://adventofcode.com/2022/day/2
import fs from 'fs';

enum RPS {
    Rock = 1,
    Paper = 2,
    Scissors = 3,
}

enum GameOutcome {
    Win = 6,
    Draw = 3,
    Loss = 0,
}

interface Strategy {
    opp: RPS;
    res: RPS;
    outcome?: GameOutcome;
    score: number;
}

class Day02 {
    static run = () => {
        const input = fs
            .readFileSync('src/day02/input', { encoding: 'utf-8' })
            .split('\n')
            .filter((element) => element.length === 3);

        const roundsPart1: Strategy[] = input.map((round) => {
            const opp = this.mapOpponent(round[0]);
            const res = this.mapResponse(round[2]);
            const score = this.calcScore(opp, res);
            return {
                opp,
                res,
                score,
            };
        });

        const totalScorePart1 = roundsPart1.reduce(
            (total: number, round) => total + round.score,
            0
        );

        console.log(`Part 1:\nMy total score is ${totalScorePart1}.`);

        const roundsPart2: Strategy[] = input.map((round) => {
            const opp = this.mapOpponent(round[0]);
            const outcome = this.mapOutcome(round[2]);
            const res = this.calcRes(opp, outcome);
            const score = this.calcScore(opp, res);
            return {
                opp,
                res,
                outcome,
                score,
            };
        });
        const totalScorePart2 = roundsPart2.reduce(
            (total: number, round) => total + round.score,
            0
        );

        console.log(`Part 2:\nMy total score is ${totalScorePart2}.`);
    };

    private static mapOpponent = (input: string) => {
        if (input === 'A') return RPS.Rock;
        if (input === 'B') return RPS.Paper;
        if (input === 'C') return RPS.Scissors;

        throw new Error(`'${input}' is not a valid input.`);
    };

    private static mapResponse = (input: string) => {
        if (input === 'X') return RPS.Rock;
        if (input === 'Y') return RPS.Paper;
        if (input === 'Z') return RPS.Scissors;

        throw new Error(`'${input}' is not a valid input.`);
    };

    private static mapOutcome = (input: string) => {
        if (input === 'X') return GameOutcome.Loss;
        if (input === 'Y') return GameOutcome.Draw;
        if (input === 'Z') return GameOutcome.Win;

        throw new Error(`'${input}' is not a valid input.`);
    };

    private static calcRes = (opp: RPS, outcome: GameOutcome): RPS => {
        if (outcome === GameOutcome.Draw) return opp;

        if (outcome === GameOutcome.Win) {
            if (opp === RPS.Rock) return RPS.Paper;
            if (opp === RPS.Paper) return RPS.Scissors;
            if (opp === RPS.Scissors) return RPS.Rock;
        }

        if (opp === RPS.Rock) return RPS.Scissors;
        if (opp === RPS.Paper) return RPS.Rock;

        return RPS.Paper;
    };

    private static calcScore = (opp: RPS, res: RPS): number =>
        res + this.calcOutcome(opp, res);

    private static calcOutcome = (opp: RPS, res: RPS): GameOutcome => {
        if (opp === res) return GameOutcome.Draw;
        if (
            (opp === RPS.Rock && res === RPS.Scissors) ||
            (opp === RPS.Paper && res === RPS.Rock) ||
            (opp === RPS.Scissors && res === RPS.Paper)
        )
            return GameOutcome.Loss;
        return GameOutcome.Win;
    };
}

export default Day02;
