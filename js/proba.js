// class Car {
//   // Write code under this line
//   static getSpecs(car) {
//     console.log(car);
//     const keys = Object.keys(car);
//     console.log(keys);
//     const x = " ";
//     for (const key of keys) {
//       console.log(`${key}: ${car[key]}`);
//     }
//     return `'maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}'`;
//   }
//   constructor(car) {
//     this.maxSpeed = car.maxSpeed;
//     this.speed = 0;

//     this.isOn = false;
//     this.distance = 0;
//     this._price = car.price;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(value) {
//     this._price = value;
//   }
//   turnOn() {
//     this.isOn = true;
//   }
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   accelerate(value) {
//     this.speed += value;
//     if (this.speed > this.maxSpeed) {
//       this.speed = this.maxSpeed;
//     }
//     return this.speed;
//   }
//   decelerate(value) {
//     this.speed -= value;
//     if (this.speed < 0) {
//       this.speed = 0;
//     }
//     return this.speed;
//   }
//   drive(hours) {
//     this.distance += this.speed * hours;
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
// Write code under this line

const users = [
 {
 id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
 name: 'Moore Hensley',
 email: 'moorehensley@indexia.com',
 eyeColor: 'blue',
 friends: [ 'Sharron Pace' ],
 isActive: false,
 balance: 2811,
 skills: [ 'ipsum', 'lorem' ],
 gender: 'male',
 age: 37
 },
 {
 id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
 name: 'Sharlene Bush',
 email: 'sharlenebush@tubesys.com',
 eyeColor: 'blue',
 friends: [ 'Briana Decker', 'Sharron Pace' ],
 isActive: true,
 balance: 3821,
 skills: [ 'tempor', 'mollit', 'commodo', 'veniam', 'laborum' ],
 gender: 'female',
 age: 34
 },
 {
 id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
 name: 'Ross Vazquez',
 email: 'rossvazquez@xinware.com',
 eyeColor: 'green',
 friends: [ 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner' ],
 isActive: false,
 balance: 3793,
 skills: [ 'nulla', 'anim', 'proident', 'ipsum', 'elit' ],
 gender: 'male',
 age: 24
 },
 {
 id: '249b6175-5c30-44c6-b154-f120923736f5',
 name: 'Elma Head',
 email: 'elmahead@omatom.com',
 eyeColor: 'green',
 friends: [ 'Goldie Gentry', 'Aisha Tran' ],
 isActive: true,
 balance: 2278,
 skills: [ 'adipisicing', 'irure', 'velit' ],
 gender: 'female',
 age: 21
 },
 {
 id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
 name: 'Carey Barr',
 email: 'careybarr@nurali.com',
 eyeColor: 'blue',
 friends: [ 'Jordan Sampson', 'Eddie Strong' ],
 isActive: true,
 balance: 3951,
 skills: [ 'ex', 'culpa', 'nostrud' ],
 gender: 'male',
 age: 27
 },
 {
 id: '150b00fb-dd82-427d-9faf-2879ea87c695',
 name: 'Blackburn Dotson',
 email: 'blackburndotson@furnigeer.com',
 eyeColor: 'brown',
 friends: [ 'Jacklyn Lucas', 'Linda Chapman' ],
 isActive: false,
 balance: 1498,
 skills: [ 'non', 'amet', 'ipsum' ],
 gender: 'male',
 age: 38
 },
 {
 id: 'e1bf46ab-7168-491e-925e-f01e21394812',
 name: 'Sheree Anthony',
 email: 'shereeanthony@kog.com',
 eyeColor: 'brown',
 friends: [ 'Goldie Gentry', 'Briana Decker' ],
 isActive: true,
 balance: 2764,
 skills: [ 'lorem', 'veniam', 'culpa' ],
 gender: 'female',
 age: 39
 }
];
const getUserNames = array => array.map(({name})=> name);

console.log(getUserNames(users));
 
const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor})=>eyeColor===color);

console.log(getUsersWithEyeColor(users, 'blue'));
 
const getUsersWithGender = (array, gender) => array.filter(user=>user.gender===gender).map(({name})=> name);

 console.log(getUsersWithGender(users, 'male'));
const getInactiveUsers = array  => array.filter(({isActive})=>!isActive);

console.log(getInactiveUsers(users));

const getUserWithEmail = (array, mail) => array.find(({email})=> email===mail);

console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
const getUsersWithAge = (array, min, max) => array
 .filter(({age}) => age>min&&age<max)   
 .map(({name, email}) => ({name, email}));  

console.log(getUsersWithAge(users, 20, 30));
 
const calculateTotalBalance = array => array.reduce((acc, {balance})=> acc+balance,0)

console.log(calculateTotalBalance(users)); 
 
const getUsersWithFriend = (array, friendName) => array.filter(({friends}) => friends.includes(friendName)).map(({name})=>name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
 

const getNamesSortedByFriendsCount = (array) => [...array].sort((a,b)=>a.friends.length-b.friends.length).map(({name})=> name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

// const getSortedUniqueSkills = (array) => array.reduce((acc, {skills}) => {
//   acc.push(...skills);
//   return acc
//   }, []).sort().filter((skill, i, skills) => skills[i]!==skills[i+1]
// )

const getSortedUniqueSkills = (array) => array.map(({skills}) => skills).reduce((acc, skills)=>  acc.concat(skills), []).sort().filter((skill, i, skills) => skills[i]!==skills[i+1])
  

 console.log(getSortedUniqueSkills(users));

// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ] 



// Write code under this line
// const getUsersWithEyeColor = (array, color) => array.map(({eyeColor})=>eyeColor);

// console.log(getUsersWithEyeColor(users, 'blue'));
/* [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  }
] */
