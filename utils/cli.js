const fs = require('fs');
const convert = require('./convert');
const end = require('./end');

module.exports = async directoryPath => {
    const filenames = [];

    fs.readdir(directoryPath, async (err, files) => {
        files.forEach(file => {
            if (file[file.length - 1] === 'x' && file[file.length - 2] === 'c') {
                const res = file.split('.');
                if (res[0] !== '') filenames.push(res[0]);
            }
        });

        if (filenames.length === 0) {
            console.log('No docx files found.');
            return;
        } else await convert(filenames);
        end();
    });
};
