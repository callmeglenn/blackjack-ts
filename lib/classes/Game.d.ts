import { Player } from './Player';
import Deck from './Deck';
import { BlackjackParams, GameState } from '../typings/types';
export default class Game {
    player: Player;
    dealer: Player;
    deck: Deck;
    bet: number;
    def_mult: number;
    bj_mult: number;
    constructor(params: BlackjackParams);
    get state(): GameState;
    get payout(): number | null;
    hit(): void;
    stand(): void;
    deal(): void;
}
