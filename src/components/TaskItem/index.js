import React from "react";
import TaskHeader from "../TaskHeader";
import TaskInfo from "../TaskInfo";

const TaskItem = () => {
  return (
    <div className="bg-white">
      <TaskHeader />
      <TaskInfo />
    </div>
  );
};

export default TaskItem;
