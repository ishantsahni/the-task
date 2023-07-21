import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

const items = [
    {
      id: "1",
      name: "Box",
    },
    {
      id: "12",
      name: "DoS",
    },
    {
      id: "13",
      name: "Server Box",
    },
    {
      id: "14",
      name: "Nat-vat",
    },
    {
      id: "15",
      name: "Zth-vtc-1275844",
    },
    {
      id: "17",
      name: "GBD",
    },
  ];

const ServerForm = () => {
  const [natSpace, setNatSpace] = useState("");

  const handleChange = (event) => {
    console.log("nat space ", event.target.value);
    setNatSpace(event.target.value);
  };

  console.log("nat space ", natSpace);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
        {items.map((item) => (
          <MenuItem key={item.id} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
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
