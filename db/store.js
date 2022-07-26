const util = require ("util")
const fs = require ('fs')
import { v4 as uuidv4 } from 'uuid';
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

   }
   addNote(note){

   }
   
   removeNote(id){

   }
   
}
module.exports = new Store();