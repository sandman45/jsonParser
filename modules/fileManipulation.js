const fs = require('fs');

module.exports = {
    readFile: (fileName, filePath) => {
        return new Promise((resolve, reject) => {
            console.log(`${filePath}${fileName}`);
            fs.readFile(`${filePath}${fileName}`, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    },
    writeFile: (fileName, filePath, fileData) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(`${filePath}${fileName}`, fileData, (err) => {
                if (err) {
                    reject(err);
                }
                resolve('success');
            });
        });
    },
};
