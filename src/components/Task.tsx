import React, {useState} from 'react';
import Button from './Button'
import CodeEditorWindow from './CodeEditor';
import {TASKS} from '../fakeDB/tasks';
function Task () {0
    const [theme, setTheme]=useState('vs-dark');
    const [solution, setSolution] = useState('');
    const [information,setInformation] = useState('')
    const handleChange = (type: string, value: string) => {
        console.log(`Change detected: ${type} - ${value}`);
    if(type==='code'){
        setSolution(value)
    }  
    
    };
      const handleClickBack = ()=>{
        console.log("Здесь будет логика возвращения на страницу выбора задач")
      }

      const handleClickTheme = ()=>{
        const newTheme=theme==='vs-dark'?'vs-light':'vs-dark';
        setTheme(newTheme)
      }
        
      const handleClickCompare=(taskId:string)=>{
        const  task = TASKS.find(task =>task.id===taskId)
        if(task){
            const standartSolution = task.solution;
            if(solution === standartSolution){
                setInformation("Вы правильно решили задачу");
            } else{
                setInformation("Попробуйте еще раз")
            }
        }


      }
  return(<div>
    <Button text ="Вернуться к выбору задачи" onClick = {handleClickBack}/>
    <CodeEditorWindow
        language="javascript"
        theme={theme}
        code="// Your code here..."
        onChange={handleChange}
        setSolution={setSolution}
        
      />
      <Button text ="Выберете тему" onClick = {handleClickTheme}/>
      <Button text ="Отправить на проверку" onClick = {()=>handleClickCompare("12345")}/>
    <p>{information}</p>
    </div>)
}
export default Task