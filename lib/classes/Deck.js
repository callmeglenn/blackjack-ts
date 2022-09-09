"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("./Card"));
const fast_shuffle_1 = require("fast-shuffle");
const random_1 = __importDefault(require("random"));
const suites = ["♣", "♠", "♦", "♥"];
class Deck {
    constructor() {
        this.cards = [];
        for (const suite of suites) {
            this.cards.push(new Card_1.default({ text: "A", suite, value: 11 }));
            for (let i = 2; i <= 10; i++)
                this.cards.push(new Card_1.default({ text: `${i}`, suite, value: i }));
            for (const text of ["J", "Q", "K"])
                this.cards.push(new Card_1.default({ text, suite, value: 10 }));
        }
        this.cards = (0, fast_shuffle_1.shuffle)(this.cards);
    }
    get(amount) {
        amount = amount || 1;
        const result = [];
        for (let i = 1; i <= amount; i++) {
            const [card] = this.cards.splice(random_1.default.int(this.cards.length - 1), 1);
            result.push(card);
        }
        return result;
    }
}
exports.default = Deck;
//# sourceMappingURL=Deck.js.map