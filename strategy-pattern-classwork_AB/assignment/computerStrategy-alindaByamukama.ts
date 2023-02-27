// S.O.L.I.D

// S -> Sinlge Responsbility Principle (SRP)
    // A class (module) should have only one reason for change

// O -> Open-Closed Principle (OCP)
    // A class (module) should be open for extension, but closed for modification

// L -> Liskov Subsititution Principle (LSP)
    // If S is a subtype of T, then objects of T should be replaceable with objects of S.

// I -> Interface Segregation Principle (ISP)
    // no class should be forced to depend on methods it does not use

// D -> Dependency Inversion Principle (DIP)
    // High level modules should not depend on low level modules, 
    // but instead both should depend on an interface.


// DEVELOPING A COMPUTER SYSTEM

/*
    MVP1
    What a computer should do
    - Store information
    - Input data
    - boot
    - output information
    - process data

    MVP2:
    - Add support for foldable computers
        - Add fold behavior
    
    MVP3:
    - Input data using more than one methods
        - Mouse
        - Keyboard
        - ScreenTouch
        - USB

    MVP4:
    - Output data using more than one methods
        - Monitor
        - Projection
        - Mirroring
        - Speaker
        - Printing

    MVP5:
    - Process data using more than one methods
        - AMD Process
        - INTEL Processor
        - INVIDIA Processor

    MVP6:
    - Storing data using more than one methods
        - RAM
        - ROM
        - External SSD
        - External HSD
        - Internal Memory

*/

// Interface
interface IComputer{
    boot():boolean;
    input(data:any):void;
    store(data:any):void;
    retrieve(identifier:string):any;
    process(data:any):any;
    output(data: any): any;
    authentication(credentials: any): boolean;
}

interface AuthStrategy {
    authentication(credentials: any): boolean;
}

interface Foldable{
    fold():void;
}

interface InputDevice {
    input(data:any):void;
}

interface OutputDevice{
    output(data:any):void;
}

// Class Definitions
// Authentication implementations
class BasicAuth implements AuthStrategy{
    authentication(credentials: any): boolean {
        console.log(`Basic Authentication credentials: ${credentials}`)
        return true
    }
}

// universally unique identifiers are 128 bit numbers, composed of 16 octets and represented as 32 base-16 characters, that can be used to identify information across a computer system. 
class UUIDAuth implements AuthStrategy{
    authentication(credentials: any): boolean {
        console.log(`UUID Authentication credentials: ${credentials}`)
        return true
    }
    
}

class SocialAuth implements AuthStrategy{
    authentication(credentials: any): boolean {
        console.log(`Social Authentication credentials: ${credentials}`)
        return true
    }
    
}

// JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.
class JWTAuth implements AuthStrategy{
    authentication(credentials: any): boolean {
        console.log(`JWT Authentication credentials: ${credentials}`)
        return true
    }
    
}
// Input Devices
class Mouse implements InputDevice{
    input(data: any): void {
        console.log(`I am a mouse and i am inputing data: ${data}`);    
    }
}

class Keyboard implements InputDevice{
    input(data: any): void {
        console.log(`I am a keyboard and i am inputing data: ${data}`);    
    }
}

class ScreenTouch implements InputDevice{
    input(data: any): void {
        console.log(`I am a Touch Screen Device and i am inputing data: ${data}`);    
    }
}

class USB implements InputDevice{
    input(data: any): void {
        console.log(`I am a USB Device and i am inputing data: ${data}`);    
    }
}

// Output Devices
class Monitor implements OutputDevice{
    output(data: any): void{
        console.log(`I am a monitor and I am outputing data: ${data}`);
    }
}

class Projector implements OutputDevice{
    output(data: any): void{
        console.log(`I am a projector and I am outputing data: ${data}`);
    }
}

class Speaker implements OutputDevice{
    output(data: any): void{
        console.log(`I am a speaker and I am outputing data: ${data}`);
    }
}

class Printer implements OutputDevice{
    output(data: any): void{
        console.log(`I am a printer and I am outputing data: ${data}`);
    }
}

// Generic Computer
class Computer implements IComputer{
    // Attributes
    private model: string;
    private serialNumber: string;
    private brand: string;
    private inputDevice:InputDevice;
    private outputDevice: OutputDevice;
    private authStrategy: AuthStrategy;
    // Methods
    constructor(model: string, serialNumber: string, brand: string, inputDevice: InputDevice, outputDevice: OutputDevice,
    authStrategy:AuthStrategy) {
        this.model = model;
        this.serialNumber = serialNumber;
        this.brand = brand;
        this.inputDevice = inputDevice;
        this.outputDevice = outputDevice;
        this.authStrategy = authStrategy;
    }

    boot(){
        console.log("Booting.....");
        return true    
    }

    authentication(credentials: any) {
        this.authStrategy.authentication(credentials);
        return true
    }

    input(data:any){
        this.inputDevice.input(data);
    }

    store(){
        console.log("Storing data.....");                
    }
    retrieve(){
        console.log("Retrieving data.....");        
    }
    process(){
        console.log("Processing data.....");
    }
    output(data:any){
        this.outputDevice.output(data);
    }

    setInputDevice(inputDevice:InputDevice){
        this.inputDevice = inputDevice;
    }

    setAuthStrategy(authStrategy: AuthStrategy) {
        this.authStrategy = authStrategy;
    }
}

// Computer extensions
// class Laptop extends Computer implements Foldable{
//     fold(): void {
//         console.log("I am folding");
//     }
// }

// class UnbootableComputer extends Computer{
//     boot(): boolean {
//         throw "Not supported!"
//     }
// }


// Testing for LSP
function testLiskov(computerArg:Computer){
    computerArg.boot();
    computerArg.authentication('credentials');
    computerArg.input('data');
    computerArg.store();
    computerArg.retrieve();
    computerArg.process();
    computerArg.output('Zenah');    
}

let computer:Computer;
computer = new Computer('XPS-13', 'DFH-BRA-BRA-BRA-1X34', 'DELL', new Mouse(), new Monitor(), new BasicAuth()); //Super

/**
 * let laptop:Computer = new Laptop('LPS-13', 'RFH-BXA-BRA-BRA-1X34', 'HP', new Keyboard(), new Projector(), new UUIDAuth()) // Subtype
 * let unbootableComputer:Computer = new UnbootableComputer('UPS-13', 'RFH-BXA-BRA-BRA-1X34', 'HP', new USB(), new Monitor(), new SocialAuth()) // Subtype
 */


computer.setAuthStrategy(new JWTAuth());
// computer.setInputDevice(new Keyboard());

testLiskov(computer)
// testLiskov(laptop)
// testLiskov(unbootableComputer)


// setters and getters






