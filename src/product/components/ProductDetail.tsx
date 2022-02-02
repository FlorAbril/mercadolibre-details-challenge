import React from "react";

import {Product} from "../types";
import mock from "../mock";
import { Box, Icon, Text } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Rating from "./Rating";

interface Props {
  product: Product;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductDetail: React.FC<Props> = ({product = mock.product}) => {
  const [isLiked, setIsLiked] = React.useState(false)
  return (
    <Box border="1px solid rgb(0 0 0 / 10%)" borderRadius={8} padding="24px 16px">
      <Box>
        <Text color="blackAlpha.600" fontSize="sm" marginBottom="8px" marginRight="40px">
          {capitalizeFirstLetter(product.condition)} | {product.sold_quantity} vendidos
        </Text>
        <Box display="flex">
          <Text  fontSize="22" fontWeight="600" lineHeight="1.18" marginRight="28px" marginBottom="8px">
            {product.title}
          </Text>
          <Icon as={isLiked ? BsHeartFill : BsHeart} color="secondary.500" width="22px" height="22px" onClick={()=>setIsLiked(isLiked => !isLiked)} cursor="pointer"/>
        </Box>
        <Box display="flex" alignItems="center">
          <Rating rating={3.5}/>
          <Text color="blackAlpha.600" fontSize="sm" marginLeft="5px">
            40 opiniones
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductDetail;