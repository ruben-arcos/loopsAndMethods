//1. Use a do...while loop to console.log the numbers from 1 to 1000.

let nums = 0;

do {
    nums = nums + 1;
    console.log(nums)
} while (nums < 1000);

for(let i = 1; i <= 1000; i++)
console.log(i)

// 2. Create an object (with keys and values) called person   with the following data:

    //     a. firstName: "Jane",
    //     b. lastName: "Doe",
    //     c. birthDate: "Jan 5, 1925",
    //     d. gender: "female"

const person = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// 3. Create a function that logs out the keys of the object using Object.keys().

console.log(Object.keys(person));

// 4. Create a function that logs out the keys and values of the object using Object.entries().

console.log(Object.entries(person));

// 5. Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {
        firstName: 'Enrique',
        lastName: 'Ramirez',
        birthDate: "Jan 30, 1994",
        gender: "male"
    },
    {
        firstName: 'Austin',
        lastName: 'Covey',
        birthDate: "Sept 12, 1994",
        gender: "male"
    },
    {
        firstName: 'Robin',
        lastName: 'Dillard',
        birthDate: "Jun 5, 1975",
        gender: "female"
    },
    {
        firstName: 'Dante',
        lastName: 'Smith',
        birthDate: "Mar 21, 2015",
        gender: "male"
    }
]

//6. Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

function oddBirth (arr) {
    for (let i of arr) {
        let oddBirthday = Number(i.birthDate.slice(-4))
        if (oddBirthday % 2 !== 0) {
            console.log(oddBirthday)
        }  
    }
}

oddBirth(arrayOfPersons)

// 7. Use .map() to map over the arrayOfPersons and console.log() their information.
arrayOfPersons.map(person => {
   console.log(person.firstName, person.lastName, person.birthDate, person.gender)
} )


//8. Use .filter() to filter the persons array and console.log only males in the array.

arrayOfPersons.filter(person => {
    if (person.gender === 'male') {
        console.log(person.firstName, person.lastName)
    }
})

//9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.
arrayOfPersons.filter(person => {
    if(Number(person.birthDate.slice(-4) <= 1990)) {
        console.log(person.firstName, person.lastName, person.birthDate)
    }
})

//BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
const dateOverTwentyOne = (year) => {
    let currentYear = Number(new Date().getFullYear())
    let birthYear = Number(year.birthDate.slice(-4))
    
    return currentYear - birthYear < 21
}
// console.log(dateOverTwentyOne(2000))

// BONUS - .filter() out the people in the array who are younger than 21.
// arrayOfPersons.filter(person => {
//     if (currentYear - Number(person.birthDate.slice(-4) <= 21)) {
//         console.log(person.firstName, person.lastName, person.birthDate)
//     }
// })
const youngerThan21 = arrayOfPersons.filter(person => {
    if (dateOverTwentyOne(person) === true){
        console.log(person)
    }
})

// Pt. 2 - From Scratch .find() & .findIndex()
// Whiteboard
// Code plan
// Pseudo code
// JavaScript code in a Repl.it for both functions
// Turn in URL of Repl.it

//use the .find() to find a persons name
// const name = (name) => {
//     //loop through arrayOfPersons and use .find() to return person name
//     return arrayOfPersons.find((person) => {
//         return name === person.firstName
//     })
// }
// console.log(name("Dante"))
// console.log(name("Robin"))
// console.log(gender("Robin"))

// create a function with two parameters
//loop through arrayOfPersons to find the persons name
//use the find() method and return the name

const name = (keyName, value) => {
    //loop through arrayOfPersons and use .find() to return person name
    return arrayOfPersons.find((person) => {
        return value === person[keyName]
    })
}
console.log(name("firstName", "Dante"))
console.log(name("gender", "female"))
// console.log(gender("Robin"))


//use the .findIndex() to get Robin index
const indexOfPerson = (person) => person.firstName === "Robin";

console.log(arrayOfPersons.findIndex(indexOfPerson))

  
  