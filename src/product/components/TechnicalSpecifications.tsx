import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import {
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react'
import { Product } from "../types";


interface Props {
  product: Product;
}

interface spec {
  id: string;
  name: string;
  value_name: string;
}

const TechnicalSpecifications: React.FC<Props> = ({product}) => {
  const mainSpecs = product.main_attributes
  const secondarySpecs = product.other_atributes

  return(
    <Box borderTopWidth="1px" borderTopStyle="solid" borderTopColor="blackAlpha.150" padding="40px 0">
      <Text fontSize="24px" fontWeight="400" lineHeight="1.25" pb="32px" color="blackAlpha.900">
        Características principales
      </Text>
      <Table border="1px solid #ededed">
        <Tbody>
          {mainSpecs.map((spec:spec,i:number) => (
            <Tr bg="white" _odd={{
              backgroundColor: "#f5f5f5",
            }}
              key={spec.id}
            > 
              <Td bg={i%2 === 0 ? "#ebebeb" : "#f5f5f5"}>
                <Text fontWeight="600" lineHeight="1.35">
                  {spec.name}
                </Text>
              </Td>
              <Td w="73%">
                <Text>
                  {spec.value_name}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text
        fontSize="20px" fontWeight="400" lineHeight="1.25" pb="24px" mt="32px"
      >
        Otras características
      </Text>
      <Grid gridTemplateColumns="repeat(2,1fr)">
        {secondarySpecs.map((spec:spec,i:number) => (
          <GridItem  key={spec.id} fontSize="14px" mr="24px" mb="12px" ml="50px" _odd={{marginLeft:"0px"}}>
            <Box display="flex">
              <Text fontWeight="600" >
                {spec.name}:
              </Text>
              <Text ml={1} fontWeight="400">
                {spec.value_name}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default TechnicalSpecifications;