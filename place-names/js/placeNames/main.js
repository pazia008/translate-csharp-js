// Put your code here
console.log("All Place Names")
const names = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"];



for (let name of names) {
    console.log(name)
}


console.log("'The' Place Names")
const theNames = names.filter((n) => n.includes("The"));

for (let name of theNames) {
    console.log(name)
}