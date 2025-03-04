class BottleMaker {
  private color: string = "black"; // accessible in just inside a function
  constructor(public name: string) {} // name accessible in anywhere
}

class MetaBottleMaker extends BottleMaker {
  constructor(name: string) {
    super(name);
  }

  getValue() {
    console.log(this.name);
  }
}

const b1 = new MetaBottleMaker("Coke");
b1.getValue();
