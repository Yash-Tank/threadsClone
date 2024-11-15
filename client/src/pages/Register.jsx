import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundImage: 'url("/register-bg.webp")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 600px",
        }}
      >
        Register with email
        <Stack flexDirection={"column"} width={"40%"} gap={2} mt={20}>
          <Typography variant="h5" fontSize={"bold"} alignSelf={"center"}>
            Login with Email
          </Typography>
          <TextField variant="outlined" placeholder="Enter your Username..." />
          <TextField variant="outlined" placeholder="Enter your Email..." />
          <TextField variant="outlined" placeholder="Enter your Password..." />
          <Button
            size="large"
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "green",
              color: "white",
              fontSize: "1rem",
              ":hover": {
                bgcolor: "blue",
                cursor: "pointer",
              },
            }}
          >
            Sign up
          </Button>
          <Typography
            variant="subtitle2"
            fontSize={"1.3rem"}
            alignSelf={"center"}
            
          >
            Already have an account ? <span className="login-link">Login</span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
