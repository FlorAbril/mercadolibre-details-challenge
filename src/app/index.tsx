import React from "react";
import {Box} from "@chakra-ui/react";

import Routes from "./routes";
import Navbar from "../components/Navbar";

const App: React.FC = () => {
  return (
    <Box>
        <Navbar/>
        <Box>
          <Routes />
        </Box>
    </Box>
  );
};

export default App;
