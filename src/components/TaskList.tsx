import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicTask from "./BasicTask";
import Button from "./Button";
import { selectTasks, removeTask, updateTag } from "../redux/taskSlice";
import { Task } from "../models/task.model";

function TaskList() {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editingTagTaskId, setEditingTagTaskId] = useState<string | null>(null);
  const [editingTagValue, setEditingTagValue] = useState<string>("");

  const handleChoseButton = (taskId: string) => {
    navigate(`/tasks/${taskId}`);
  };

  const handleDeleteButton = (taskId: string) => {
    dispatch(removeTask(taskId));
  };

  const handleEditingTag = (taskId: string, newTag: string) => {
    dispatch(updateTag({ taskId, tag: newTag }));
    setEditingTagTaskId(null);
    setEditingTagValue("");
  };

  return (
    <div>
      <h2>Список задач</h2>
      {tasks.map((task: Task) => (
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
