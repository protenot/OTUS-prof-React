import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import CodeEditorWindow from "./CodeEditor";
import TaskEditor from "./TaskEditor";
import BasicTask from "./BasicTask";
import { selectTaskById, updateTask } from "../redux/taskSlice";
import { RootState } from "../redux/store";

function TaskItem() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch task from Redux store by id
  const editedTask = useSelector((state: RootState) =>
    selectTaskById(state, id as string),
  );
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [solution, setSolution] = useState("");
  const [isUserInput, setIsUserInput] = useState(false);
  const [information, setInformation] = useState("");
  const [theme, setTheme] = useState("vs-dark");

  useEffect(() => {
    if (editedTask) {
      setSolution(editedTask.solution);
    }
  }, [editedTask]);

  const openEditor = () => {
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
      dispatch(
        updateTask({
          ...editedTask,
          description,
          solution,
          language,
          tag,
          complexity,
        }),
      );
    }
  };

  const handleChange = (type: string, value: string) => {
    if (type === "code") {
      setSolution(value);
      setIsUserInput(true);
    }
  };

  const handleClickBack = () => {
    navigate("/tasks");
  };

  const handleClickTheme = () => {
    const newTheme = theme === "vs-dark" ? "vs-light" : "vs-dark";
    setTheme(newTheme);
  };

  const handleClickCompare = () => {
    if (!isUserInput) {
      setInformation("Введите ваше решение");
      return;
    }

    if (editedTask) {
      const standartSolution = editedTask.solution;
      const userInput = solution.trim();

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
          initialSolution={solution}
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
            complexity={editedTask ? editedTask.complexity : 0}
            language={editedTask ? editedTask.language : ""}
            tag={editedTask ? editedTask.tag : ""}
          />
          <Button text="Редактировать задачу" onClick={() => openEditor()} />
        </>
      )}
      <Button text="Вернуться к выбору задачи" onClick={handleClickBack} />
      <CodeEditorWindow
        language={editedTask ? editedTask.language : ""}
        theme={theme}
        code="// Your code here..."
        onChange={handleChange}
      />
      <Button text="Выберете тему" onClick={handleClickTheme} />
      <Button text="Отправить на проверку" onClick={handleClickCompare} />
      <p>{information}</p>
    </div>
  );
}

export default TaskItem;
