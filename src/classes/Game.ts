import { Player } from './Player';
import Deck from './Deck';
import { BlackjackParams, GameState, PlayerState } from '../typings/types';
export default class Game {
	public player: Player;
	public dealer: Player = new Player();
	public deck: Deck = new Deck();
	public bet: number;
	public def_mult: number;
	public bj_mult: number;
	constructor(params: BlackjackParams) {
		this.bet = params.bet;
		this.def_mult = params.def_mult;
		this.bj_mult = params.def_mult;
		this.player = new Player(params.id);
		this.player.add(this.deck.get(2));
		this.dealer.add(this.deck.get(2));
	}
	public get state(): GameState {
		if (this.dealer.state == PlayerState.Blackjack) {
			if (this.player.state == PlayerState.Blackjack) return GameState.Draw;
			else return GameState.Dealer_Win;
		}
		if (this.player.state == PlayerState.Blackjack) return GameState.Player_Win;
		if (this.player.state == PlayerState.Over21) return GameState.Dealer_Win;
		if (this.player.stand) {
			if (this.dealer.values.value > 21) return GameState.Player_Win;
			if (this.player.values.value == this.dealer.values.value) return GameState.Draw;
			if (this.player.values.value > this.dealer.values.value) return GameState.Player_Win;
			else return GameState.Dealer_Win;
		}
		return GameState.Ongoing; 
	}
	public get payout(): number | null {
		let result: number | null = null;
		if (this.state != GameState.Ongoing) {
			if (this.state == GameState.Draw) result = this.bet;
			if (this.state == GameState.Dealer_Win) result = -this.bet;
			if (this.state == GameState.Player_Win) {
				if (this.player.hand.length == 2 && this.player.values.value == 21) result = this.bet * this.bj_mult;
				else result = this.bet * this.def_mult;
			}
		}
		return null;
	}
	public hit() {
		if (this.state == GameState.Ongoing) this.player.add(this.deck.get());
	}
	public stand() {
		if (this.state == GameState.Ongoing) {
			this.player.stand = true;
			this.deal();
		}
	}
	public deal() {
		while (this.dealer.values.min < 17) this.dealer.add(this.deck.get());
	}
}