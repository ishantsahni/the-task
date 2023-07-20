import { Checkbox } from "@mui/material";
import React from "react";
import { Resources } from "../../config/Resources";
import { AiOutlineDown, AiOutlineDownSquare } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const TaskHeader = () => {
  return (
    <div className="flex ishant w-full justify-between">
      <div className="flex w-2/5 justify-between">
        <div className="flex">
          <Checkbox
            //    {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
            className="!p-0 !h-[20px] !mr-3"
            defaultChecked
          />
          <div>
            <p className="font-semibold text-[0.7rem] text-nero">
              ZTP_suresh-cdc_6782530715194866100
            </p>
            <p className="text-[0.7rem] text-nero">Description Obj</p>
          </div>
        </div>
        <div className="flex">
          <img
            alt="success"
            className="h-3 w-3 mr-1 mt-0.5"
            src={Resources.images.mainPage.success}
          />
          <p className="font-semibold text-[0.7rem] text-nero">Online</p>
        </div>
      </div>
      <div className="flex">
        <BsThreeDots className="fill-darkSkyBlue" />
        <div className="h-4 w-4">
          <AiOutlineDownSquare className="fill-darkSkyBlue !border-0 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
