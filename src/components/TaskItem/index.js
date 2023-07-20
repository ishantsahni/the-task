import React, { useState } from "react";
import TaskHeader from "../TaskHeader";
import TaskInfo from "../TaskInfo";

const TaskItem = () => {
  const [taskInfo, setTaskInfo] = useState(false);
  return (
    <div className="bg-white border-l-2 border-red-600 mb-4 py-3">
      <div className="w-[97%] mx-auto">
        <TaskHeader taskInfo={taskInfo} setTaskInfo={setTaskInfo}/>
        <TaskInfo taskInfo={taskInfo} />
      </div>
    </div>
  );
};

export default TaskItem;
