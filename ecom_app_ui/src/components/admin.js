import React, { useState } from "react";
import { Form, Grid } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import Navbar from "./navbar";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

export default function FormValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const setPicture = useState(null);
  const setImgData = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div>
      <Navbar />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Box mx={20} my={10}>
          <Box mx={1} px={2} py={2}>
            <div>
              <h2>Product Creation</h2>
            </div>
          </Box>
          <Grid container style={{ width: "50%" }}>
            <Box mx={1} px={2} py={2}>
              <TextField
                label="Name"
                variant="outlined"
                placeholder=""
                type="text"
                {...register("name", { required: true, maxLength: 12 })}
              />
              {errors.name && <p>Please check the Name</p>}
            </Box>
            <Box mx={1} px={2} py={2}>
              <TextField
                label="Brand"
                variant="outlined"
                type="text"
                {...register("brand", { required: true, maxLength: 12 })}
              />
              {errors.brand && <p>Please check the Brand</p>}
            </Box>
            <Box mx={1} px={2} py={2}>
              <TextField
                label="Price"
                variant="outlined"
                type="Number"
                {...register("price", { required: true })}
              />
              {errors.price && <p>Please check the Email</p>}
            </Box>
            <Box mx={1} px={2} py={2}>
              <TextField
                style={{ width: "60%" }}
                variant="outlined"
                label="Description"
                type="textarea"
                {...register("description", { required: true })}
              />
              {errors.description && <p>Please check the description</p>}
            </Box>
            <Box mx={1} px={2} py={2}>
              <TextField
                id="profilePic"
                type="file"
                onChange={onChangePicture}
                {...register("picture", { required: true })}
              />
              {errors.picture && <p>Please check the picture</p>}
            </Box>
            <Box mx={1} px={2} py={2}>
              <Button variant="contained" type="submit">
                Create Product
              </Button>
            </Box>
          </Grid>
        </Box>
      </Form>
    </div>
  );
}
