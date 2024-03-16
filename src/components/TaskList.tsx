import { useState } from "react";
import BasicTask from "./BasicTask";
import Button from "./Button";
import { TASKS } from "../fakeDB/tasks";
import { Task} from "../models/task.model"; 
import { useNavigate } from 'react-router-dom';

function TaskList (){
    const [tasks, setTasks] = useState<Task[]>(TASKS);
    const navigate = useNavigate();

    const handleChoseButton = (taskId:string)=>{
        navigate(`/task/${taskId}`)
    }
    const handleDeleteButton = (taskId: string) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      };


    return(
        <div>
            <h2>Список задач</h2>
            {tasks.map(task =>(
                <div key={task.id}>
                    <BasicTask
                    description={task.description}
                    complexity={task.complexity}
                    language={task.language}
                    tag={task.tag}
                    />
                    <Button
                    text="Выбрать задачу"
                    onClick={()=>handleChoseButton(task.id)}
                    />
                    <Button
                    text="Удалить задачу"
                    onClick={()=>handleDeleteButton(task.id)}
                    />
                </div>
            )

            )}
        </div>
    )
}

export default TaskList;