/* function getFirstChars (str, n) {
    let result = ""

    result = str.substring(0, n)

    return result
}

console.log(getFirstChars("Codecool", 5)) */

/* const obj = {
    firstName: "John",
    lastName: "Doe",
    getfullName: function() {
        return obj.firstName + obj.lastName
    }
}

console.log(obj.getfullName()) */

let text = "Lorem ipsum dolor et"

let textArray = text.split(" ")

// console.log(textArray)

let newText = textArray.join(" ")

// console.log(newText)

// RegEx: Regular Expression: olyan eszköz/módszer, amivel formátumot lehet ellenőrizni, pl. e-mail formátumnak megfelel-e a string


// Random szám generátor kerek szám, fix értékek között

let randomNumber = Math.round(Math.random() * (100 - 1) + 1)

// console.log(randomNumber)

const numberInString = "145"

const number = parseInt(numberInString) // stringben lévő számot számmá alakítja (csak egész szám); parseFloat tudja a tizedest is kezelni
const float = parseFloat(numberInString)

// console.log(number)

// számok sorrendbe rendezése array-ban:

let arr = [1, 21, 3, 444, 56, 10000]

console.log(arr.sort()) // ABC sorrend
console.log(arr.sort((a, b) => a - b)) // növekvő sorrend
console.log(arr.sort((a, b) => b - a)) // csökkenő sorrend

// Objektum methods

let obj = {
    name: "John Doe",
    age: "32",
    favoriteDrink: "beer"
}

let objKeys = Object.keys(obj)

/* for (let i = 0; i < objKeys.length; i++) {
    console.log(objKeys[i])
    console.log(obj[objKeys[i]])
} */

for (const key of Object.keys(obj)) {
    console.log(key)
    console.log(obj[key]) // ilyenkor mindig bracket notationt kell használni
}