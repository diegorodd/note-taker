const util = require ("util")
const fs = require ('fs')
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
read(){
 return readFileAsync('db/db.json','utf8')
}
write(note){
    return writeFileAsync('db/db.json',JSON.stringify(note));
   }

   getNotes(){
       return this.read().then((notes)=> {
           let notesArray;
        //    try catch...https://www.w3schools.com/java/java_try_catch.asp
        try {
            // using json.parse to take the json data to turn it into a js object and then concat into an array
            notesArray = [].concat(JSON.parse(notes));
        } catch(err){
            // if error happens return an empty array.
            notesArray = [];
        }
        return notesArray
       })

   }
   addNote(note){
    //    object destructuring title and text are like properties of a note object.
    const { title, text } = note;
    if (!title || !text) {
        throw new Error('cant be blank');
    }
    
    const newNote = { title, text, id: uuidv4() };

    // add the new note 
    return this.getNotes()
    // using a spread operator we are putting current and new notes into an array 
        .then(notes => [...notes, newNote])
        // updated notes will be adding to the db.json
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => newNote);

   }
   
   removeNote(id){

   }
   
}
module.exports = new Store();