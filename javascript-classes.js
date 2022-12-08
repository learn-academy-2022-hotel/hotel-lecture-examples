//  JAVASCRIPT CLASSES 12.8.22

// Classes are recipes for making objects.  Data and action

const car = {
  make: "GMC",
  model: "Sierra",
  year: 2010,
  color: "Blue"
}
// console.log(car)
// --> { make: 'GMC', model: 'Sierra', year: 2010, color: 'Blue' }
//  class keyword to declare class
//  Pascal Case - each word in name is capitalized
// class + NameOfClass + curly brackets


// class Car {
//   constructor() {
//     this.make = "GMC",
//     this.model = "Sierra",
//     this.color = "Blue",
//     this.year = 2010
//   }
// }

// let torinTruck = new Car()
// console.log(torinTruck)
// --> Car { make: 'GMC', model: 'Sierra', color: 'Blue', year: 2010 }

// instantiation - creating an instance of a class (an object)

// class Car {
//   constructor(makeString, modelString, colorString, yearNumber) {
//     this.make = makeString,
//     this.model = modelString,
//     this.color = colorString,
//     this.year = yearNumber
//   }
// }

// let christianCar = new Car("Honda", "Accord", "Blue", 2017)
// console.log(christianCar)
// --> Car { make: 'Honda', model: 'Accord', color: 'Blue', year: 2017 }

// let myCar = new Car("Subaru", "", 2016, "Crosstrek")
// console.log(myCar)
// --> Car { make: 'Subaru', model: 'Blue', color: 2016, year: 'Crosstrek' }

// Order is important!
// to update a particular key-value pair use dot notation
// myCar.model = "Crosstrek"
// console.log(myCar)


// adding Custom methods

// class Car {
//   constructor(makeString, modelString, colorString, yearNumber) {
//     this.make = makeString,
//     this.model = modelString,
//     this.color = colorString,
//     this.year = yearNumber
//   }
//   carBoasting() {
//     return `My ${this.make} ${this.model} is super cool! `
//   }
// }

// let neysDreamCar = new Car("Ford", "GT500", "Black", 2023)
// console.log(neysDreamCar)
// --> Car { make: 'Ford', model: 'GT500', color: 'Black', year: 2023 }

// console.log("****", neysDreamCar.carBoasting())
// --> **** My Ford GT500 is super cool! 

class Car {
  constructor(makeString, modelString, colorString, yearNumber, electricBoolean) {
    this.make = makeString,
    this.model = modelString,
    this.color = colorString,
    this.year = yearNumber
    this.doors = 4
    this.isElectric = electricBoolean
    this.isOperational = true  // default value
  }
  carBoasting() {
    return `My ${this.make} ${this.model} is super cool! `
  }
  wentElectric() {
    this.isElectric = true
  }
  brokeDown() {
    this.isOperational = false
  }
}

let neysDreamCar = new Car("Ford", "GT500", "Black", 2023)
// console.log(neysDreamCar)

//-->
//  Car {
//   make: 'Ford',
//   model: 'GT500',
//   color: 'Black',
//   year: 2023,
//   isElectric: false
// }

neysDreamCar.wentElectric()
console.log(neysDreamCar)
// --> 
// Car {
//   make: 'Ford',
//   model: 'GT500',
//   color: 'Black',
//   year: 2023,
//   isElectric: true
// }

// after adding is operational: 

// Car {
//   make: 'Ford',
//   model: 'GT500',
//   color: 'Black',
//   year: 2023,
//   isElectric: true,
//   isOperational: true
// }

neysDreamCar.brokeDown()
console.log(neysDreamCar)

// --> 
// Car {
//   make: 'Ford',
//   model: 'GT500',
//   color: 'Black',
//   year: 2023,
//   isElectric: true,
//   isOperational: false
// }

let newCar = new Car("Porche", "Boxter", "Silver", 2020, false)
console.log(newCar)
// Car {
//   make: 'Porche',
//   model: 'Boxter',
//   color: 'Silver',
//   year: 2020,
//   isElectric: false,
//   isOperational: true
// }

// newCar.wentElectric().isOperational()  this doesn't work (can't chain these methods)

let anotherCar = new Car("Honda", "Accord", "Black", 2021, false)
console.log("^^^^",anotherCar)

// ^^^^ Car {
//   make: 'Honda',
//   model: 'Accord',
//   color: 'Black',
//   year: 2021,
//   isElectric: false,
//   isOperational: true,
//   doors: 4
// }

// You do not need to pass argument for default values in constructor

// ^^^^ Car {
//   make: 'Honda',
//   model: 'Accord',
//   color: 'Black',
//   year: 2021,
//   doors: 4,
//   isElectric: false,
// }

