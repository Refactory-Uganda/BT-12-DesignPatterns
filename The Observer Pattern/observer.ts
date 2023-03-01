// News Letter Subscription
    // Observable = Publisher
    // Observer = Subscriber

// State
interface News{
    headline: string;
    body: string;
    author: string;
    date: string;
}

// Observer
interface Subscriber{
    update(News:any):void;
}

// Observable
class Publisher{
    // Data
    private news:News;
    private subscribers:Array<Subscriber> = [];

    // Methods
    subscribe(subscriber:Subscriber):boolean{
        this.subscribers.push(subscriber);
        return true
    }

    unsubscribe(subscriber:Subscriber){
        // ??????????
    }

    private notify(){
        // Method1
            // for (let i = 0; i < this.subscribers.length; i++){
            //     this.subscribers[i].update(this.news);
            // }
        
        // Method2
            // for(let subscriber of this.subscribers){
            //     subscriber.update(this.news);
            // }

        // Method3
            this.subscribers.forEach(subscriber => subscriber.update(this.news));

    }

    private trigger(){
        this.notify();
    }

    publish(news:News){
        this.news = news;
        this.trigger()
    }
}


class NewVisionSubscriber implements Subscriber{
    private name: string;

    constructor(name:string){
        this.name = name;
    }

    update(news:News): void {
        console.log("================================================");
        console.log(this.name);
        console.log(news);
    }
}

let newVision = new Publisher();

let subscriber1 = new NewVisionSubscriber('Akuti Emmanuel');
let subscriber2 = new NewVisionSubscriber('Zennah');
let subscriber3 = new NewVisionSubscriber('Kayanja John');
let subscriber4 = new NewVisionSubscriber('Fauzia');
let subscriber5 = new NewVisionSubscriber('Gerald');
let subscriber6 = new NewVisionSubscriber('Alinda');
let subscriber7 = new NewVisionSubscriber('Heron');

newVision.subscribe(subscriber1);
newVision.subscribe(subscriber2);
newVision.subscribe(subscriber3);
newVision.subscribe(subscriber4);
newVision.subscribe(subscriber5);
newVision.subscribe(subscriber6);
newVision.subscribe(subscriber7);

let volume1 = {
    headline: 'Bootcamp Trending on Twitter!',
    body: 'Software engineerr solve Uganda\'s biggest challenges......',
    author: 'Refactory bootcamp 12',
    date: '28th/February/2023'
}

newVision.publish(volume1);


let volume2 = {
    headline: 'Aba Bootcamp beliisa nkuuli ku Twitter!',
    body: 'Ba yinginiya ba Software engineer beyamye  okumalawo ebizibu mu Uganda......',
    author: 'Refactory bootcamp 12',
    date: '28th/February/2023'
}

newVision.publish(volume2);
