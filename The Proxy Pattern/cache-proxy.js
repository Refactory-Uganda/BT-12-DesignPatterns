var SamsungAPI = /** @class */ (function () {
    function SamsungAPI() {
        this.modelPrices = { Note10: 400, S10: 450, ZFold3: 300, S23Ultra: 1000 };
    }
    SamsungAPI.prototype.getModelPrice = function (model) {
        var modelPrice = this.modelPrices[model];
        console.log("Real API accessed: ".concat(model, ", $").concat(modelPrice));
        return modelPrice;
    };
    return SamsungAPI;
}());
var SamsungAPIProxy = /** @class */ (function () {
    function SamsungAPIProxy() {
        this.cache = {};
        this.samsungAPI = new SamsungAPI();
    }
    SamsungAPIProxy.prototype.getModelPrice = function (model) {
        var modelPrice = this.cache[model];
        if (modelPrice == undefined) {
            modelPrice = this.samsungAPI.getModelPrice(model);
            this.cache[model] = modelPrice;
        }
        else {
            console.log("Proxy accessed: ".concat(model, ", $").concat(modelPrice));
        }
        return modelPrice;
    };
    return SamsungAPIProxy;
}());
function client() {
    var proxy = new SamsungAPIProxy();
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
