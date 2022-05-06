import React, { useState  } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import Navbar from "./navbar";
import { connect } from "react-redux";
import { createProduct } from "../redux/product/productAction";


const theme = createTheme();

 function Product(props) {

  // constructor(props) {
  //   super(props);
    
  // };
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  const abc = createProduct(data);
  console.log("abcc", abc)
    createProduct(data)

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
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://inc42.com/wp-content/uploads/2021/05/26-May-1-68-680x510.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
       
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mx={20} my={10}>
              <Box mx={1} px={2} py={2}>
                <div>
                  <h2>Product Creation</h2>
                </div>
              </Box>
              <Grid container style={{ width: "80%" }}>
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
                    style={{ width: "150%" }}
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
          </form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
const mapDispatchToProps = (dispatch) => {
  
  return {
    createProduct: (data) => dispatch(createProduct(data)),
  };
};
export default connect(null,mapDispatchToProps)(Product);