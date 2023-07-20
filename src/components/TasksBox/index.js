import React from "react";
import TopBar from "../TopBar";
import TaskItem from "../TaskItem";
import { useSelector } from "react-redux";

const TasksBox = () => {
  const taskArray = useSelector(state => state?.taskList);
  return (
    <div className="bg-slateGrey pt-5">
      <div className="w-11/12 mx-auto">
        <TopBar />
        {taskArray.length > 0 &&
          taskArray.map((items, index) => (
            <TaskItem key={index} items={items} />
          ))}
      </div>
    </div>
  );
};

export default TasksBox;
