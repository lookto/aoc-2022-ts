class Rucksack {
    private compartment1: Array<string>;

    private compartment2: Array<string>;

    private items: Array<string>;

    private dupItems: Array<string>;

    constructor(allItems: string) {
        const noItems = allItems.length;
        if (noItems % 2 !== 0)
            throw new Error('Uneven number of items provided.');

        this.compartment1 = Array.from(allItems.slice(0, noItems / 2));
        this.compartment2 = Array.from(allItems.slice(noItems / 2));

        this.calcItems(allItems);

        this.calcDoubledItems();
    }

    public get duplicatedItems() {
        return this.dupItems;
    }

    public get uniqueItems() {
        return this.items;
    }

    private calcItems(allItems: string) {
        const items = new Set<string>();

        Array.from(allItems).forEach((char) => items.add(char));

        this.items = Array.from(items);
    }

    private calcDoubledItems() {
        const duplicates = new Set<string>();

        this.compartment1.forEach((char) => {
            if (this.compartment2.find((char2) => char === char2)) {
                duplicates.add(char);
            }
        });

        this.dupItems = Array.from(duplicates);
    }
}

export default Rucksack;
