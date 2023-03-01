// Abstract Component
abstract class Beverage {
    description: string;

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;
}


// Abstract Decorator

abstract class CondimentDecorator extends Beverage {

    beverage: Beverage;

    abstract getDescription(): string;
    
}


// Concrete Components

class Espresso extends Beverage {
    constructor () {
        super();
        this.description = "Espresso";
    }

    cost(): number {
        return 1.99;
    }
}


class DarkRoast extends Beverage {
    constructor () {
        super();
        this.description = "Dark Roast Coffee";
    }

    cost(): number {
        return 0.99;
    }
}

class Decaf extends Beverage {
    constructor () {
        super();
        this.description = "Decafained Coffee";
    }

    cost(): number {
        return 1.05;
    }
}

class HouseBlend extends Beverage {
    constructor () {
        super();
        this.description = "House blend coffee";
    }

    cost(): number {
        return 1.11;
    }
}


// Concrete Decorators
class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return this.beverage.cost() + 0.20;
    }
}

class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Steamed Milk";
    }

    cost(): number {
        return this.beverage.cost() + 0.10;
    }
}

class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number {
        return this.beverage.cost() + 0.30;
    }
}

class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return this.beverage.cost() + 0.10;
    }
}

// ORDER COFFEE

// plain beverage no additions
let beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

// decorated beverage
let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

let beverage3: Beverage = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);