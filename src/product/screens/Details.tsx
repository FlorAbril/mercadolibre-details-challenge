import React from "react";

import {Product} from "../types";
import mock from "../mock";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import ProductDetail from "../components/ProductDetail";
import Gallery from "../components/Gallery";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Box minW={800} bg="white" borderRadius={4} boxShadow="base" display="flex"  paddingBottom="40px">
      <Box flexBasis="0%" flexGrow={2} flexShrink={1}>
        <Stack>
          <Gallery product={product} />
        </Stack>
      </Box>
      <Box flexBasis="0%" flexGrow={1} flexShrink={1} width="368px" maxW="368px" marginLeft="48px" marginTop="16px" paddingRight="16px">
        <ProductDetail product={product}/>
      </Box>
    </Box>
  )
};

export default DetailsScreen;
