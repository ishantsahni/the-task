import React from "react";
import TasksBox from "../TasksBox";

const MainPage = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto text-left pt-20">
        <div>
          <p className="text-4xl mb-8">Main page</p>
          <TasksBox />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
