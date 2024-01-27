import React, { FC, useState } from "react";

const Todo: FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasksList, setTasksList] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasksList((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  };

  return (
    <div>
      <h2>Todo List</h2>

      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div>
        <ul>
          {tasksList.map((taskItem, index) => (
            <li key={index}>
              {taskItem}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
