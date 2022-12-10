/* eslint-disable no-underscore-dangle */
class Sections {
    private _sections: Set<number> = new Set();

    constructor(start: number, end: number) {
        for (let i = start; i <= end; i += 1) {
            this._sections.add(i);
        }
    }

    public get sections() {
        return this._sections;
    }

    public fullyContains(sections: Set<number>) {
        return Array.from(sections).length === this.partialyContains(sections);
    }

    public partialyContains(sections: Set<number>) {
        return Array.from(this._sections).reduce((total: number, section) => {
            if (Array.from(sections).find((arrSec) => arrSec === section)) {
                return total + 1;
            }

            return total;
        }, 0);
    }
}

export default Sections;
