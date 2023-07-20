import { Checkbox } from "@mui/material";
import React from "react";
import { Resources } from "../../config/Resources";
import { AiOutlineDown, AiOutlineDownSquare, AiOutlineUpSquare } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const TaskHeader = ({taskInfo, setTaskInfo, items}) => {
  return (
    <div className="flex ishant w-full justify-between">
      <div className="flex w-2/5 justify-between">
        <div className="flex">
          <Checkbox
            //    {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
            className="!p-0 !h-[20px] !mr-3"
            defaultChecked={false}
          />
          <div>
            <p className="font-semibold text-[0.7rem] text-nero">
              {items.name}
            </p>
            <p className="text-[0.7rem] text-nero">{items.description}</p>
          </div>
        </div>
        <div className="flex">
          <img
            alt="success"
            className="h-3 w-3 mr-1 mt-0.5"
            src={Resources.images.mainPage.success}
          />
          <p className="font-semibold text-[0.7rem] text-nero">{items.status}</p>
        </div>
      </div>
      <div className="flex">
        <BsThreeDots className="fill-darkSkyBlue mr-3.5" />
        <div className="h-4 w-4 cursor-pointer" onClick={() => setTaskInfo(!taskInfo)}>
          {taskInfo ? <AiOutlineUpSquare className="fill-darkSkyBlue !border-0 rounded-2xl" /> : <AiOutlineDownSquare className="fill-darkSkyBlue !border-0 rounded-2xl" />}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
