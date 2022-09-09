import { CardParams } from "../typings/types";
export default class Card implements CardParams {
    text: string;
    suite: string;
    value: number;
    constructor(params: CardParams);
    get ace(): boolean;
}
