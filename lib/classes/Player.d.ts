import { PlayerState } from '../typings/types';
import Card from './Card';
export declare class Player {
    id?: string | null;
    hand: Card[];
    stand: boolean;
    constructor(id?: string);
    get state(): PlayerState;
    get values(): {
        min: number;
        max: number;
        value: number;
        string: string;
    };
    add(cards: Card | Card[]): void;
}
