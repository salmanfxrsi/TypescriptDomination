// Protected: Access in derived (child) class
// Private: Not access in derived (child) class

class BottleMaker {
  protected name = "coke";
}

class MetaBottleMaker extends BottleMaker {
  public material = "metal";
  changeName() {
    this.name = "alex";
    console.log(this.name);
  }
}

let b1 = new MetaBottleMaker();
b1.changeName();
