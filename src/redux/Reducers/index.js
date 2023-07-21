import { combineReducers } from "redux";
import { SET_SELECTED_TASK_DATA, SET_TASK_DATA } from "./common";

const appReducer = combineReducers({
    taskList: SET_TASK_DATA,
    selectedTaskList: SET_SELECTED_TASK_DATA
});

export default appReducer;