import React from "react";

import {Product} from "../types";
import mock from "../mock";
import { Box, Stack } from "@chakra-ui/react";
import ShortDescription from "../components/ShortDescription";
import Gallery from "../components/Gallery";
import TechnicalSpecifications from "../components/TechnicalSpecifications";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Box minW={800} bg="white" borderRadius={4} boxShadow="base" display="flex"  paddingBottom="40px">
      <Box flexBasis="0%" flexGrow={2} flexShrink={1}>
          <Gallery product={product} />
          <Box marginLeft="50px">
            <TechnicalSpecifications product={product}/>
          </Box>
      </Box>
      <Box flexBasis="0%" flexGrow={1} flexShrink={1} width="368px" maxW="368px" marginLeft="48px" marginTop="16px" paddingRight="16px">
        <ShortDescription product={product}/>
      </Box>
    </Box>
  )
};

export default DetailsScreen;
