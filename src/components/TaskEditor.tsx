import React, { useState } from "react";
import Button from "./Button";

function TaskEditor({
  initialDescription,
  initialLanguage,
  initialSolution,
  initialTag,
  initialComplexity,
  onSave,
  closeEditor,
}) {
  const [solution, setSolution] = useState(initialSolution);
  const [description, setDescription] = useState(initialDescription);
  const [complexity, setComplexity] = useState(initialComplexity);
  const [language, setLanguage] = useState(initialLanguage);
  const [tag, setTag] = useState(initialTag);

  const handleSave = () => {
    console.log(description, solution, complexity, language, tag);
    onSave(description, solution, language, tag, complexity);
    closeEditor();
  };

  return (
    <div className="editor-div">
      <label htmlFor="description-corr">
        {" "}
        Description
        <input
          id="description-corr"
          className="description-corr"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            //  onInputChange(task.id, 'description', e.target.value)
          }}
        />
      </label>

      <label htmlFor="complexity-corr">
        {" "}
        Complexity
        <input
          id="complexity-corr"
          className="complexity-corr"
          type="text"
          value={complexity}
          onChange={(e) => {
            setComplexity(e.target.value);
            //  onInputChange(task.id, 'complexity', e.target.value)
          }}
        />
      </label>
      <label htmlFor="language-corr">
        Language
        <input
          id="language-corr"
          className="language-corr"
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </label>
      <label htmlFor="tag-corr">
        Tag
        <input
          id="tag-corr"
          className="tag-corr"
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </label>
      <label htmlFor="solution-corr">
        {" "}
        Solution
        <textarea
          id="solution-corr"
          className="solution-corr"
          type="text"
          value={solution}
          onChange={(e) => {
            setSolution(e.target.value);
            //  onInputChange(task.id, 'solution', e.target.value)
          }}
        />
      </label>
      <Button text="Сохранить изменения" onClick={handleSave} />
    </div>
  );
}

export default TaskEditor;
