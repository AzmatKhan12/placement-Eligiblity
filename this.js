// "this " inside a global scope 
/*
this.table = 'window table';
this.garage = {
    table: 'garage tabel'
}
console.log(this);
console.log(this.garage);*/

// "this " inside a object.
/*
this.table = 'window table';
this.garage = {
    table: 'garage tabel'
}

let johnsRoom = {
    table: 'johns table'
}
console.log(johnsRoom.table);*/

// "this " inside a method.
/*
this.table = 'window table'

this.garage = {
    table: 'garage table',
    cleanTable() {
        console.log(`cleaning ${this.table}`)
    }
}

let johnsRoom = {
    table: 'johns table',
    cleanTable() {
        console.log(`cleaning ${this.table}`);
    }

}
johnsRoom.cleanTable();
this.garage.cleanTable();*/

// "this" inside a function
/*
this.table = 'window table'
const cleanTable = function (soap) {
    console.log(`cleaning ${this.table}s ${soap}`)
}

this.garage = {
    table: 'garage table'

}

let johnsRoom = {
    table: 'johns table'
}
cleanTable.call(this, 'use some soap')
cleanTable.call(this.garage, 'use some chemical')
cleanTable.call(johnsRoom, 'use some water')*/

// function inside the function
/*
this.table = 'window table'
const cleanTable = function (soap) {
    const innerFunction = (soap) => {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
    innerFunction(soap);

}

this.garage = {
    table: 'garage table'

}

let johnsRoom = {
    table: 'johns table'
}
cleanTable.call(this, 'use some soap')
cleanTable.call(this.garage, 'use some chemical')
cleanTable.call(johnsRoom, 'use some water')*/

//"this"inside the constructor
/*
this.table = 'window table'
const cleanTable = function (soap) {
    console.log(`cleaning ${this.table}s ${soap}`)
}
let createRoom = function (name) {    // constructor 
    this.table = `${name}s table`;
};
createRoom.prototype.cleanTable = function (soap) {
    console.log(`cleanig ${this.table} using ${soap}`);
};
const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('jhon');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some liquid'); */

// "this" inssie the class

/*
class createRoom {
    constructor(name) {
        this.table = `${name}s table`;
    }
    cleanTable(soap) {
        console.log(`cleanig ${this.table} using  ${soap}`);
    }
}
const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('jhon');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some liquid');*/

// fat Arrow function or Arrow function
// signle Argument
let sqaure = a => a * a;
console.log(sqaure(4));

// multiple Argument
let multiply = (a, b) => { return a * b }
console.log(multiply(4, 10))

//Regular function passing N no. of argument without taking parameter 
let x = function () {
    console.log(arguments[0])
}
x(1, 2, 3);

//Arrow function passing N no. of argument without taking parameter 
let y = (...n) => {
    console.log(n[0])
}
y(2, 4, 6)








