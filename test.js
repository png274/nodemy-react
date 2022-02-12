let wheel = 0
class Car {

  capacity = 0;
  wheel = 4;
  constructor(capacity) {
    console.log('start ')
    this.capacity = capacity;
  }
  getName () {
    return 'BMW';
  }
  setWheel () {
    this.wheel++;
    console.log('This', this.wheel);
    console.log(this.getName());
  }
}

const car = new Car(4);
console.log(car);

// car.setWheel();

// const print = () => {
//   console.log('outer:', this);
//   // this.setTimeout(function () {
//   //   console.log('Print after 2s:', 'haha');
//   // }, 2000);
// }

// print();