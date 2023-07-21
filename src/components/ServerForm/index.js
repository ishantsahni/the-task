import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const ServerForm = () => {
  const [natSpace, setNatSpace] = useState("");

  const handleChange = (event) => {
    console.log("nat space ", event.target.value);
    setNatSpace(event.target.value);
  };

  console.log("nat space ", natSpace);

  return (
    <div className="flex flex-col">
        <InputLabel id="demo-simple-select-label">Name</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="Enter Name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <InputLabel id="demo-simple-select-label">Description</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="On-Prem Host description(256 character maximum)"
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
      <InputLabel id="demo-simple-select-label">NAT Space</InputLabel>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        className="bg-slateGrey"
        value={natSpace}
        label=""
        // placeholder="Select NAT Space"
        onChange={handleChange}
      >
        <MenuItem
            // value={{
            //   id: "1",
            //   name: "Box",
            // }}
          value={"Box"}
        >
          Ten
        </MenuItem>
        <MenuItem
            // value={{
            //   id: "12",
            //   name: "DoS",
            // }}
          value={"DoS"}
        >
          DoS
        </MenuItem>
        {/* <MenuItem
          value={{
            id: "13",
            name: "Server Box",
          }}
        >
          Server Box
        </MenuItem>
        <MenuItem
          value={{
            id: "14",
            name: "Nat-vat",
          }}
        >
          Nat-vat
        </MenuItem>
        <MenuItem
          value={{
            id: "15",
            name: "Zth-vtc-1275844",
          }}
        >
          Zth-vtc-1275844
        </MenuItem>
        <MenuItem
          value={{
            id: "17",
            name: "GBD",
          }}
        >
          GBD
        </MenuItem> */}
      </Select>
      <InputLabel id="demo-simple-select-label">IP Address</InputLabel>
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="Enter IP Address"
        id="outlined-basic"
        label="IP Address"
        variant="outlined"
      />
    </div>
  );
};

export default ServerForm;
