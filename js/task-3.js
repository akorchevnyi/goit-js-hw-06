class StringBuilder {
    #value;

    constructor(value) {
        this.#value = value;
    }

    #isValidString(str) {
        const isValid = typeof str === "string" && str.length > 0;
        if (!isValid) {
            console.warn("Bad string. Nothing to add");
        }
        return isValid;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        if (!this.#isValidString(str)) return;
        this.#value += str;
    }

    padStart(str) {
        if (!this.#isValidString(str)) return;
        this.#value = str + this.#value;
    }

    padBoth(str) {
        if (!this.#isValidString(str)) return;
        this.#value = str + this.#value + str;
    }
}

const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
