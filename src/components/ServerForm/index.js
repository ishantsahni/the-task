import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { items } from "../../helpers";

const ServerForm = ({ formik, modalText }) => {
    const selectedTaskList = useSelector(state => state.selectedTaskList);

  return (
    <div className="flex flex-col">
      <InputLabel className="mt-4" id="demo-simple-select-label">Name</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="Enter Name"
        label=""
        variant="outlined"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      <InputLabel className="mt-4" id="demo-simple-select-label">Description</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="On-Prem Host description(256 character maximum)"
        label=""
        variant="outlined"
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />
      <InputLabel className="mt-4" id="demo-simple-select-label">NAT Space</InputLabel>
      <Select
        className="bg-slateGrey"
        label=""
        id="spaceId"
        disabled={modalText === "edit"}
        name="spaceId"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={modalText === "edit" ? items.filter(item => item.id === selectedTaskList[0].nat_space_id)[0].name : formik.values.spaceId}
      >
        {items.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      <InputLabel className="mt-4" id="demo-simple-select-label">IP Address</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="Enter IP Address"
        label=""
        variant="outlined"
        id="addressId"
        name="addressId"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.addressId}
      />
    </div>
  );
};

export default ServerForm;
