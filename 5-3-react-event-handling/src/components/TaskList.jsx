import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p className="placeholder">No tasks yet 😴</p>;
  }
  return (
    <ul className="list">
      {tasks.map((task) => (
        <TaskItem 
        key={task.id}
        id={task.id}
        text={task.text}
        onDelete={onDelete}
        />
      ))}
      {/* Task 2 & 3 – Map tasks to TaskItem */}
      
    </ul>
  );
}
