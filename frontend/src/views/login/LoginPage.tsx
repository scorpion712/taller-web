import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "../../components/Copyright";
import { LoginForm } from "./models/auth.models";
import AuthContext from "./context/AuthContext";

export const LoginPage = () => {

  const { validateLogin, error: authError, user } = useContext(AuthContext); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    doValidation(data);
  };

  const doValidation = (data: FormData) => {
    if (!data.get("email") || !data.get("password")) {
      setError("You must to complete your Email Address and your Password.");
    } else {
      validateLogin({
        email: data.get("email"),
        password: data.get("password"),
      } as LoginForm);
    } 
  }

  useEffect(() => {
    if (user) {
      console.log('Go to Main');
    } 
  }, [ user ])
  

  const [error, setError] = useState("");

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={() => setError("")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={() => setError("")}
          />
          <Typography variant="body1" color="error">
            {error || authError}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
