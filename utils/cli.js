const fs = require('fs');
const convert = require('./convert');
const end = require('./end');
const chalk = require('chalk');
const cwd = process.cwd();

module.exports = async () => {
    const filenames = [];

    fs.readdir(cwd, async (err, files) => {
        files.forEach(file => {
            if (file[file.length - 1] === 'x' && file[file.length - 2] === 'c') {
                const res = file.split('.');
                if (res[0] !== '') filenames.push(res[0]);
            }
        });

        if (filenames.length === 0) {
            console.log(`${chalk.hex('#DF661E').inverse(' INFO ')} No docx files found`);
            end();
            return;
        } else await convert(filenames);
        end();
    });
};
