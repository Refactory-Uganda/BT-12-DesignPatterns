// News Letter Subscription
// Observable = Publisher
// Observer = Subscriber
// Observable
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    // Methods
    Publisher.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
        return true;
    };
    Publisher.prototype.unsubscribe = function (subscriber) {
        // ??????????
    };
    Publisher.prototype.notify = function () {
        // Method1
        // for (let i = 0; i < this.subscribers.length; i++){
        //     this.subscribers[i].update(this.news);
        // }
        var _this = this;
        // Method2
        // for(let subscriber of this.subscribers){
        //     subscriber.update(this.news);
        // }
        // Method3
        this.subscribers.forEach(function (subscriber) { return subscriber.update(_this.news); });
    };
    Publisher.prototype.trigger = function () {
        this.notify();
    };
    Publisher.prototype.publish = function (news) {
        this.news = news;
        this.trigger();
    };
    return Publisher;
}());
var NewVisionSubscriber = /** @class */ (function () {
    function NewVisionSubscriber(name) {
        this.name = name;
    }
    NewVisionSubscriber.prototype.update = function (news) {
        console.log("================================================");
        console.log(this.name);
        console.log(news);
    };
    return NewVisionSubscriber;
}());
var newVision = new Publisher();
var subscriber1 = new NewVisionSubscriber('Akuti Emmanuel');
var subscriber2 = new NewVisionSubscriber('Zennah');
var subscriber3 = new NewVisionSubscriber('Kayanja John');
var subscriber4 = new NewVisionSubscriber('Fauzia');
var subscriber5 = new NewVisionSubscriber('Gerald');
var subscriber6 = new NewVisionSubscriber('Alinda');
var subscriber7 = new NewVisionSubscriber('Heron');
newVision.subscribe(subscriber1);
newVision.subscribe(subscriber2);
newVision.subscribe(subscriber3);
newVision.subscribe(subscriber4);
newVision.subscribe(subscriber5);
newVision.subscribe(subscriber6);
newVision.subscribe(subscriber7);
var volume1 = {
    headline: 'Bootcamp Trending on Twitter!',
    body: 'Software engineerr solve Uganda\'s biggest challenges......',
    author: 'Refactory bootcamp 12',
    date: '28th/February/2023'
};
newVision.publish(volume1);
var volume2 = {
    headline: 'Aba Bootcamp beliisa nkuuli ku Twitter!',
    body: 'Ba yinginiya ba Software engineer beyamye  okumalawo ebizibu mu Uganda......',
    author: 'Refactory bootcamp 12',
    date: '28th/February/2023'
};
newVision.publish(volume2);
