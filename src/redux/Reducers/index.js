import { combineReducers } from "redux";
import { SET_MY_MODAL_STATE, SET_SELECTED_TASK_DATA, SET_TASK_DATA } from "./common";

const appReducer = combineReducers({
    taskList: SET_TASK_DATA,
    selectedTaskList: SET_SELECTED_TASK_DATA,
    isModalOpen: SET_MY_MODAL_STATE
});

export default appReducer;