import React, {useState, useEffect} from 'react';
import Button from './Button'
import CodeEditorWindow from './CodeEditor';
import TaskEditor from "./TaskEditor";
import {TASKS} from '../fakeDB/tasks';
function Task () {0
    const [theme, setTheme]=useState('vs-dark');
    const [solution, setSolution] = useState('');
    const [information,setInformation] = useState('')
    const [description,setDescription] = useState('')
    const [complexity, setComplexity] = useState(0)
    const [language,setLanguage]=useState('JavaScript')
    const [tag,setTag]=useState('')
    const [isEditorOpen, setIsEditorOpen] = useState(false)
    const [editedTask, setEditedTask]=useState(null)
    
    const openEditor = ()=>{
        setIsEditorOpen(true);
    }
    const closeEditor = ()=>{
        setIsEditorOpen(false)
    }

    const saveTaskChanges = (description, solution, language,tag,complexity)=>{
     if(editedTask){
        console.log(description, solution, language,tag,complexity)
    
     }   
    }
    
   /*  useEffect(()=>{
        setDescription(description)
        setComplexity(complexity)
        setLanguage(language)
        setTag(tag)
    },[description, complexity, language,tag]

    ) */

    useEffect(()=>{
        const task12345 = TASKS.find(task => task.id === '12345');
        if (task12345){
            setDescription(task12345.description);
            setComplexity(task12345.complexity);
            setLanguage(task12345.language);
            setTag(task12345.tag);
            setEditedTask(task12345);
        }
    },[]);
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
   {isEditorOpen ? (
                <TaskEditor
                    initialDescription={editedTask ? editedTask.description : ''}
                    initialSolution={editedTask ? editedTask.solution : ''}
                    initialTag={editedTask ? editedTask.tag : ''}
                    initialComplexity={editedTask ? editedTask.complexity : ''}
                    onSave={saveTaskChanges}
                />
            ) : (
                <>
                    <p>Description: {editedTask ? editedTask.description : ''}</p>
                    <p>Complexity: {editedTask ? editedTask.complexity : ''}</p>
                    <p>Language: {editedTask ? editedTask.language : ''}</p>
                    <Button text="Редактировать задачу" onClick={() => openEditor()} />
                    <Button text="Завершить редактирование задачи" onClick={() => closeEditor()} />
                </>
            )}
    <Button text ="Вернуться к выбору задачи" onClick = {handleClickBack}/>
    <CodeEditorWindow
        language="javascript"
        theme={theme}
        code="// Your code here..."
        onChange={handleChange}
        //setSolution={setSolution}
        
      />
      <Button text ="Выберете тему" onClick = {handleClickTheme}/>
      <Button text ="Отправить на проверку" onClick = {()=>handleClickCompare("12345")}/>
    <p>{information}</p>
    
    </div>)
}
export default Task