import React from "react";
import TaskHeader from "../TaskHeader";
import TaskInfo from "../TaskInfo";

const TaskItem = () => {
  return (
    <div className="bg-white border-l-2 border-red-600">
      <TaskHeader />
      <TaskInfo />
    </div>
  );
};

export default TaskItem;
