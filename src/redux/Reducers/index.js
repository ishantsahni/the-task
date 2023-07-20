import { combineReducers } from "redux";
import { SET_TASK_DATA } from "./common";

const appReducer = combineReducers({
    taskList: SET_TASK_DATA,
});

export default appReducer;