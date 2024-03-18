import React, { useState } from "react";
import Editor from "@monaco-editor/react";

interface CodeEditorWindowProps {
  onChange: (type: string, value: string) => void;
  language?: string;
  code?: string;
  theme?: string;
}

const CodeEditorWindow: React.FC<CodeEditorWindowProps> = ({
  onChange,
  language,
  code,
  theme,
}) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (newValue: string | undefined) => {
    setValue(newValue || "");
    setTimeout(() => {
      onChange("code", newValue || "");
    }, 500);
  };

  return (
    <div className="editor-container">
      <Editor
        height="400px"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme || "vs-dark"}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
