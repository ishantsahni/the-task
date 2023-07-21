import { ADD_SELECTED_TASK, ADD_TASK, EDIT_TASK, REMOVE_GROUP_TASK, REMOVE_SELECTED_TASK, REMOVE_TASK} from "../../Types/common";

export const ADD_TASK_DATA = (payload) => ({
    type: ADD_TASK,
    payload
});

export const REMOVE_TASK_DATA = (payload) => ({
    type: REMOVE_TASK,
    payload
});

export const ADD_SELECTED_TASK_DATA = (payload) => ({
    type: ADD_SELECTED_TASK,
    payload
});

export const REMOVE_SELECTED_TASK_DATA = (payload) => ({
    type: REMOVE_SELECTED_TASK,
    payload
});

export const REMOVE_GROUP_TASK_DATA = (payload) => ({
    type: REMOVE_GROUP_TASK,
    payload
});

export const EDIT_TASK_DATA = (payload) => ({
    type: EDIT_TASK,
    payload
});