var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstract Component
var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
// Abstract Decorator
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
// Concrete Components
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = "Espresso";
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
var DarkRoast = /** @class */ (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        var _this = _super.call(this) || this;
        _this.description = "Dark Roast Coffee";
        return _this;
    }
    DarkRoast.prototype.cost = function () {
        return 0.99;
    };
    return DarkRoast;
}(Beverage));
var Decaf = /** @class */ (function (_super) {
    __extends(Decaf, _super);
    function Decaf() {
        var _this = _super.call(this) || this;
        _this.description = "Decafained Coffee";
        return _this;
    }
    Decaf.prototype.cost = function () {
        return 1.05;
    };
    return Decaf;
}(Beverage));
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = "House blend coffee";
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return 1.11;
    };
    return HouseBlend;
}(Beverage));
// Concrete Decorators
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Mocha.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Mocha";
    };
    Mocha.prototype.cost = function () {
        return this.beverage.cost() + 0.20;
    };
    return Mocha;
}(CondimentDecorator));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Steamed Milk";
    };
    Milk.prototype.cost = function () {
        return this.beverage.cost() + 0.10;
    };
    return Milk;
}(CondimentDecorator));
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Soy";
    };
    Soy.prototype.cost = function () {
        return this.beverage.cost() + 0.30;
    };
    return Soy;
}(CondimentDecorator));
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Whip";
    };
    Whip.prototype.cost = function () {
        return this.beverage.cost() + 0.10;
    };
    return Whip;
}(CondimentDecorator));
// ORDER COFFEE
// plain beverage no additions
var beverage = new Espresso();
console.log(beverage.getDescription() + " $" + beverage.cost());
// decorated beverage
var beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());
var beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " $" + beverage3.cost());
