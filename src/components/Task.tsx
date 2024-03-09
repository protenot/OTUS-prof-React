import React, {useState, useEffect} from 'react';
import Button from './Button'
import CodeEditorWindow from './CodeEditor';
import TaskEditor from "./TaskEditor";
import {TASKS} from '../fakeDB/tasks';
function Task () {
    const [tasks, setTasks] = useState(TASKS);
    const [theme, setTheme]=useState('vs-dark');
    const [solution, setSolution] = useState('');
    const [information,setInformation] = useState('')
    const [description,setDescription] = useState('')
    const [complexity, setComplexity] = useState(0)
    const [language,setLanguage]=useState('')
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
      
        const updatedTask = { ...editedTask, description, solution, language, tag, complexity };
        setEditedTask(updatedTask);
        console.log('---', editedTask)
        console.log('+++', updatedTask)
    }   
    }
    
   
    useEffect(()=>{
        const task12345 = TASKS.find(task => task.id === '12345');
        if (task12345){
            setDescription(task12345.description);
            setSolution(task12345.solution);
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

    const handleInputChange = (taskId,field,value)=>{
        const taskIndex = tasks.findIndex(
            task => task.id===taskId
        )
        if(taskIndex !==-1){
            const updatedTask = {...tasks[taskIndex], [field]:value}
            console.log("updatedTask",updatedTask)
            const updatedTasks = [...tasks.slice(0, taskIndex), updatedTask, ...tasks.slice(taskIndex + 1)]
            console.log("updatedTasks", updatedTasks)
            setTasks(updatedTasks)
        }


    }
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
                    task = {editedTask}
                    onInputChange = {handleInputChange}
                    initialDescription={editedTask ? description : ''}
                    initialSolution={editedTask ? solution : ''}
                    initialTag={editedTask ? tag : ''}
                    initialLanguage = {editedTask ? language:''}
                    initialComplexity={editedTask ?complexity : ''}
                    onSave={saveTaskChanges}
                    closeEditor={closeEditor}
                />
            ) : (
                <>
                    <p>Description: {editedTask ? editedTask.description : ''}</p>
                    <p>Complexity: {editedTask ? editedTask.complexity : ''}</p>
                    <p>Language: {editedTask ? editedTask.language : ''}</p>
                    <p>Tag: {editedTask ? editedTask.tag : ''}</p>
                    <Button text="Редактировать задачу" onClick={() => openEditor()} />
                   
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