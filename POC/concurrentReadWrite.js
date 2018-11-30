const fs = require('fs');

const dataToBeWritten = 'write everytime this thing';

writeFile1 = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile('abc.txt', dataToBeWritten, 'utf-8', (err) => {
            if(err) return err;
            return 'Done writting file';
        });
    });
};

