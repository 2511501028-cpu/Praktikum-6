import React from "react";
import { Button } from "react-bootstrap";

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Medium":
        return "priority-medium";
      case "Low":
        return "priority-low";
      default:
        return "";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Done":
        return "status-done";
      case "In Progress":
        return "status-progress";
      default:
        return "status-todo";
    }
  };

  const getIndicatorClass = (status) => {
    switch (status) {
      case "Done":
        return "indicator-done";
      case "In Progress":
        return "indicator-progress";
      default:
        return "indicator-todo";
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-state">
          Belum ada tugas. Klik tombol Add Task untuk memulai!
        </div>
      ) : (
        tasks.map((task) => (
          <div className="task-row" key={task.id}>
            <div className="task-name">
              <span className="column-label">Task</span>
              <span className="task-title">{task.name}</span>
            </div>

            <div className="task-priority">
              <span className="column-label">Priority</span>
              <span className={getPriorityClass(task.priority)}>
                {task.priority}
              </span>
            </div>

            <div className="task-status">
              <span className="column-label status-label">Status</span>
              <span className={`status-badge ${getStatusClass(task.status)}`}>
                {task.status}
              </span>
            </div>

            <div className="task-indicator">
              <span
                className={`status-indicator ${getIndicatorClass(task.status)}`}
              ></span>
            </div>

            <div className="task-actions">
              <Button
                className="action-edit"
                onClick={() => showEditForm(task)}
                title="Edit Task"
              >
                <i className="bi bi-pencil-square"></i>
              </Button>

              <Button
                className="action-delete"
                onClick={() => deleteTask(task.id)}
                title="Delete Task"
              >
                <i className="bi bi-trash3"></i>
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
