import React from 'react';
import Button from './Button'
import CodeEditorWindow from './CodeEditor';
function Task () {

    const handleChange = (type: string, value: string) => {
        console.log(`Change detected: ${type} - ${value}`);
      };
      const handleClickBack = ()=>{
        console.log("Здесь будет логика возвращения на страницу выбора задач")
      }
  return(<div>
    <Button text ="Вернуться к выбору задачи" onClick = {handleClickBack}/>
    <CodeEditorWindow
        language="javascript"
        theme="vs-dark"
        code="// Your code here..."
        onChange={handleChange}
      />
    </div>)
}
export default Task