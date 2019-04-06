let EventEmitter = require('events');
let eventEmitter = new EventEmitter();


// Example 1: Simple Event
eventEmitter.on('TriggerEvent', ()=> {
    console.log('Event was triggered');
});

eventEmitter.emit('TriggerEvent');


// Example 2: Event with arguments
eventEmitter.on('TriggerEventWithArgs', (num1, num2)=> {
    console.log(num1 + num2);
});

eventEmitter.emit('TriggerEventWithArgs', 2, 3);


// Example 3: Class extend Event Emitter
class Person extends EventEmitter {

    constructor(name) {
        super();
        this._personName = name;
    }

    get name() {
        return this._personName;
    }
}

let person = new Person('Praba');
person.on('name', () => {
    console.log(person.name);
});

person.emit('name');

