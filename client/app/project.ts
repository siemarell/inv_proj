export interface Project {
	id: number;
	name: string;
	region : string;
	initiators: string[];
	industry : string;
	investmentsSumValue : number;
	investmentsSumCurrency : string;
	paybackSumValue : number;
	paybackSumCurrency : string;
	normalSumValue : number;
	normalSumCurrency : string;
	periodSumValue : number;
	periodSumCurrency : string;
	descriptions: string[];
	coordinates?: [number,number];
	images?: string[],
	stream?: string,
	type: string,
	delayed: boolean
}