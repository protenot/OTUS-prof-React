//import { useState } from "react";

function BasicTask (description:string, complexity:number,language:string,tag:string){
    return(
        <>
            <p>Description: {description}</p>
            <p>Complexity: {complexity}</p>
            <p>Language: {language}</p>
            <p>Tag: {tag}</p>
        </>
    )

}

export default BasicTask