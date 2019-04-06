// Readline module to get the input from the user
const readline = require('readline');

// process is global object. So we use stdin , stdout to get input and return output
let rl = readline.createInterface({input: process.stdin, output: process.stdout});

// Generate random number between 1 to 10
let num1  = Math.floor(Math.random() * 10  + 1 );
let num2  = Math.floor(Math.random() * 10  + 1 );
let answer = num1 + num2;

rl.question(`What is the ${num1} + ${num2} ? \n`, (userEntered) => {    
    if (userEntered == answer) {
        // Close the application. Close emit the event.
        rl.close();
    } else {
        rl.setPrompt("Your answer is wrong. Please try again. \n");
        rl.prompt();
        rl.on('line', (userEntered) => {
            if (userEntered == answer) {
                // Close the application. Close emit the event.
                rl.close();
            } else {
                rl.setPrompt(`Your answer ${userEntered} is wrong. Please try again. \n` );
                rl.prompt();
            };
        });
    };
});

// Readline close automatically emit the event. So we listen to that event.
rl.on('close', ()=> {
    console.log('Correct Answer !!!!!!!!!!');
});