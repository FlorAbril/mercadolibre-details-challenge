import React from "react";
import {Box} from "@chakra-ui/react";

import Routes from "./routes";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <Box>
        <Navbar/>
        <Box margin="0 auto" minW={800} w="fit-content">
          <Routes />
        </Box>
    </Box>
  );
};

export default App;
