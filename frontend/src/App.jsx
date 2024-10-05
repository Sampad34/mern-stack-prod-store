import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "@chakra-ui/react";

function App() {
  return (
    <Box minH={"100vh"}  bg={useColorModeValue("red.100","gray.900")}>
       <NavBar/>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
