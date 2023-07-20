import React from "react";

const TaskInfo = ({taskInfo}) => {
  return (
    <div className={`font-Inter mt-4 ${taskInfo ? "" : "hidden"}`}>
      <div className="bg-slateGrey py-2 px-3.5">
        <p className="font-medium text-[0.7rem] text-nero">GENERAL INFO</p>
        <div className="flex">
          <p className="font-semibold text-[0.7rem] text-nero">
            Server IP Address:&nbsp;
          </p>
          <p className="text-[0.7rem] text-nero">172.28.7.109</p>
        </div>
        <div className="flex">
          <p className="font-semibold text-[0.7rem] text-nero">
            Server NAT IP Address:&nbsp;
          </p>
          <p className="text-[0.7rem] text-nero">3.87.172.198</p>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
