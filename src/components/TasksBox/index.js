import React from "react";
import TopBar from "../TopBar";
import TaskItem from "../TaskItem";

const TasksBox = () => {
  return (
    <div className="bg-slateGrey pt-5">
      <div className="w-11/12 mx-auto">
        <TopBar />
        <TaskItem />
      </div>
    </div>
  );
};

export default TasksBox;
