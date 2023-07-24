import { Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import ServerForm from "../ServerForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TASK_DATA,
  EDIT_TASK_DATA,
  REMOVE_GROUP_TASK_DATA,
  SET_EMPTY_SELECTED_TASK_DATA,
  SET_MODAL_CLOSE,
} from "../../redux/Actions/common";
import { items } from "../../helpers";

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

const TopBar = ({ setSearchString }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalOpen.isModalOpen);
  const selectedTaskList = useSelector((state) => state.selectedTaskList);

  const handleCloseModal = () => {
    setModalOpen(false);
    dispatch(SET_MODAL_CLOSE());
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      spaceId: "",
      addressId: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(256, "Must be 256 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(256, "Must be 256 characters or less")
        .required("Required"),
      spaceId: Yup.string().required("Required"),
      addressId: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (modalText === "edit") {
        dispatch(
          EDIT_TASK_DATA({
            ...selectedTaskList[0],
            name: values.name,
            description: values.description,
            server_nat_ip: values.addressId,
          })
        );
      } else {
        dispatch(
          ADD_TASK_DATA({
            name: values.name,
            description: values.description,
            nat_space_id: items.filter(
              (item) => item.name === values.spaceId
            )[0]?.id,
            server_nat_ip: values.addressId,
            server_ip: "10.19.19.23",
            status: "Error",
            uniqueId: Date.now().toString(),
          })
        );
        setModalText("");
      }
      dispatch(SET_EMPTY_SELECTED_TASK_DATA());

    },
  });

  return (
    <div className="flex justify-between items-center mb-4">
      <Modal
        open={modalOpen || isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div>
              <p className="font-mulish">Create Server</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <ServerForm formik={formik} modalText={modalText} />
              <div className="flex justify-between mt-2">
                <Button
                  className="!h-7 cursor-pointer"
                  size="small"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    handleCloseModal();
                    dispatch(SET_EMPTY_SELECTED_TASK_DATA());
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="!h-7 cursor-pointer"
                  size="small"
                  type="submit"
                  variant="contained"
                  sx={{ textTransform: "none" }}
                  onClick={() => {
                    formik.handleSubmit();
                    handleCloseModal();
                  }}
                >
                  Save & Close
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <div>
        <Button
          onClick={() => {
            setModalText("create");
            setModalOpen(true);
          }}
          className="!h-7"
          size="small"
          disabled={selectedTaskList.length > 0}
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          Create Server
        </Button>
        <Button
          size="small"
          variant="outlined"
          disabled={selectedTaskList.length !== 1}
          onClick={() => {
            setModalText("edit");
            setModalOpen(true);
          }}
          sx={{ textTransform: "none" }}
          className="!text-black !border-black !mx-4 !h-7"
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          disabled={selectedTaskList.length < 1}
          onClick={() => {
            const list = selectedTaskList.map((item) => item.uniqueId);
            dispatch(
              REMOVE_GROUP_TASK_DATA({
                removeList: list,
              })
            );
            dispatch(SET_EMPTY_SELECTED_TASK_DATA());
          }}
          sx={{ textTransform: "none" }}
          className="!text-black !border-black !h-7"
        >
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
              borderColor: "black",
            },
          }}
          autoComplete="off"
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
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
