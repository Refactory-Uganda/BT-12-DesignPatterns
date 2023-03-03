//Implementation
interface IElectricalEquipment {
    powerOn(): void
    powerOff(): void
}

//Abstraction
abstract class Switch {
    protected equipment: IElectricalEquipment
    abstract On():void
    abstract Off():void
}

//Concrete Implementations
class Fan implements IElectricalEquipment {

    powerOn():void {
        console.log('Fan is on...')
    }

    powerOff(): void {
        console.log('Fan is off...')
    }
}

class Light implements IElectricalEquipment {

    powerOn(): void {
        console.log('Light is on...')
    }
    powerOff(): void {
        console.log('Light is off...')
    }
}

//Refined Abstractions
class FancySwitch extends Switch {

    setEquipment(equipment: IElectricalEquipment) {
        this.equipment = equipment
    }

    On(): void {
        console.log('Turning on the equipment with a fancy switch')
        this.equipment.powerOn()
    }

    Off(): void {
        console.log('Turning off the equipment with a fancy switch')
        this.equipment.powerOff()
    }

    voiceControl(voiceSignal: string): void {
        if(voiceSignal == 'on') {
            console.log('Turning on with a voice signal')
            this.equipment.powerOn()
        } else {
            console.log('Turning off with a voice signal')
            this.equipment.powerOff()
        }
    }
}


class NormalSwitch extends Switch {

    setEquipment(equipment: IElectricalEquipment) {
        this.equipment = equipment
    }

    On(): void {
        console.log('Turning on the equipment with a normal switch')
        this.equipment.powerOn()
    }

    Off(): void {
        console.log('Turning off the equipment with normal switch')
        this.equipment.powerOff()
    }
}

class RemoteSwitch extends Switch {

    setEquipment(equipment: IElectricalEquipment) {
        this.equipment = equipment
    }

    On(): void {
        console.log('Turning on the equipment with a remote switch')
        this.equipment.powerOn()
    }

    Off(): void {
        console.log('Turning off the equipment with a remote switch')
        this.equipment.powerOff()
    }

    wirelessControl(wirelessSignal: string): void {
        if(wirelessSignal == 'on') {
            console.log('Turning on with a wireless signal')
            this.equipment.powerOn()
        } else {
            console.log('Turning off with a wireless signal')
            this.equipment.powerOff()
        }
    }
}


//Client
(function(){
    let electricalEquipment: IElectricalEquipment;
    electricalEquipment = new Fan()

    let fancySwitch = new FancySwitch()
    let normalSwitch = new NormalSwitch()
    let remoteSwitch = new RemoteSwitch()

    fancySwitch.setEquipment(electricalEquipment)
    fancySwitch.On()
    fancySwitch.Off()
    fancySwitch.voiceControl('on')

    console.log('*************** same switch different device ****************')
    electricalEquipment = new Light()
    fancySwitch.setEquipment(electricalEquipment)
    fancySwitch.On()
    fancySwitch.Off()

    console.log('*****************************')

    normalSwitch.setEquipment(electricalEquipment)
    normalSwitch.On()

    console.log('*******************************')
    electricalEquipment = new Fan()
    remoteSwitch.setEquipment(electricalEquipment)
    remoteSwitch.Off()
    remoteSwitch.wirelessControl('on')
})();