import { useState } from "react";
import Button from "./Button";

interface UserEditorProps{
  initialRating:number;
  onSave:(rating:number)=>void;
  closeEditor: () => void;
}


function UserEditor({
  initialRating,
  onSave,
  closeEditor,
}:UserEditorProps) {
  const [rating, setRating] = useState(initialRating);

  const handleRatingSave = () => {
    console.log("rating26", rating);
    onSave(rating);
    closeEditor();
  };
  console.log("UserEditor is rendering...");
  return (
    <div className="rating-editor">
      <label htmlFor="rating-corr">
        {" "}
        Rating
        <input
          id="rating-corr"
          type="text"
          value={rating}
          onChange={(e) => {
            setRating(+e.target.value);
            console.log(e.target.value)
         
          }}
        />
      </label>
      <Button text="Сохранить изменения" onClick={handleRatingSave} />
    </div>
  );
}
export default UserEditor;
