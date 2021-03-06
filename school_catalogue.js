class School {
  constructor (name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

// School/ getters and setters

 get name () {
  return this._name;
}

get level () {
  return this._level;
}

get numberOfStudents () {
  return this._numberOfStudents;
}

  
set numberOfStudents (numberOfStudentsInd) {
  if (typeof numberOfStudentsInd === 'number') {
     this._numberOfStudents === numberOfStudentsInd;
  } else {
    console.log ('Invalid input: numberOfStudents must be set to a Number.');
return 'Invalid input: numberOfStudents must be set to a Number.';
  }
   
}

//School / methods

   quickFacts (name, numberOfStudents, level ) {
    console.log (`About school: ${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

 static pickSubstituteTeacher (substituteTeachers) {
   let randomTeacher = Math.floor(Math.random()*(substituteTeachers.length-1));
return substituteTeachers[randomTeacher];
 }
}


//					Primary class

class primarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super (name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

// getter

get pickupPolicy () {
  return this._pickupPolicy;
}
	}

//			Middle school	

class middleSchool extends School {
  constructor (name, level, numberOfStudents) {
    super (name, 'middle', numberOfStudents);
  }
}

//			High school

class highSchool extends School {
  constructor (name, numberOfStudents, sportTeams) {
    super (name, 'high', numberOfStudents);
    this._sportTeams = sportTeams;
  }
  // getter
  
  get sportTeams () {
    return this._sportTeams;
  }
}

// Adding items

const lorraineHansbury = new primarySchool ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');


console.log(lorraineHansbury);

lorraineHansbury.quickFacts();

const StMarry = new highSchool ('St. Marry Academy', 150, 'Eagles');

console.log (StMarry);



console.log ('The substitute teacher for Monday class is ' + School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new highSchool ('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith);
console.log(alSmith.sportTeams);



