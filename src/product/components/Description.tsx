import React from 'react'
import {Box, Text} from '@chakra-ui/react'

const Description: React.FC = () => {
  return (
    <Box pt={'10'} pb={'10'} borderTop={'1px solid rgba(0,0,0,.1)'}>
      <Text fontSize={'2xl'} fontWeight={'400'} pb={'6'}>
        Descripción
      </Text>
      <Text fontSize={'xl'} color={'#666'} fontWeight={'400'}>
        PRODUCTOS IMPORTADOS <br/>
        <br/>
        Peluches STITCH /ANGEL 1 METRO hermoso PRECIO X CADA UNO <br/>
        <br/>
        -Entregamos a una cuadra de SAN JUAN Y BOEDO <br/>
        <br/>
        -HACEMOS ENVIOS en caba (Se realiza por motomensajería, si realiza la compra antes de las 12 m 
        de lunes a viernes en días hábiles la entrega se realiza en el día, si realiza 
        la compra después de las 12 am la entrega se realiza el primer día hábil 
        luego de realizada la compra, si necesita que realicemos la entrega en una 
        franja horaria al finalizar la compra escríbanos su preferencia por mensajería 
        de Mercadolibre para tenerlo en cuenta. <br/>
        -Servicio de Mensajería en CABA , consulte el costo, los días de lluvia el 
        servicio tiene un recargo del 50% <br/>
        <br/>
        -ENVIOS A TODO EL PAIS (Realizamos envíos hasta su domicilio dentro de la 
        República Argentina por el servicio de MercadoEnvíos. El valor del mismo lo 
        obtendrá ingresando su código postal en el calculador. <br/>
        <br/>
        -SU PREGUNTA NO MOLESTA
      </Text>
    </Box>
  )
}

export default Description