# blackjack.ts
An implementation of Blackjack into your software with Typescript.

## Requirements
- [random](https://www.npmjs.com/package/random)
- [fast-shuffle](https://www.npmjs.com/package/fast-shuffle)

```sh-session
npm install blackjack.ts
```

## Quick Start
**Creating a new game**

```ts
import { Game } from 'blackjack';
const game = new Game({
	// The player's id
	id: "",
	// The bet amount
	bet: 100,
	// The default multiplier payout on bet
	def_mult: 2,
	// The blackjack multiplier payout on bet
	bj_mult: 3
});
```

You can initalize a *new game* by with the `Game constructor`.
You can check the current state of the game with its `.state` property, it will returrn a `typeof GameState`.

```ts
import { GameState } from 'blackjack';
// Will return true if logging after initializing a new game
console.log(game.state == GameState.Ongoing);
```

### Dispatching actions
The only way to *mutate the state of the game* is to dispatch actions with `Game.hit()` or `Game.stand()`.

```ts
// State is ongoing
console.log(game.state == GameStage.Ongoing); // true

// Calling an action to mutate the state
game.stand();

// State has changed
console.log(game.state != GameStage.Ongoing); // false
```

### Actions
- hit
- stand

### States
- GameState.Ongoing - Whether or not the game is ongoing.
- GameState.Dealer_Win - Whether or not the dealer has won.
- GameState.Player_Win - Whether or not the player has won.
- GameState.Draw - Whether or not the game ended in a tie.
