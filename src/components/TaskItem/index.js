import React, { useState } from "react";
import TaskHeader from "../TaskHeader";
import TaskInfo from "../TaskInfo";

const TaskItem = ({items}) => {
  const [taskInfo, setTaskInfo] = useState(false);
  return (
    <div className={`bg-white border-l-2 ${items.status === "Online" ? "border-green-500" : "border-red-600"} mb-4 py-3`}>
      <div className="w-[97%] mx-auto">
        <TaskHeader items={items} taskInfo={taskInfo} setTaskInfo={setTaskInfo}/>
        <TaskInfo items={items} taskInfo={taskInfo} />
      </div>
    </div>
  );
};

export default TaskItem;
