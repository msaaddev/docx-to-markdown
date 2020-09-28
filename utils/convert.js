const execa = require('execa');
const ora = require('ora');

module.exports = async filenames => {
    let spinner = ora();

    

    spinner.start(`Converting docx files to markdown`);
    try {
        await execa(`mkdir`, [`markdown`]);
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
        spinner.succeed(`File conversion done`);
    } catch (error) {
        spinner.fail(`Couldn't convert the files.`);
    }
};
