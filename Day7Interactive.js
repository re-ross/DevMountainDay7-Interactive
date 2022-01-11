let person = {
  firstName: "Ryan",
  lastName: "Ross",
  age: 31,
  prop: "just a placeholder",
};

const targetProperty = "age";

// console.log(person.firstName.toUpperCase())
// console.log(person[targetProperty].toUpperCase())

// -------------------------------
// looping through objects

for (let key in person) {
  console.log(person[key]);
}

//-----------------------------------
//updating objects
person.age = 32;
person.hairColor = "black";
delete person.pop;
console.log(person);
//----------------------------------
//classes

class Sport {
  constructor(name, playerCount, type) {
    this.sportName = name;
    this.players = playerCount;
    this.type = type;

    this.isFun = true;
  }
  doTheThing() {
    console.log(this);
  }
  updatePlayerCount(newCount) {
    this.players = newCount;
    return `The new player count is ${this.players}`;
  }
}

const tennis = new Sport("tennis", 2, "outdoor");
const soccer = new Sport("soccer", 22, "outdoor");

tennis.doTheThing();
console.log(soccer.updatePlayerCount(40));
console.log(soccer);
