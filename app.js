
const validator = require('validator'); 
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    describe:'add new notes',
    builder:{
        title: {
            describe:'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe:'Note body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe:'remove new notes',
    builder:{
        title: {
            describe:'Note title',
            demandOption : true,
            type: 'string'
        }},
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe:'read all notes',
    builder:{
        title: {
            describe:'Note title',
            demandOption : true,
            type: 'string'
        }},
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe:'list all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()
