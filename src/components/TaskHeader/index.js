import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { Resources } from "../../config/Resources";
import {
  AiOutlineDown,
  AiOutlineDownSquare,
  AiOutlineUpSquare,
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch } from "react-redux";
import { ADD_SELECTED_TASK_DATA, REMOVE_SELECTED_TASK_DATA, REMOVE_TASK_DATA, SET_EDIT_ONE_TASK_DATA, SET_MODAL_CLOSE, SET_MODAL_OPEN } from "../../redux/Actions/common";

const options = ["Remove", "Edit"];

const ITEM_HEIGHT = 48;

const TaskHeader = ({ taskInfo, setTaskInfo, items }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value, id) => {
    if (value === "remove") {
      dispatch(REMOVE_TASK_DATA({ uniqueId: id }));
    } else {
      dispatch(SET_MODAL_OPEN());
      dispatch(SET_EDIT_ONE_TASK_DATA(items));
    }
    setAnchorEl(null);
  };

  return (
    <div className="flex ishant w-full justify-between">
      <div className="flex w-2/5 justify-between">
        <div className="flex">
          <Checkbox
            checked={isChecked}
            onChange={(e) => {
              if(e.target.checked) {
                dispatch(ADD_SELECTED_TASK_DATA(items));
              } else {
                dispatch(REMOVE_SELECTED_TASK_DATA(items));
              }
              setIsChecked(e.target.checked);
            }}
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
        <div className={`flex ${items.status === "Online" ? "" : "!mr-2"}`}>
          <img
            alt="success"
            className="h-3 w-3 mr-1 mt-0.5"
            src={
              items.status === "Online"
                ? Resources.images.mainPage.success
                : Resources.images.mainPage.error
            }
          />
          <p className="font-semibold text-[0.7rem] text-nero">
            {items.status}
          </p>
        </div>
      </div>
      <div className="flex">
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "100px",
            },
          }}
        >
          <MenuItem onClick={() => handleClose("remove", items.uniqueId)}>
            {"Remove"}
          </MenuItem>
          <MenuItem onClick={() => handleClose("edit", items.uniqueId)}>
            {"Edit"}
          </MenuItem>
        </Menu>
        <BsThreeDots
          onClick={(e) => handleClick(e)}
          className="fill-darkSkyBlue mr-3.5"
        />
        <div
          className="h-4 w-4 cursor-pointer"
          onClick={() => setTaskInfo(!taskInfo)}
        >
          {taskInfo ? (
            <AiOutlineUpSquare className="fill-darkSkyBlue !border-0 rounded-2xl" />
          ) : (
            <AiOutlineDownSquare className="fill-darkSkyBlue !border-0 rounded-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
