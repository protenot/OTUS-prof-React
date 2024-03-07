import React, { useState } from 'react';
import Button from './Button';

function TaskEditor({initialDescriptoin, initialLanguage, initialSolution, initialTag, initialComplexity }) {
    
    const [solution, setSolution] = useState(initialSolution);  
    const [description,setDescription] = useState(initialDescriptoin)
    const [complexity, setComplexity] = useState(initialComplexity)
    const [language,setLanguage]=useState(initialLanguage)
    const [tag,setTag]=useState(initialTag)

    const handleSave = ()=>{

        onSave(description,solution,complexity, language, tag)
    }

return(
    <div>
        <label htmlFor="description-corr"> Description
        <input id = "description-corr" className = "description-corr" type="text" value = {description} onChange ={(e)=>setDescription(e.target.value)} />
        </label>
        <textarea type="text" value = {solution} onChange ={(e)=>setSolution(e.target.value)} />
        <input type="text" value = {complexity} onChange ={(e)=>setComplexity(e.target.value)} />
        <input type="text" value = {language} onChange ={(e)=>setLanguage(e.target.value)} />
        <input type="text" value = {tag} onChange ={(e)=>setTag(e.target.value)} />
        <Button text = "Сохранить изменения" onClick = {handleSave}/>
    </div>
)
}

export default TaskEditor