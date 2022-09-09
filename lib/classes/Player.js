import { PlayerState } from '../typings/types';
export class Player {
    constructor(id) {
        this.hand = [];
        this.stand = false;
        this.id = id || null;
    }
    get state() {
        if (this.values.max == 21 && this.hand.length == 2)
            return PlayerState.Blackjack;
        if (this.values.min > 21)
            return PlayerState.Over21;
        return PlayerState.Playing;
    }
    get values() {
        let min = 0, max = 0;
        for (const card of this.hand) {
            if (card.ace) {
                min += 1;
                max += card.value;
            }
            else {
                min += card.value;
                max += card.value;
            }
        }
        let value = max;
        let string = ` ${max} `;
        if (max > 21 && min <= 21) {
            string = `Soft ${min}`;
            value = min;
        }
        else if (max == 21 && this.hand.length == 2) {
            string = "Blackjack";
            value = max;
        }
        return { min, max, value, string };
    }
    add(cards) {
        if (cards instanceof Array)
            this.hand.push(...cards);
        else
            this.hand.push(cards);
    }
}
//# sourceMappingURL=Player.js.map