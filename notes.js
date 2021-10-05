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
    // const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note)=>note.title === title)
    //

    // console.log(duplicateNote)
    // console.log(title)
    // debugger

    if (!duplicateNote) {
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

const readNotes=(title)=>{
    const notes = loadNotes()
    const noteMatch = notes.find((note)=>note.title === title)

    if(noteMatch){
        console.log(colors.inverse(noteMatch.title))
        console.log(noteMatch)
    }else{
        console.log(colors.red.inverse('note not found'))
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

const listNotes =()=>{
    const notes = loadNotes()
    console.log(colors.inverse('Your Notes'))
    notes.forEach((note)=>console.log(note.title))
}

module.exports = {
    getNotes: getNotes,
    getNote: getNote,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}