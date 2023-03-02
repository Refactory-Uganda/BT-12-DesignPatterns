interface ISamsungAPI {
	getModelPrice(model: string): number;
}

class SamsungAPI implements ISamsungAPI {
	private modelPrices: { [model: string]: number };

	constructor() {
		this.modelPrices = { Note10: 400, S10: 450, ZFold3: 300, S23Ultra: 1000 };
	}

	getModelPrice(model: string) {
		const modelPrice = this.modelPrices[model];
		console.log(`Real API accessed: ${model}, $${modelPrice}`);
		return modelPrice;
	}
}

class SamsungAPIProxy implements ISamsungAPI {
	private cache: { [model: string]: number };
	private samsungAPI: ISamsungAPI;

	constructor() {
		this.cache = {};
		this.samsungAPI = new SamsungAPI();
	}

	getModelPrice(model: string) {
		let modelPrice = this.cache[model];
		if (modelPrice == undefined) {
			modelPrice = this.samsungAPI.getModelPrice(model);
			this.cache[model] = modelPrice;
		} else {
			console.log(`Proxy accessed: ${model}, $${modelPrice}`);
		}

		return modelPrice;
	}
}

function client() {
	const proxy: ISamsungAPI = new SamsungAPIProxy();
	proxy.getModelPrice("S10");
	proxy.getModelPrice("Note10");
	proxy.getModelPrice("ZFold3");
	proxy.getModelPrice("S23Ultra");

	proxy.getModelPrice("S10");
	proxy.getModelPrice("Note10");
	proxy.getModelPrice("ZFold3");
	proxy.getModelPrice("S23Ultra");

    proxy.getModelPrice("S10");
	proxy.getModelPrice("Note10");
	proxy.getModelPrice("ZFold3");
	proxy.getModelPrice("S23Ultra");
}

client();
