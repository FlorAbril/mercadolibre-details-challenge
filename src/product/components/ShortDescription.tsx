import React from "react";
import {Product} from "../types";
import mock from "../mock";
import { Box, Button, Icon, Link, List, ListItem, Text } from "@chakra-ui/react";
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Rating from "./Rating";
import {FaShippingFast} from "react-icons/fa";
import {RiArrowGoForwardLine} from "react-icons/ri";
import {IoIosArrowDown} from "react-icons/io";

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

const RetursSummary: React.FC = () => {
  return(
    <Box mt="20px" display="flex">
      <Icon as={RiArrowGoForwardLine}  transform="rotate(180deg)" color="secondary.700" width="17px" height="22px" mr="10px"/>
      <Box>
      <Text fontSize="16px" fontWeight="400" lineHeight="1.3" mb="2px" color="secondary.700">
        Devolución gratis
      </Text>
      <Text color="blackAlpha.600" fontSize="sm" fontWeight="400" lineHeight="1.29" mb="2px">
        Tenés 30 días desde que lo recibís.
      </Text>
      <Link fontSize="14px" fontWeight="400" mt="4px">Conocer más</Link>
      </Box>
    </Box>
  )
}

const Stock: React.FC<Props> = ({product}) => {
  const [open, setOpen] = React.useState(false)
  const [selectedQuantity, setSelectedQuantity] = React.useState(1)
  const stock = product.available_quantity;
  const stockText = stock > 0 ? `${stock} disponibles` : `Agotado`;
  return(
    <Box>
      <Text fontSize="16px" fontWeight="600" mt="32px" color="blackAlpha.900">
        Stock disponible
      </Text>
      <Box mt="20px">
        <Box display="flex" onClick={()=>setOpen(!open)}>
          <Text>Cantidad:</Text>
          <Text fontWeight="600" ml="4px">
            {`${selectedQuantity} unidad${selectedQuantity> 1 ? "es" : ""}`} 
          </Text>
          <Icon 
            as={IoIosArrowDown} 
            color="secondary.500"
            width="15px"
            height="18px"
            ml="6px"
            transform={open ? "rotate(180deg)" : "rotate(0deg)"}
          />
          <Text ml="6px" color="blackAlpha.600" fontSize="sm" fontWeight="400">
            ({stockText})
          </Text>
        </Box>
        {open && 
          <Box 
            width="200px" 
            boxShadow="base" 
            zIndex={9} 
            position="absolute" 
            bg="white"
          >
            <List>
              {...Array(stock).fill(0).map((_, index) => {
                const quantity = index + 1;
                const isSelected = quantity === selectedQuantity;
                return(
                  <ListItem key={quantity}
                    height="48px" display="flex" alignItems="center" justifyContent="center"
                    position="relative"
                    _before={isSelected ?
                      {
                        content: '""',
                        borderLeft: "2px solid #3483fa",
                        borderRadius:" 1.5px",
                        bottom: "2px",
                        top: "2px",
                        left: "2px",
                        position: "absolute"
                      }: {}}
                    _hover={{
                      backgroundColor: "blackAlpha.50",
                      transition: "background-color .1s ease-out"
                    }}
                    onClick={()=>setSelectedQuantity(quantity)}
                  >
                    <Text 
                      color={isSelected ? "secondary.500" : "" } 
                      fontWeight={isSelected ? "600" : ""}
                    >
                      {`${quantity} unidad${quantity > 1 ? "es" : ""}`}
                    </Text>
                  </ListItem>
              )})}
            </List>
          </Box>
        }
      </Box>
    </Box>
  )
}

const MainActions: React.FC = () => {
  return(
    <Box mt="24px" display="flex" flexDirection="column">
      <Button 
        _hover={{backgroundColor: "secondary.800"}}
        backgroundColor="secondary.900"
        color="whiteAlpha.900"
        size="lg"
      >
        Comprar
      </Button>
      <Button 
       _hover={{backgroundColor: "secondary.150"}}
       backgroundColor="secondary.50"
       color="secondary.900"
       size="lg"
       mt="8px"
      >
        Agregar al carrito
      </Button>
    </Box>
  )
}

const ShortDescription: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Box border="1px solid rgb(0 0 0 / 10%)" borderRadius={8} padding="24px 16px">
      <Header product={product}/>
      <Price product={product}/>
      {product.shipping.free_shipping && <ShippingSummary product={product}/>}
      <RetursSummary/>
      <Stock product={product}/>
      <MainActions/>
    </Box>
  )
}

export default ShortDescription;