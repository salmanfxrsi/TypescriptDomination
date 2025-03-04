"use strict";
class BottleMaker {
    constructor(name) {
        this.name = name;
        this.color = "black"; // accessible in just inside a function
    } // name accessible in anywhere
}
class MetaBottleMaker extends BottleMaker {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
const b1 = new MetaBottleMaker("Coke");
b1.getValue();
