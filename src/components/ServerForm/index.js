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
        //   id="outlined-basic"
        label=""
        variant="outlined"
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // value={modalText === "edit" ? selectedTaskList[0].name : formik.values.name}
        value={formik.values.name}
      />
      <InputLabel className="mt-4" id="demo-simple-select-label">Description</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="On-Prem Host description(256 character maximum)"
        //   id="outlined-basic"
        label=""
        variant="outlined"
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // value={modalText === "edit" ? selectedTaskList[0].description : formik.values.description}
        value={formik.values.description}
      />
      <InputLabel className="mt-4" id="demo-simple-select-label">NAT Space</InputLabel>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        className="bg-slateGrey"
        //   value={natSpace}
        label=""
        // placeholder="Select NAT Space"
        //   onChange={handleChange}
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
        //   id="outlined-basic"
        label=""
        variant="outlined"
        id="addressId"
        name="addressId"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // value={modalText === "edit" ? selectedTaskList[0].server_nat_ip : formik.values.addressId}
        value={formik.values.addressId}
      />
    </div>
  );
};

export default ServerForm;
