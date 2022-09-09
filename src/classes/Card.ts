import { CardParams } from "../typings/types";
export default class Card implements CardParams {
	public text: string;
	public suite: string;
	public value: number;
	constructor(params: CardParams) {
		for (const param in params) this[param] = params[param];
	}
	public get ace(): boolean {
		return this.text == "A";
	}
}