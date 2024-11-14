import { Avatar, Badge, Stack } from "@mui/material";
import React from "react";

const PostOne = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Avatar
            alt="+"
            src=""
            sx={{
              width: 20,
              height: 20,
              bgcolor: "green",
              position: "relative",
              right: 4,
              bottom: 4,
            }}
          >
            +
          </Avatar>
          <Avatar alt="AJ" src="" sx={{ width: 40, height: 40 }} />
          <Stack
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
            height={"100%"}
          ></Stack>
        </Badge>
      </Stack>
    </>
  );
};

export default PostOne;
