import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import CodeEditorWindow from "./CodeEditor";
import TaskEditor from "./TaskEditor";
import { TASKS } from "../fakeDB/tasks";
import { Task } from "../models/task.model";
import BasicTask from "./BasicTask";

function TaskItem() {
  const [theme, setTheme] = useState("vs-dark");
  const [solution, setSolution] = useState("");
  const [information, setInformation] = useState("");
  const [description, setDescription] = useState("");
  const [complexity, setComplexity] = useState(0);
  const [language, setLanguage] = useState("");
  const [tag, setTag] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editedTask, setEditedTask] = useState<Task | null>(null);
  const [isUserInput, setIsUserInput] = useState(false);

  const { id } = useParams();
  
  const openEditor = () => {
    console.log(description, complexity, tag);
    setIsEditorOpen(true);
  };
  const closeEditor = () => {
    setIsEditorOpen(false);
  };

  const saveTaskChanges = (
    description: string,
    solution: string,
    language: string,
    tag: string,
    complexity: number,
  ) => {
    if (editedTask) {
      const updatedTask = {
        ...editedTask,
        description,
        solution,
        language,
        tag,
        complexity,
      };
      setEditedTask(updatedTask);
    }
  };

  useEffect(() => {
    const task12345 = TASKS.find((task) => task.id === id);
    if (task12345) {
      
      setDescription(task12345.description);
      setSolution(task12345.solution);
      setComplexity(task12345.complexity);
      setLanguage(task12345.language);
      setTag(task12345.tag);
      setEditedTask(task12345);
    }
  }, []);
  const handleChange = (type: string, value: string) => {
    if (type === "code") {
      setSolution(value);
      setIsUserInput(true);
    }
  };

  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate("/tasks");
  };

  const handleClickTheme = () => {
    const newTheme = theme === "vs-dark" ? "vs-light" : "vs-dark";
    setTheme(newTheme);
  };

  const handleClickCompare = () => {
    const task = TASKS.find((task) => task.id === id);
    if (!isUserInput) {
      setInformation("Введите ваше решение");
      return;
    }

    if (task) {
      const standartSolution = task.solution;
      const userInput = solution.trim();
      console.log("standartSolution", standartSolution);
      console.log("userInput", userInput);
      if (userInput === standartSolution) {
        setInformation("Вы правильно решили задачу");
      } else {
        setInformation("Попробуйте еще раз");
      }
    }
  };

  return (
    <div>
      {isEditorOpen ? (
        <TaskEditor
          initialDescription={editedTask ? editedTask.description : ""}
          initialSolution={editedTask ? editedTask.solution : ""}
          initialTag={editedTask ? editedTask.tag : ""}
          initialLanguage={editedTask ? editedTask.language : ""}
          initialComplexity={editedTask ? editedTask.complexity : 0}
          onSave={saveTaskChanges}
          closeEditor={closeEditor}
        />
      ) : (
        <>
        <BasicTask
        description={editedTask ? editedTask.description : ""}
        complexity = {editedTask ? editedTask.complexity : 0}
        language={editedTask ? editedTask.language : ""}
        tag={editedTask ? editedTask.tag : ""}
        
        /> 
          <Button text="Редактировать задачу" onClick={() => openEditor()} />
        </>
      )}
      <Button text="Вернуться к выбору задачи" onClick={handleClickBack} />
      <CodeEditorWindow
        language={language}
        theme={theme}
        code="// Your code here..."
        onChange={handleChange}
      />
      <Button text="Выберете тему" onClick={handleClickTheme} />
      <Button
        text="Отправить на проверку"
        onClick={() => handleClickCompare()}
      />
      <p>{information}</p>
    </div>
  );
}
export default TaskItem;
