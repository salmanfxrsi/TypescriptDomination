"use strict";
// readonly: readonly is a keyword used to make properties immutable (unchangeable) after they are initialized.
class User {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = 'Farsi'; // we cannot change it after initialize if we use readonly
    }
}
let u1 = new User('Gilman');
u1.changeName();
