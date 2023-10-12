const animals = ["kutya", "cica", "nyuszi", "papagáj"]

const numbers = [10, 20, 30, 40, 50]

animals.forEach((animal) => console.log(animal))

// forEach - nem returnolja az új arrayt, csak ha létrehozunk egyet új változóként és belepusholjuk

/* const newNumbers = []

numbers.forEach(function (number, index, array) { // 3 paramétert kaphat
    let newNumber = number * 10
    console.log(newNumber, index, array)
    newNumbers.push(newNumber)
}) */

// map - olyan mint a forEach, csak létrehoz egy új arrayt

const mapResult = numbers.map((number) => number * 10)

console.log(mapResult)

// filter - kiszűr bizonyos elemeket új arraybe

const numberArray = [6, 11, 45, 8, 132, 98, 27]

const filterResult = numberArray.filter((number) => number % 2 !== 0)

console.log(filterResult)