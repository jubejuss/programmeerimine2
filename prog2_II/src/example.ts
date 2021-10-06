const myFunction = (value: number): number => {
    const sum = value + 10;
    return sum;
};

const myObject = {
    myFunction,
};

const person = {
    firstName: 'Martti',
    lastName: 'Raavel',
};
const variable3: number;

const variable1 = 'skjdskjds';
let variable2 = 1;

variable2 = 'sas';

myFunction(variable1);
// Object.freeze(person);

const person1 = { ...person };

person.firstName = 'Kaur';

console.log(person);
console.log(person1);
console.log(person);

//objekt koosneb alati key ja value paarist
//või mitmest sellisest

// küsi arrauy matemaatikat