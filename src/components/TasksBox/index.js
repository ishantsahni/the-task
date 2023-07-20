import React from "react";
import TopBar from "../TopBar";
import TaskItem from "../TaskItem";

const TasksBox = () => {
    return (
        <div className="bg-slateGrey">
            <TopBar />
            <TaskItem />
        </div>
    )
};

export default TasksBox;
