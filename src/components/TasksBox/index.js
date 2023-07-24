import React, { useState } from "react";
import TopBar from "../TopBar";
import TaskItem from "../TaskItem";
import { useSelector } from "react-redux";

const TasksBox = () => {
  const [searchString, setSearchString] = useState("");
  const taskArray = useSelector(state => state?.taskList);

  const filteredTaskArray = taskArray.filter((data) =>
    data.name.toLowerCase().includes(searchString.trim().toLowerCase())
  );

  return (
    <div className="bg-slateGrey pt-5">
      <div className="w-11/12 mx-auto">
        <TopBar setSearchString={setSearchString} />
        {filteredTaskArray.length > 0 &&
          filteredTaskArray.map((items, index) => (
            <TaskItem key={items.uniqueId} items={items} />
          ))}
      </div>
    </div>
  );
};

export default TasksBox;
