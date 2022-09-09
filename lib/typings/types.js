export var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Playing"] = 0] = "Playing";
    PlayerState[PlayerState["Over21"] = 1] = "Over21";
    PlayerState[PlayerState["Blackjack"] = 2] = "Blackjack";
})(PlayerState || (PlayerState = {}));
export var GameState;
(function (GameState) {
    GameState[GameState["Ongoing"] = 0] = "Ongoing";
    GameState[GameState["Dealer_Win"] = 1] = "Dealer_Win";
    GameState[GameState["Player_Win"] = 2] = "Player_Win";
    GameState[GameState["Draw"] = 3] = "Draw";
})(GameState || (GameState = {}));
//# sourceMappingURL=types.js.map