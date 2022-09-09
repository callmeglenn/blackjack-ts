"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(params) {
        for (const param in params)
            this[param] = params[param];
    }
    get ace() {
        return this.text == "A";
    }
}
exports.default = Card;
//# sourceMappingURL=Card.js.map