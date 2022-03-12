// let wheel = 0
// class Car {

//   capacity = 0;
//   wheel = 4;
//   constructor(capacity) {
//     console.log('start ')
//     this.capacity = capacity;
//   }
//   getName () {
//     return 'BMW';
//   }
//   setWheel () {
//     this.wheel++;
//     console.log('This', this.wheel);
//     console.log(this.getName());
//   }
// }

// const car = new Car(4);
// console.log(car);

// car.setWheel();

// const print = () => {
//   console.log('outer:', this);
//   // this.setTimeout(function () {
//   //   console.log('Print after 2s:', 'haha');
//   // }, 2000);
// }

// print();


// const promise = new Promise((resolve, reject) => {
//   resolve({data: 1, status: 'ok'});
//   // reject({message: 'cannot reseolve promise', code: 400});
// });

// async function F() {
//   try {
//     const data = await promise;
//     console.log(data);
//     console.log(2);
//   } catch (error) {
//     console.log(error);
//   }
// }
// F();

// const F = () => {
//   return () => {
//     return () => {
//       return 3
//     };
//   };
// }

// let result = F();

// console.log(result()())

// import axios from 'axios';
// // const axios = require('axios').default;

// axios.post('http://localhost:3000/user/register', {
//   "username": "png007",
//   "password": "Abcd@1234"
// }).then(data => {
//   console.log(data.data);
// }).catch(err => {
//   console.log(err.message);
//   console.log(err.body);
// })

const state = {
  username: 'ABC'
};

const reducer = (state, update) => {
  state = { username: 'ABC' };
  update = { username: 'ABCDERTY', fullname: 'Nalksdfj', age: 12 }

  return { ...state, ...update };
}