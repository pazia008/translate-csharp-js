// Put your code here
console.log(`Let's roll some dice, baby!`)
console.log(`---------------------------`)

// for (int i = 0; i < 10; i++)
// {
//     Die die1 = Roll();
//     Die die2 = Roll();

//     string message = $"{die1} + {die2} == {die1.Value + die2.Value}";
//     if (die1.Value == die2.Value)
//     {
//         message += " DOUBLES!";
//     }

//     Console.WriteLine(message);
// }

for (let i = 0; i < 10; i++) {
    const dieOne = Roll()
    const dieTwo = Roll()

    if (dieOne === dieTwo) {
        console.log(`${dieOne} + ${dieTwo} == ${dieOne.Value + dieTwo.Value} DOUBLES!`)
    } else {
        console.log(`${dieOne} + ${dieTwo} == ${dieOne.Value + dieTwo.Value}`)
    }
}
