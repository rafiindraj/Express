// const prefilled = 'your notes'
// const notes = function(){
//     return prefilled
// }

// module.exports = prefilled;
// module.exports = notes
const fs = require('fs')

function getNote() {
    return 'Ur Notes'
}
const getNotes = function () {
    return 'Your Notes'
}

const addNote = function (title, contents) {
    const notes = loadNotes()
    notes.push({
        title: title,
        contents: contents
    })
    console.log(notes)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }


}

module.exports = {
    getNotes: getNotes,
    getNote: getNote,
    addNote: addNote
}