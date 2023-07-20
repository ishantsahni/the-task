import { Checkbox } from "@mui/material";
import React from "react";
import { Resources } from "../../config/Resources";
import { AiOutlineDown, AiOutlineDownSquare } from "react-icons/ai";

const TaskItem = () => {
  return (
    <div>
      <div>
        <div>
          <Checkbox
            //    {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
            defaultChecked
          />
          <div>
            <p>ZTP_suresh-cdc_6782530715194866100</p>
            <p>Description Obj</p>
          </div>
          <div>
            <img
              alt="success"
              className="h-4 w-4"
              src={Resources.images.mainPage.success}
            />
            <p>Online</p>
          </div>
        </div>
        <div>
          <div className="h-4 w-4">
            <AiOutlineDownSquare className="fill-darkSkyBlue !border-0 rounded-2xl" />
          </div>
        </div>
      </div>
      <div>Bottom</div>
    </div>
  );
};

export default TaskItem;
