import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

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

const ServerForm = ({ formik }) => {
  //   const [natSpace, setNatSpace] = useState("");

  //   const handleChange = (event) => {
  //     console.log("nat space ", event.target.value);
  //     setNatSpace(event.target.value);
  //   };

  return (
    <div className="flex flex-col">
      <InputLabel id="demo-simple-select-label">Name</InputLabel>
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
        value={formik.values.name}
      />
      <InputLabel id="demo-simple-select-label">Description</InputLabel>
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
        value={formik.values.description}
      />
      <InputLabel id="demo-simple-select-label">NAT Space</InputLabel>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        className="bg-slateGrey"
        //   value={natSpace}
        label=""
        // placeholder="Select NAT Space"
        //   onChange={handleChange}
        id="spaceId"
        name="spaceId"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.spaceId}
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
        //   id="outlined-basic"
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
