let input = "Hello World"

let wordsplit = input.split(" ")
console.log("Splitted words:", wordsplit)

let lastword = wordsplit.length - 1
console.log("Length of the last word:", wordsplit[lastword].length)

let input1 = " fly me to the moon "

let splitwords = input1.trim().split(" ")
console.log("Splitted words:", splitwords)

let lastword1 = splitwords.length - 1
console.log("Length of the last word:", splitwords[lastword1].length)

function isAnagram(string1, string2) {

    let status = true

    let str1 = string1.trim().toLowerCase()
    let str2 = string2.trim().toLowerCase()

    if (str1.length != str2.length) {
        status = false
    }
    else {
        let sorted1 = str1.split("").sort().join("")
        let sorted2 = str2.split("").sort().join("")

        if (sorted1 != sorted2) {
            status = false
        }
    }

    return status
}

console.log("Anagram Validation:", isAnagram("Listen", "Silent"))
console.log("Anagram Validation:", isAnagram("Hello", "World"))