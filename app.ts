// Optional Properties (?)

class User {
  constructor(public name: string, public age?: number) {}
}

new User("Alex");

// Parameter Properties

class CarMaker {
    constructor(public name: string, public brand: string ) {}
}
