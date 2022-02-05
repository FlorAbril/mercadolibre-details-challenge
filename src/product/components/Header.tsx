import React from "react";
import { Box, Link, List, ListItem, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  return(
    <Box mb={'12px'}> 
      <Box m={'16px 0 12px 0'}>
        <List fontSize={'14px'} display={'flex'}
          __css={{
            // all exept the first one
            '& > li:not(:first-of-type)': {
              cursor: 'pointer'
            }
          }}
        >
          <ListItem fontWeight={600} pr={'4px'}>
            Tambien puede interesarte: 
          </ListItem>
          <ListItem>
            peluche 
          </ListItem>
          <ListItem _before={{
            content:'"-"',
            padding: '0 4px'
          }}>
            huggy wuggy
          </ListItem>
        </List>
      </Box>
      <Box mt={'12px'} display={'flex'} lineHeight={'1.35'} fontSize={'14px'} fontWeight={'400'} >
        <Box display={'flex'}  mr={'auto'}>
          <Text mr={'11.5px'}
            _after={{
              backgroundColor:" rgba(0,0,0,.2)",
              display:'inline-block',
              verticalAlign: 'middle',
              content: '""',
              height: "12px",
              marginLeft:"11.5px",
              width: "1px"
            }}
          >
            Volver al listado
          </Text>
          <List d={'flex'}
            __css={{
             '& > li:not(:first-of-type)': {
               '&:before': {
                content: '">"',
                padding: '0 6px'
               }
             }
            }}
          >
            <ListItem>
              <Link>Juegos y Juguetes</Link>
            </ListItem>
            <ListItem>
              <Link>Peluches</Link>
            </ListItem>
          </List>
        </Box>
        <Box ml={'auto'}>
          <Link>Compartir</Link>
        </Box>
        <Box>
          <Link
             _before={{
              content:'""',
              display:'inline-block',
              backgroundColor: 'rgb(0 0 0 / 20%)',
              height: '14px',
              margin: '0 10px 0 10px',
              width: '1px',
              verticalAlign: 'middle'
            }}
          >
            Vender uno igual
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Header;