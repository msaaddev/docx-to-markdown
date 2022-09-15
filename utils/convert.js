const fs = require('fs');
const execa = require('execa');
const ora = require('ora');
const chalk = require('chalk');

module.exports = async filenames => {
    let spinner = ora();

    spinner.start(`Converting docx files to markdown`);

    try {
        if (!fs.existsSync('markdown')) {
            await execa(`mkdir`, [`markdown`]);
        }

        filenames.map(async file => {
            try {
                await execa(`pandoc`, [
                    `-f`,
                    `docx`,
                    `-t`,
                    `markdown`,
                    `${file}.docx`,
                    `-o`,
                    `markdown/${file}.md`,
                ]);
            } catch (error) {}
        });

        spinner.succeed(
            `${chalk.hex(`#6cc644`).inverse(` DONE `)} ${filenames.length} file/s converted`
        );
    } catch (error) {
        spinner.fail(`${chalk.hex(`#FF0000`).inverse(` ERROR `)} Couldn't convert the file/s. ${error.message}`);

        process.exit(1);
    }
};
