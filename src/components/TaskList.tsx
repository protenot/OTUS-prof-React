import { useState } from "react";
import BasicTask from "./BasicTask";
import Button from "./Button";
import { TASKS } from "../fakeDB/tasks";
import { Task } from "../models/task.model";
import { useNavigate } from "react-router-dom";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [editingTagTaskId, setEditingTagTaskId] = useState<string | null>(null);
  const [editingTagValue, setEditingTagValue] = useState<string>("");

  const navigate = useNavigate();

  const handleChoseButton = (taskId: string) => {
    navigate(`/tasks/${taskId}`);
  };
  const handleDeleteButton = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleEditingTag = (taskId: string, newTag: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, tag: newTag } : task,
      ),
    );
    setEditingTagTaskId(null);
    setEditingTagValue("");
  };

  return (
    <div>
      <h2>Список задач</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <BasicTask
            description={task.description}
            complexity={task.complexity}
            language={task.language}
            tag={task.tag}
          />
          <Button
            text="Выбрать задачу"
            onClick={() => handleChoseButton(task.id)}
          />
          <Button
            text="Удалить задачу"
            onClick={() => handleDeleteButton(task.id)}
          />

          {editingTagTaskId === task.id ? (
            <div>
              <input
                type="text"
                value={editingTagValue}
                onChange={(e) => setEditingTagValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEditingTag(task.id, editingTagValue);
                  }
                }}

              />

              <Button
                text="Сохранить"
                onClick={() => {
                  handleEditingTag(task.id, editingTagValue);
                }}
              />
            </div>
          ) : (
            <div>
              <Button
                text="Редактировать тег"
                onClick={() => {
                  setEditingTagTaskId(task.id);
                  setEditingTagValue(task.tag);
                }}
              
                
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
