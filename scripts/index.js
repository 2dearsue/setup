const stringToNumber = (string) => {
  return parseInt(string);
}

const reverse = phrase => {
  if (typeof phrase !== 'string') {
    return false;
  }

  return phrase.split('').reverse().join('');
}

const objectFkt = person => {
  return person;
}


// Exercise with DCI constructor
class DCI_Relative {
  constructor (role)
  {
    this.role = role;
  }
}

class Trainer extends DCI_Relative {
  constructor (firstName, lastName) {
    super('Trainer');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends DCI_Relative {
  constructor (firstName, lastName) {
    super('Student');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let Kostas = new Trainer ('Kostas', 'Diakogiannis');
let Milad = new Student ('Milad', 'Khoshkaran');


// Exercise with DCI constructor
class Player {
  constructor(team) {
    this.team = team
  }

  // no let/const/var in classes
  // methods are functions attached to opbjects

  getGoalsRatio() {
    return this.goals / this.caps;
  }
}

class HSV_Player extends Player {
  constructor(position) {
    super('HSV');
    this.position = position
  }
}

class HSV_Defender extends HSV_Player {
  constructor(firstName, lastName, caps, goals) {
    super('Defender');
    this.firstName = firstName,
    this.lastName = lastName,
    this.caps = caps,
    this.goals = goals
  }
}

const Kyriakos = new HSV_Defender('Kyriakos', 'Papadopoulos', 90, 9)

module.exports = {
  stringToNumber:stringToNumber,
  reverse:reverse,
  objectFkt:objectFkt,
  kostas:Kostas,
  milad:Milad,
  kyriakos: Kyriakos
}
