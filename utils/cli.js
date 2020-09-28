const fs = require('fs');
const convert = require('./convert');

module.exports = async directoryPath => {
    const filenames = [];

    await fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(file => {
            if (file[file.length - 1] === 'x' && file[file.length - 2] === 'c') {
                const res = file.split('.');
                if (res[0] !== '') filenames.push(res[0]);
            }
        });
        console.log(filenames);
        (async () => {
            if (filenames.length === 0) {
                console.log('No docx files found.');
                return;
            } else await convert(filenames);
        })();
    });
};
