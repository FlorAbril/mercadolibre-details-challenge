import React  from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';

const Banner: React.FC = () => {
  return(
    <Box bg={'red.500'}>
      <Heading  as='h5' size='sm' textAlign={'center'} padding={'0.25rem'}>
        Este es un sitio ficticio realizado para un challenge, no es la página oficial de Mercado Libre.
        Visite {' '}
          <Link href='https://www.mercadolibre.com.ar'>
            https://www.mercadolibre.com.ar
          </Link> 
         {' '} para ver la página oficial.
      </Heading>
    </Box>
  )
}

export default Banner;