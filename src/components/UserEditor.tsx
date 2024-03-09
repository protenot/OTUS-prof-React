import React, { useState } from 'react';
import Button from './Button';

function UserEditor(user, onInputChange, initialRating, onSave,closeEditor){
    const [rating, setRating]=useState(initialRating);
    const handleRatingSave = ()=>{
        console.log('rating', rating)
        onSave(rating)
        closeEditor()
    }

    return(
        <div className = 'rating-editor'>
            <label htmlFor="rating-corr">
                <input id= 'rating-editor' type="text" value = {rating} onChange = {(e)=>{
                    setRating(e.target.value)
                }} />
            </label>
            <Button text = "Сохранить изменения" onClick = {handleRatingSave}/>
        </div>
    )
}
export default UserEditor