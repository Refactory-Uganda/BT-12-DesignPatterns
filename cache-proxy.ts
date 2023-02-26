interface ISamsungAPI {
  getModelPrice(model: string): number;
}

class SamsungAPI implements ISamsungAPI {
  // { [indexName: KeyType]: ValueType }
  private modelPrices: { [model: string]: number };

  constructor() {
    this.modelPrices = { Note10: 400, S10: 450, ZFold3: 300, S23Ultra: 1000 };
  }

  getModelPrice(model: string) {
    console.log(`API accessed: ${model}`);
    return this.modelPrices[model];
  }
}

class SamsungAPIProxy implements ISamsungAPI {
  // { [indexName: KeyType]: ValueType }
  private cache: { [model: string]: number };
  private samsungAPI: ISamsungAPI;

  constructor(samsungAPI: ISamsungAPI) {
    this.samsungAPI = samsungAPI;
    this.cache = {};
  }

  getModelPrice(model: string) {
    console.log(`Proxy accessed: ${model}`);
    if (this.cache[model] === undefined) {
      console.log(`Value not found in cache ${model} ❌`);
      this.cache[model] = this.samsungAPI.getModelPrice(model);
    } else {
      console.log(`Value found in cache ${model} ✅`);
    }
    return this.cache[model];
  }
}

const samsungAPI: ISamsungAPI = new SamsungAPI();
const proxy: ISamsungAPI = new SamsungAPIProxy(samsungAPI);
proxy.getModelPrice('S10');
proxy.getModelPrice('Note10');
proxy.getModelPrice('S10');
