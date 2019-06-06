console.log(process.pid);
console.log(process.versions.node);

// Get the commands from Terminal
console.log(process.argv);

const [, , firstName] = process.argv;
console.log(`your name is ${firstName}`);

// Exit the terminal
//process.exit();