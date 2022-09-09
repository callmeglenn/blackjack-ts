export interface CardParams {
    text: string;
    suite: string;
    value: number;
}
export interface BlackjackParams {
    id: string;
    bet: number;
    def_mult: number;
    bj_mult: number;
}
export declare enum PlayerState {
    Playing = 0,
    Over21 = 1,
    Blackjack = 2
}
export declare enum GameState {
    Ongoing = 0,
    Dealer_Win = 1,
    Player_Win = 2,
    Draw = 3
}
