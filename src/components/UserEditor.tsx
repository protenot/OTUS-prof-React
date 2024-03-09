import React, { useState } from "react";
import Button from "./Button";

function UserEditor({
  user,
  onInputChange,
  initialRating,
  onSave,
  closeEditor,
}) {
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
            setRating(e.target.value);
            console.log(e.target.value)
          //  onInputChange(user.id, "rating", e.target.value);
          }}
        />
      </label>
      <Button text="Сохранить изменения" onClick={handleRatingSave} />
    </div>
  );
}
export default UserEditor;
