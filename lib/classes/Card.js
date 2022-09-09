export default class Card {
    constructor(params) {
        for (const param in params)
            this[param] = params[param];
    }
    get ace() {
        return this.text == "A";
    }
}
//# sourceMappingURL=Card.js.map