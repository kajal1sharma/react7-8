import dataBaseObject from "./databaseUserInfo";

function checkCredentials(LoginObj){

    let promise =new Promise((resolve, reject)=>{
        if(dataBaseObject=== null || LoginObj===null){
            reject({error:"not valid request"})
        }
        for(let i=0;i<dataBaseObject.length;i++){
            if(LoginObj.username===dataBaseObject[i].username && LoginObj.password===dataBaseObject[i].password){
              resolve({message:"user found"});  
            }
            
        }
        resolve({message:"user not found"})
    })


    return promise;
}

export default checkCredentials;
