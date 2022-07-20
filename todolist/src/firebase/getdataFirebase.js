import {collection, getDocs} from "firebase/firestore/lite";
import db from "./firebase"
async function getDataFirebase(){
  
    let taskCollection= collection(db, 'tasks');
    const snapshot =await  getDocs(taskCollection);
    let arr=snapshot.docs.map(document=>document.data())
    return arr;
  
  } 
  
  export default getDataFirebase;