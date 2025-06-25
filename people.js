const getFullName = require('./names.js');

const getHobbies = require('./hobbies.js');

function getPersonData() {

    const personData = {};

    personData.fullName = getFullName('Tommaso', 'Mandorino');
    
    personData.hobbies = getHobbies('Coding', 'Psychology', 'Nutrition');

    return personData;

}

const personData = getPersonData();

console.log(personData);