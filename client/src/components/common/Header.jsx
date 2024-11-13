import { colors, Stack } from "@mui/material";

const Header = () => {
  return (
    <Stack
      flexDirection={"row"}
      height={52}
      justifyContent={"space-around"}
      alignItems={"center"}
      position={"sticky"}
      top={0}
      py={1}
    >
      <img
        src="/Threads-logo-black-bg.webp"
        alt="logo"
        width={60}
        height={48}
      />
      <Stack
        justifyContent={"center"}
        width={"550px"}
        bgcolor={"aliceblue"}
        color={"white"}
        zIndex={2}
        height={96}
      >
      NavBar
      </Stack>
    </Stack>
  );
};

export default Header;
