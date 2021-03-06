import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Navbar from "./navbar";

const theme = createTheme();

export default function Signup() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mandatory")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPwd: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    firstname: Yup.string().required("First name is mandatory"),
    lastname: Yup.string().required("Last name is mandatory"),
    email: Yup.string()
      .required("Email is mandatory")
      .email("That doesn't look like a valid email"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

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
              "url(https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814__480.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mx={20} my={10}>
                <Box mx={10} px={2} py={2}>
                  <div>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign Up
                    </Typography>
                  </div>
                </Box>
                <Grid container style={{ width: "80%" }}>
                  <Box mx={1} px={2} py={2}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      placeholder=""
                      type="text"
                      name="firstname"
                      {...register("firstname")}
                      className={`form-control ${
                        errors.firstname ? "is-invalid" : ""
                      }`}
                    />
                    <div>{errors.firstname?.message}</div>
                  </Box>
                  <Box mx={1} px={2} py={2}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      type="text"
                      name="lastname"
                      {...register("lastname")}
                      className={`form-control ${
                        errors.lastname ? "is-invalid" : ""
                      }`}
                    />
                    <div>{errors.lastname?.message}</div>
                  </Box>
                  <Box mx={1} px={2} py={2}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <div>{errors.email?.message}</div>
                  </Box>
                  <Box mx={1} px={2} py={2}>
                    <TextField
                      label="password"
                      variant="outlined"
                      name="password"
                      type="password"
                      {...register("password")}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <div>{errors.password?.message}</div>
                  </Box>
                  <Box mx={1} px={2} py={2}>
                    <TextField
                      variant="outlined"
                      name="confirmPwd"
                      type="password"
                      {...register("confirmPwd")}
                      className={`form-control ${
                        errors.confirmPwd ? "is-invalid" : ""
                      }`}
                    />
                    <div>{errors.confirmPwd?.message}</div>
                  </Box>
                  <Box mx={1} px={2} py={2}>
                    <Button variant="contained" type="submit">
                      Sign Up
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
