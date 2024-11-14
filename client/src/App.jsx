import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Protected/Home";
import Search from "./pages/Protected/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { Box } from "@mui/material";
import ProtectedLayout from "./pages/Protected/ProtectedLayout"



function App() {
  return (
    <>
    <Box minHeight={"100vh"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProtectedLayout />}>
            <Route exact path="" element={<Home/>}/>
            <Route exact path="post/:id" element={<h1>Single Post</h1>}/>
            <Route exact path="search" element={<Search/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
    </>
  );
}

export default App;
