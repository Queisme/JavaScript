const myObject = {
  property: 'Value!',
  otherProperty: 77,
  'obnoxious property': function () {
    //do stuff
  },
};

// dot notation
myObject.property; // 'Value!'

// bracket notation
myObject['obnoxious property']; //[Function]

// Dot notation is cleaner & usually preferred

const variable = 'property';
myObject.variable; // 'undefined' because it's looking for a property named 'variable' in our object
myObject[variable]; // is equivalent to myObject['property'] and returns 'Value!'

// example one

const playerOneName = 'tim';
const playerTwoName = 'jenn';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

// example two

const playerOne = {
  name: 'tim',
  marker: 'X',
};

const playerTwo = {
  name: 'jenn',
  marker: 'O',
};

// to print player name using ex 2 is easier.

function printName(player) {
  console.log(player.name);
}

printName(playerOne);
printName(playerTwo);

// in ex 1 you'd have to console.log() everything.

console.log(playerOneName);
console.log(playerTwoName);

// Object Constructors

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  // you can add functions just like with objects created using Object Literal method
  this.sayName = function () {
    console.log(this.name);
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('chris', 'O');

player1.sayName(); // steve
player2.sayName(); // chris

Object.getPrototypeOf(player1) === Player.prototype;
Object.getPrototypeOf(player2) === Player.prototype;

// you use by calling the function with the keyword 'new'

const player = new Player('Que', 'X');
console.log(player.name); // Que

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(this.title, this.author, this.pages, this.read);
  };
}

const theHobbit = new Book(
  'The Hobbit',
  'by J.R.R. Tolkien',
  '295',
  'not read yet'
);

theHobbit.info();

//console.log(theHobbit.__proto__);
Object.getPrototypeOf(theHobbit) === Book.prototype;
