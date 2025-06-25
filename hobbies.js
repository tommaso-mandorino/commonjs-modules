function getHobbies(hobbyOne, hobbyTwo, hobbyThree) {

    const functionArguments = Array.from(arguments);

    const hobbies = [];

    functionArguments.forEach(hobby => {

        hobbies.push(hobby);

    });

    return hobbies;

}

module.exports = getHobbies;