import { Button, TextField } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Button variant="contained" sx={{textTransform: "none"}}>Create Server</Button>
        <Button variant="outlined" sx={{textTransform: "none"}} className="!text-black !border-black !mx-4">
          Edit
        </Button>
        <Button variant="outlined" sx={{textTransform: "none"}} className="!text-black !border-black">
          Remove
        </Button>
      </div>
      <div>
        <TextField
          className="bg-slateGrey"
          InputProps={{
            style: {
              borderRadius: "33px",
              borderWidth: "0px",
              borderColor: "black"
            },
          }}
          autoComplete="off"
          placeholder="Search by name.."
          id="outlined-basic"
          label=""
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default TopBar;
