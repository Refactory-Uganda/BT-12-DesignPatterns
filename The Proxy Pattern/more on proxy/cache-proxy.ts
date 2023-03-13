interface ISamsungAPI {
	getModelPrice(model: string): number; //number is the return type of this function.
}

class SamsungAPI implements ISamsungAPI {
	// { [indexName: KeyType]: ValueType }
	private modelPrices: { [model: string]: number };
	// { [model: string]: number } index signature

	constructor() {
		this.modelPrices = { Note10: 400, S10: 450, ZFold3: 300, S23Ultra: 1000 };
	}

	getModelPrice(model: string) {
		//method in the interface
		console.log(`samsungAPI accessed: ${model}`);
		const modelPrice = this.modelPrices[model];
		console.log(`Value found ${model} - $${modelPrice} ✅`);

		return modelPrice;
	}
}

class SamsungAPIProxy implements ISamsungAPI {
	// { [indexName: KeyType]: ValueType }
	private cache: { [model: string]: number };
	private samsungAPI: ISamsungAPI;

	constructor() {
		this.samsungAPI = new SamsungAPI();
		this.cache = {};
	}

	getModelPrice(model: string) {
		console.log(`Proxy accessed: ${model}`);
		let modelPrice = this.cache[model];
		if (modelPrice === undefined) {
			console.log(`Value not found in cache ${model} ❌`);
			modelPrice = this.cache[model] = this.samsungAPI.getModelPrice(model);
		} else {
			console.log(`Value found in cache ${model} - $${modelPrice} ✅`);
		}
    console.log();
    
		return modelPrice;
	}
}


const proxy: ISamsungAPI = new SamsungAPIProxy();
proxy.getModelPrice("S10");
proxy.getModelPrice("Note10");
proxy.getModelPrice("ZFold3");
proxy.getModelPrice("S23Ultra");
proxy.getModelPrice("Note10");
proxy.getModelPrice("S10");
proxy.getModelPrice("ZFold3");
proxy.getModelPrice("S23Ultra");
proxy.getModelPrice("Note10");
proxy.getModelPrice("S10");
proxy.getModelPrice("Note10");
