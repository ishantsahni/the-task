import { ADD_TASK, REMOVE_TASK} from "../../Types/common";

export const ADD_TASK_DATA = (payload) => ({
    type: ADD_TASK,
    payload
});

export const REMOVE_TASK_DATA = (payload) => ({
    type: REMOVE_TASK,
    payload
});