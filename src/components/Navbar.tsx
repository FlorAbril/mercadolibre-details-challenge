import { SearchIcon } from "@chakra-ui/icons";
import { Box, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import {FiMapPin} from 'react-icons/fi'

const Navbar: React.FC = () => {
  return(
    <Box h="100px" bg="#fff159" position="relative">
      <Box maxW="1200px" margin="0 auto" p="8px 0" display="flex">
        <Box mr={'24px'}>
          <Image
            src="/src/assets/logo.png"
            width="134px"
            height="34px"
            mb="8px"
          />
          <Box w="170px" h="40px" p="0 8px" 
            border="1px solid transparent" 
            borderRadius="4px"
            display="flex"
            cursor={'pointer'}
            _hover={{borderColor:"#eadd61"}}
          >
            <Icon as={FiMapPin} w="18px" h="22px" mt="9px" color="blackAlpha.700"/>
            <Box  overflow="hidden" pl="6px">
              <Text fontSize="12px" color="blackAlpha.600" lineHeight="10px" 
                h="20px" pt="6px"
              >
                Enivar a Florencia
              </Text>
              <Text fontSize="14px" color="#333" lineHeight="13px" h="20px"
                overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis"
              >
                Hernando de Magallanes 1979
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={'600px'} mr={'40px'}>
          <InputGroup h={'48px'} pb={'8px'}>
            <Input 
              placeholder='Buscar productos, marcas y más…'
              variant='unstyled' 
              borderRadius="2px"
              boxShadow={'base'}
              bg={'white'}
              p={'7px 60px 9px 15px'}
            />
            <InputRightElement  w={'46px'} cursor={'pointer'}
              children={
                <SearchIcon 
                  color='blackAlpha.600' 
                  lineHeight={'21px'}
              />} 
              _before={{
                content: '""',
                display: "block",
                height: "26px",
                borderLeft: "1px solid #e6e6e6",
                position: "absolute",
                top: "6.5px",
                right: "45px"
              }}
            /> 
          </InputGroup>
          <List fontSize={'14px'} lineHeight={'22px'} fontWeight={'400'} 
            color={'#33333399'} pt={'12px'}
            __css={{
              '& > li': {
                paddingRight: "18px",
                display: "inline-block",
              },
              '& p': {
                cursor: 'pointer',
                '&:hover': {
                  color:"#333333e6"
                }
              }
            }}
          >
            <ListItem>
              <Text>Categorías</Text>
            </ListItem>
            <ListItem>
              <Text>Ofertas</Text>
            </ListItem>
            <ListItem>
              <Text>Historial</Text>
            </ListItem>
            <ListItem>
              <Text>Supermercado</Text>
            </ListItem>
            <ListItem>
              <Text>Moda</Text>
            </ListItem>
            <ListItem>
              <Text>Vender</Text>
            </ListItem>
            <ListItem>
              <Text>Ayuda</Text>
            </ListItem>
          </List>
        </Box>
        <Box minW={'295px'} h={'52px'} mt={'48px'} color={'#333'}>
            <List fontSize={'14px'} lineHeight={'40px'}
              __css={{
                '& > li': {
                  display: "inline-block",
                  paddingRight: "16px"
                },
                '& p': {
                  cursor: 'pointer',
                  '&:hover': {
                    color:"#000"
                  }
                }
              }}
            >
              <ListItem>
                <Text>Usuario</Text>
              </ListItem>
              <ListItem>
                <Text>Mis compras</Text>
              </ListItem>
              <ListItem>
                <Text>Favoritos</Text>
              </ListItem>
            </List>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar;