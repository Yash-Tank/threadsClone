import { Avatar, Stack, Typography,Button } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <>
      <Stack
        height={28}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
        width={"70%"}
        p={3}
        borderBottom={"2px solid gray"}
        my={5}
        mx={"auto"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
            <Avatar src="" alt='AJ'/>
            <Typography color={"GrayText"}>Start a thread...</Typography>
        </Stack>
        <Button size="medium" sx={{
            bgcolor:"gray",
            color:"aliceblue",
            ":hover":{
                bgcolor:'black',
                cursor:"pointer"
            }
        }}>POST</Button>
      </Stack>
    </>
  );
};

export default Input;
