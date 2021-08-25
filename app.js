const colors = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')
const { argv } = require('yargs')

//variable declaration
const log = console.log
const processed = process.argv
// const yargument = yargs.argv
const command = processed[2]


// customize yargs version
yargs.version('1.1.0')


//create add command yargs
yargs.command({
    command: 'add',
    describe : 'Add a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        contents:{
            describe: 'Note Contents',
            demandOption: true,
            type: 'string'
        }      
    },
    handler: function(){
        log('Title: ' + argv.title)
    }
})

//create remove command yargs
yargs.command({
    command: 'remove',
    describe : 'Remove a note',
    handler: function(argv){
        log('Removing a note..', argv)
    }
})

//create read command yargs
yargs.command({
    command: 'read',
    describe : 'read a note',
    handler: function(){
        log('Reading a note..')
    }
})

//create list command yargs
yargs.command({
    command: 'list',
    describe : 'List a note',
    handler: function(){
        log('Listing a note..')
    }
})

// yargs.parse()
// log(processed)
console.log(yargs.argv)
// if(command == 'add'){
//     log('Adding Note')
// } else if(command == 'remove'){
//     log('Removing Note')
// }
// log(shownotes)
// log(colors.blue.inverse('success'))

// log(process.argv[2])

