// const prefilled = 'your notes'
// const notes = function(){
//     return prefilled
// }

// module.exports = prefilled;
// module.exports = notes
const fs = require('fs')
const colors = require('chalk')
const yargs = require('yargs')
// yargs.version('1.1.0')

function getNote() {
    return 'Ur Notes'
}
const getNotes = ()=> {
    return 'Your Notes'
}

const addNotes = (title, contents)=> {
    const notes = loadNotes()

    //filter array
    const duplicateNotes = notes.filter((note)=>note.title === title)
    //

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            contents: contents
        })

        saveNote(notes)
        console.log(colors.green.inverse('new note added'))
    } else {
        console.log(colors.red.inverse('note title has been taken'))
    }

}

const saveNote =(notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const removeNotes = (title)=>{
    console.log(title)
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) =>note.title !== title)
    if(notes.length > notesToKeep.length){
        saveNote(notesToKeep)
        console.log(colors.green.inverse('item deleted'))
    }else{
        console.log(colors.red.inverse('item is not exist'))
    }
}

module.exports = {
    getNotes: getNotes,
    getNote: getNote,
    addNotes: addNotes,
    removeNotes: removeNotes
}