import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const TopBar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col justify-around h-full">
            <div className="mx-auto">
              <p className="font-mulish">
                You are not authorized to access this service.
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                className="cursor-pointer"
                variant="contained"
                onClick={() => handleCloseModal()}
              >
                Close
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <div>
        <Button onClick={() => setModalOpen(true)} className="!h-7" size="small" variant="contained" sx={{textTransform: "none"}}>Create Server</Button>
        <Button size="small" variant="outlined" sx={{textTransform: "none"}} className="!text-black !border-black !mx-4 !h-7">
          Edit
        </Button>
        <Button size="small" variant="outlined" sx={{textTransform: "none"}} className="!text-black !border-black !h-7">
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
