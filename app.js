const fileManipulator = require('./modules/fileManipulation');

const absPath = `${__dirname}/files/`;
let fileData;

fileManipulator.readFile('jsonFile.json', absPath).then((data) => {
    const dataObject = JSON.parse(data);
    dataObject.movies.push({
        title: 'Top Gun',
    });
    fileData = JSON.stringify(dataObject);

    return fileManipulator.writeFile('jsonFile.json', absPath, fileData).then((results) => {
        console.log(results);
        return results;
    });
}).catch((error) => {
    console.log(error);
});
