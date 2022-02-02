import React from "react";
import {Product} from "../types";
import mock from "../mock";
import { Box, Icon, Link, Text } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Rating from "./Rating";
import {FaShippingFast} from "react-icons/fa";
import {RiArrowGoForwardLine} from "react-icons/ri";

interface Props {
  product: Product;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Header: React.FC<Props> = ({product}) => {
  const [isLiked, setIsLiked] = React.useState(false)
  return(
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
  )
}

const Price: React.FC<Props> = ({product}) => {
  const price = product.price.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });
  const duesAmount = (product.price * 1.5) / 12;
  const formatedDuesAmount = duesAmount.toLocaleString("es-ar", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2,
  });

  return(
    <Box mt="16px">
      <Text fontSize="36px" fontWeight="300" lineHeight="1">
        {price}
      </Text>
      <Text fontSize="18px" fontWeight="400">
        en 12x de {formatedDuesAmount} pagando con Mercado Crédito
      </Text>
      <Link fontSize="14px" fontWeight="400">Ver los medios de pago</Link>
    </Box>
  )
}

const ShippingSummary: React.FC<Props> = ({product}) => {
  return(
    <Box mt="20px" display="flex">
      <Icon as={FaShippingFast} color="secondary.700" width="22px" height="22px" mr="10px"/>
      <Box>
      <Text fontSize="16px" fontWeight="400" lineHeight="1.3" mb="2px" color="secondary.700">
        Llega gratis <Text as="span" fontWeight="600">mañana</Text>
      </Text>
      <Link fontSize="14px" fontWeight="400" mt="4px">Ver más formas de entrega</Link>
      </Box>
    </Box>
  )
}

const RetursSummary: React.FC<Props> = ({product}) => {
  return(
    <Box mt="20px" display="flex">
      <Icon as={RiArrowGoForwardLine}  transform="rotate(180deg)" color="secondary.700" width="17px" height="22px" mr="10px"/>
      <Box>
      <Text fontSize="16px" fontWeight="400" lineHeight="1.3" mb="2px" color="secondary.700">
        Devolución gratis
      </Text>
      <Text color="blackAlpha.600" fontSize="sm" fontWeight="400" lineHeight="1.29" mb="2px">Tenés 30 días desde que lo recibís.</Text>
      <Link fontSize="14px" fontWeight="400" mt="4px">Conocer más</Link>
      </Box>
    </Box>
  )
}

const ShortDescription: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Box border="1px solid rgb(0 0 0 / 10%)" borderRadius={8} padding="24px 16px">
      <Header product={product}/>
      <Price product={product}/>
      {product.shipping.free_shipping && <ShippingSummary product={product}/>}
      <RetursSummary product={product}/>
    </Box>
  )
}

export default ShortDescription;