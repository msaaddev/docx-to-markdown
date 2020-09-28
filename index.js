#!/usr/bin/env node

/**
 *
 * Author Saad Irfan
 * GitHub msaaddev
 * Twitter <https://twitter.com/msaaddev>
 */

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const cli = require('./utils/cli');

(module.exports = async () => {
    welcome({
        title: `docx to markdown`,
        tagLine: `by ${pkgJSON.author.name}`,
        description: `${pkgJSON.description}`,
        bgColor: `#5D39FD`,
        color: `#FFF`,
        bold: true,
        clear: true,
        version: `${pkgJSON.version}`,
    });

    await cli();
})();
