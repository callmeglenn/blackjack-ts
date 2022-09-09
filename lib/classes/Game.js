"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
const Deck_1 = __importDefault(require("./Deck"));
const types_1 = require("../typings/types");
class Game {
    constructor(params) {
        this.dealer = new Player_1.Player();
        this.deck = new Deck_1.default();
        this.bet = params.bet;
        this.def_mult = params.def_mult;
        this.bj_mult = params.def_mult;
        this.player = new Player_1.Player(params.id);
        this.player.add(this.deck.get(2));
        this.dealer.add(this.deck.get(2));
    }
    get state() {
        if (this.dealer.state == types_1.PlayerState.Blackjack) {
            if (this.player.state == types_1.PlayerState.Blackjack)
                return types_1.GameState.Draw;
            else
                return types_1.GameState.Dealer_Win;
        }
        if (this.player.state == types_1.PlayerState.Blackjack)
            return types_1.GameState.Player_Win;
        if (this.player.state == types_1.PlayerState.Over21)
            return types_1.GameState.Dealer_Win;
        if (this.player.stand) {
            if (this.dealer.values.value > 21)
                return types_1.GameState.Player_Win;
            if (this.player.values.value == this.dealer.values.value)
                return types_1.GameState.Draw;
            if (this.player.values.value > this.dealer.values.value)
                return types_1.GameState.Player_Win;
            else
                return types_1.GameState.Dealer_Win;
        }
        return types_1.GameState.Ongoing;
    }
    get payout() {
        let result = null;
        if (this.state != types_1.GameState.Ongoing) {
            if (this.state == types_1.GameState.Draw)
                result = this.bet;
            if (this.state == types_1.GameState.Dealer_Win)
                result = -this.bet;
            if (this.state == types_1.GameState.Player_Win) {
                if (this.player.hand.length == 2 && this.player.values.value == 21)
                    result = this.bet * this.bj_mult;
                else
                    result = this.bet * this.def_mult;
            }
        }
        return null;
    }
    hit() {
        if (this.state == types_1.GameState.Ongoing)
            this.player.add(this.deck.get());
    }
    stand() {
        if (this.state == types_1.GameState.Ongoing) {
            this.player.stand = true;
            this.deal();
        }
    }
    deal() {
        while (this.dealer.values.min < 17)
            this.dealer.add(this.deck.get());
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map