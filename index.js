const fs = require('fs')
const yargs = require('yargs')


yargs.command({
    command : 'dynamicContent',
    describe : 'added new file for dynamic content',
    handler : function(){
        fs.writeFileSync('dynamic.txt',`dynamic file created by custom command`)
    }
})

yargs.parse();

const bufferContent= fs.readFileSync('dynamic.txt')

const stringContent = bufferContent.toString()

console.log(stringContent);

fs.appendFileSync('dynamic.txt',' text appended in the dynamic file')