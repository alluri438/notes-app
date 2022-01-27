const fs = require('fs');
const chalk = require('chalk');
const notes = function () {
    return 'Your Notes....'
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicates = notes.find(note => note.title === title);
    debugger
    if (!duplicates) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('note saved'))
    }
    else {
        console.log(chalk.red.inverse('note taken!!'))
    }

}
const removeNote = (title) => {
    const notes = loadNotes();
    const notesKeep = notes.filter(note => note.title !== title)
    if (notes.length === notesKeep.length) {
        console.log(chalk.red.inverse(' no note found'))
    }
    else {
        saveNotes(notesKeep);
        console.log(chalk.green.inverse('note removed'))
    }

}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const listNotes = () =>{
    const notes = loadNotes();
    notes.forEach((note) =>{
        console.log(chalk.green.inverse('your note'), note.title);
    }
    )
    
}
const readNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.find((note) =>note.title === title);
    if (findNote){
        console.log(chalk.green.inverse('yourNote'), findNote)
    }
    else {
        console.log(chalk.red.inverse('no note found with title'))
    }
}
module.exports = {
    "notes": notes,
    "addNotes": addNotes,
    "removeNote": removeNote,
    "listNotes" : listNotes,
    "readNote":readNote
}