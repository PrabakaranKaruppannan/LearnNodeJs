// File system module is for read, create file
const fileSystem = require('fs');

// Create file
fileSystem.writeFile('sample.text', 'This is sample text file', (err) => {
    if (err) {
        console.log('There was an error in creating file');
    } else {
        console.log('File successfully created');

        // Read file
        fileSystem.readFile('sample.text', 'utf8', (err, data) => {
            if (err) {
                console.log('There was an error in reading file');
            } else {                
                console.log('The contents of the file is: '+ data);               

                // Rename file
                fileSystem.rename('sample.text', 'sample1.text', (err) => {
                    if (err) {
                        console.log('There was an error in rename file');
                    } else {
                        console.log('Successfully renamed');

                        // Append additional text
                        fileSystem.appendFile('sample1.text', 'Added additional text', (err) => {
                            if (err) {
                                console.log('There was an error in appending additional data');
                            } else {
                                console.log('Successfully appended additional data');

                                // Delete file
                                fileSystem.unlink('sample1.text', (err) => {
                                    if (err) {
                                        console.log('There was an error in deleting file');
                                    } else {
                                        console.log('Successfully deleted');
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });        
    }
});





