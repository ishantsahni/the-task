import { TextField } from "@mui/material";

const ServerForm = () => {
  return (
    <div className="flex flex-col">
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="Enter Name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        className="bg-slateGrey"
        autoComplete="off"
        placeholder="On-Prem Host description(256 character maximum)"
        id="outlined-basic"
        label="Description"
        variant="outlined"
      />
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
