const db=require('../db');

exports.insert= async ({id, description, director, editor, dp, title, link})=>{
    try {
        if (!id|| !description|| !director|| !editor||!dp|| !title|| !link)
         console.log("property not there")
         return db.querey(`INSERT INTO recipe (id, description, director, editor, dp,title, link) VALUES ($1,$2) RETURNING*`,
          [
             id, 
             description,
             director,
             editor,
             dp,
             title,
             link
         ]);

        }catch(err){
            console.log("error");
         
        }
}