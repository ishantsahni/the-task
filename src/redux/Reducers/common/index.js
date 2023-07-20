import { ADD_TASK, REMOVE_TASK } from "../../Types/common";

const SET_TASK_DATA = (
  state = [
    {
      name: "Box",
      description: "xyz lorem 324 got boty doty",
      server_ip: "10.19.19.23",
      nat_space_id: "12",
      server_nat_ip: "122.12.19.21",
      status: "online",
      uniqueId: "12345",
    },
    {
      name: "DoS",
      description: "Server Box xyz lorem 324 got boty doty",
      server_ip: "10.19.19.23",
      nat_space_id: "1",
      server_nat_ip: "122.12.19.21",
      status: "online",
      uniqueId: "12346",
    },
    {
      name: "Server Box",
      description: " 10.013.122-xyz lorem 324 got boty doty",
      server_ip: "10.19.19.23",
      nat_space_id: "12",
      server_nat_ip: "122.12.19.21",
      status: "error",
      uniqueId: "12347",
    },
    {
      name: "Nat-vat",
      description: "xyz lorem 324 got boty doty",
      server_ip: "10.19.19.23",
      nat_space_id: "15",
      server_nat_ip: "122.12.19.21",
      status: "online",
      uniqueId: "12348",
    },
    {
      name: "ZTh-vtc-1275844",
      description: "xyz lorem 324 got boty doty",
      server_ip: "10.19.19.23",
      nat_space_id: "14",
      server_nat_ip: "122.12.19.21",
      status: "error",
      uniqueId: "12349",
    },
    {
      name: "Box",
      description: "xyz lorem 324 got boty doty",
      server_ip: "10.19.19.23",
      nat_space_id: "13",
      server_nat_ip: "122.12.19.21",
      status: "online",
      uniqueId: "12311",
    },
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
    default:
      return state;
  }
};

export { SET_TASK_DATA };
