import React from 'react'
import { Box, Icon, Link, List, ListItem, Text } from "@chakra-ui/react"
import {GoLocation} from 'react-icons/go'
import { FaMedal } from 'react-icons/fa'
import {BiCommentCheck} from 'react-icons/bi'
import {RiTimerLine} from 'react-icons/ri'

const SellerInfo: React.FC = () => {
  return(
    <Box display={'flex'} p={'32px 16px'} flexDir={'column'}
      border={'1px solid rgba(0,0,0,.1)'}
      mt={'4'} borderRadius={'lg'}
    >
      <Text fontSize={'lg'} fontWeight={'normal'} 
        color={'blackAlpha.900'} mb={'7'}>
        Información sobre el vendedor
      </Text>
      <Box>
        <Box d={'flex'} mb={'5'}>
          <Icon as={GoLocation} m={'2px 10px 0 0'} w={'20px'}/>
          <Box>
            <Text fontSize={'md'} fontWeight={'normal'}>
              Ubicación
            </Text>
            <Text fontSize={'sm'} color={'blackAlpha.500'}>
              Boedo, Capital Federal
            </Text>
          </Box>
        </Box>
        <Box d={'flex'} mb={'5'}>
          <Icon as={FaMedal} color={'#00a650'} m={'2px 10px 0 0'} w={'20px'}/>
          <Box>
            <Text fontSize={'md'} fontWeight={'normal'} 
              color={'#00a650'}>
              MercadoLíder Platinum
            </Text>
            <Text fontSize={'sm'} color={'blackAlpha.500'}>
              ¡Es uno de los mejores del sitio!
            </Text>
          </Box>
        </Box>
        <List ml={'-6px'} w={'full'} overflow={'hidden'}>
          <ListItem borderLeft={'6px solid #fff'} float={'left'}
            h={'8px'} mt={'2px'} w={'20%'} background={'#fff0f0'}
          />
          <ListItem borderLeft={'6px solid #fff'} float={'left'}
            h={'8px'} mt={'2px'} w={'20%'} background={'#fff5e8'}
          />
          <ListItem borderLeft={'6px solid #fff'} float={'left'}
            h={'8px'} mt={'2px'} w={'20%'} background={'#fffcda'}
          />
          <ListItem borderLeft={'6px solid #fff'} float={'left'}
            h={'8px'} mt={'2px'} w={'20%'} background={'#f1fdd7'}
          />
          <ListItem borderLeft={'6px solid #fff'} float={'left'}
            h={'12px'} w={'20%'} background={'#39b54a'}
          />
        </List>
        <Box mt={'16px'}>
          <List d={'flex'} align={'center'}
            __css={{
              '& li': {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '0 5px',
                position: 'relative',
                alignItems: 'center',
                '&:not(:last-child):after': {
                  background: '#ddd',
                  content: '""',
                  height: '91%',
                  position: 'absolute',
                  right: '0',
                  top: '8%',
                  width: '1px'
                }
              }
            }}
          >
            <ListItem>
              <Text fontSize={'2xl'} fontWeight={'normal'}>
                626
              </Text>
              <Text fontSize={'xs'} color={'blackAlpha.900'}
                lineHeight={'1'} mt={'8px'}
              >
                Ventas en los últimos 60 días
              </Text>
            </ListItem>
            <ListItem>
              <Icon as={BiCommentCheck} boxSize={'28px'}
                fill={'blackAlpha.800'}
              />
              <Text fontSize={'xs'} color={'blackAlpha.900'}
                lineHeight={'1'} mt={'8px'}
              >
               Brinda buena atención
              </Text>
            </ListItem>
            <ListItem>
              <Icon as={RiTimerLine} boxSize={'28px'}
                fill={'blackAlpha.800'}
              />
              <Text fontSize={'xs'} color={'blackAlpha.900'}
                lineHeight={'1'} mt={'8px'}
              >
                Despacha sus productos a tiempo
              </Text>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Link href={'#'} fontSize={'sm'} fontWeight={'normal'}
        mt={'24px'} >
        Ver más datos sobre el vendedor
      </Link>
    </Box>
  )
}

export default SellerInfo
