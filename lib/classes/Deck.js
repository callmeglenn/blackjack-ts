import Card from './Card';
import { shuffle } from 'fast-shuffle';
import random from 'random';
const suites = ["♣", "♠", "♦", "♥"];
export default class Deck {
    constructor() {
        this.cards = [];
        for (const suite of suites) {
            this.cards.push(new Card({ text: "A", suite, value: 11 }));
            for (let i = 2; i <= 10; i++)
                this.cards.push(new Card({ text: `${i}`, suite, value: i }));
            for (const text of ["J", "Q", "K"])
                this.cards.push(new Card({ text, suite, value: 10 }));
        }
        this.cards = shuffle(this.cards);
    }
    get(amount) {
        amount = amount || 1;
        const result = [];
        for (let i = 1; i <= amount; i++) {
            const [card] = this.cards.splice(random.int(this.cards.length - 1), 1);
            result.push(card);
        }
        return result;
    }
}
//# sourceMappingURL=Deck.js.map