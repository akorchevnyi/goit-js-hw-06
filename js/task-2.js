class Storage {
    #items;

    constructor(goods) {
        if (!Array.isArray(goods)) {
            throw new TypeError("Good list must be an Array!");
        }
        this.#items = goods.map(item => item.trim()).filter(Boolean);
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        const trimmedItem = newItem.trim();
        if (!trimmedItem) {
            console.warn("You need to type a new item title!");
            return;
        }

        this.#items.push(trimmedItem);
    }

    removeItem(itemToRemove) {
        const trimmedItem = itemToRemove.trim();
        if (!trimmedItem) {
            console.warn(`You need to enter an item to remove!`);
            return;
        }

        const index = this.#items.indexOf(trimmedItem);
        if (index === -1) {
            console.warn(`There is no ${trimmedItem} in storage!`);
            return;
        }

        this.#items.splice(index, 1);
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
