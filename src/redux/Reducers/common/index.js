import {
  ADD_SELECTED_TASK,
  ADD_TASK,
  CLOSE_MODAL,
  EDIT_ONE_TASK,
  EDIT_TASK,
  EMPTY_SELECTED_TASK,
  OPEN_MODAL,
  REMOVE_GROUP_TASK,
  REMOVE_SELECTED_TASK,
  REMOVE_TASK,
} from "../../Types/common";

const SET_TASK_DATA = (
  state = [
    // {
    //   name: "Box",
    //   description: "xyz lorem 324 got boty doty",
    //   server_ip: "10.19.19.23",
    //   nat_space_id: "1",
    //   server_nat_ip: "122.12.19.21",
    //   status: "Online",
    //   uniqueId: "12345",
    // },
    // {
    //   name: "DoS",
    //   description: "Server Box xyz lorem 324 got boty doty",
    //   server_ip: "10.19.19.23",
    //   nat_space_id: "12",
    //   server_nat_ip: "122.12.19.21",
    //   status: "Online",
    //   uniqueId: "12346",
    // },
    // {
    //   name: "Server Box",
    //   description: " 10.013.122-xyz lorem 324 got boty doty",
    //   server_ip: "10.19.19.23",
    //   nat_space_id: "13",
    //   server_nat_ip: "122.12.19.21",
    //   status: "Error",
    //   uniqueId: "12347",
    // },
    // {
    //   name: "Nat-vat",
    //   description: "xyz lorem 324 got boty doty",
    //   server_ip: "10.19.19.23",
    //   nat_space_id: "14",
    //   server_nat_ip: "122.12.19.21",
    //   status: "Online",
    //   uniqueId: "12348",
    // },
    // {
    //   name: "ZTh-vtc-1275844",
    //   description: "xyz lorem 324 got boty doty",
    //   server_ip: "10.19.19.23",
    //   nat_space_id: "15",
    //   server_nat_ip: "122.12.19.21",
    //   status: "Error",
    //   uniqueId: "12349",
    // },
    // {
    //   name: "GBD",
    //   description: "xyz lorem 324 got boty doty",
    //   server_ip: "10.19.19.23",
    //   nat_space_id: "17",
    //   server_nat_ip: "122.12.19.21",
    //   status: "Online",
    //   uniqueId: "12311",
    // },
  ],
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK:
      return [...state, { ...payload }];
    case REMOVE_TASK: {
      const newState = state.filter(
        (item) => item.uniqueId !== payload.uniqueId
      );
      return [...newState];
    }
    case REMOVE_GROUP_TASK:
      const newState = state.filter(
        (item) => !payload.removeList.includes(item.uniqueId)
      );
      return [...newState];
    case EDIT_TASK: {
      const newState = state.filter(
        (item) => item.uniqueId !== payload.uniqueId
      );
      return [...newState, { ...payload }];
    }
    default:
      return state;
  }
};

const SET_SELECTED_TASK_DATA = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SELECTED_TASK:
      return [...state, { ...payload }];
    case REMOVE_SELECTED_TASK:
      const newState = state.filter(
        (item) => item.uniqueId !== payload.uniqueId
      );
      return [...newState];
    case EDIT_ONE_TASK:
      return [{ ...payload }];
    case EMPTY_SELECTED_TASK:
      return [];
    default:
      return state;
  }
};

const SET_MY_MODAL_STATE = (
  state = {
    isModalOpen: false,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export { SET_TASK_DATA, SET_SELECTED_TASK_DATA, SET_MY_MODAL_STATE };
