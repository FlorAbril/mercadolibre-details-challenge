import React from "react";
import { Box, Image, Stack } from "@chakra-ui/react";
import { Product } from "../types";

interface Props {
  product: Product;
}

const Gallery: React.FC<Props> = ({product}) => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = product.pictures

  return (
    <Box display="flex">
      <Stack marginLeft="16px" marginTop="16px">
        {images.map((image, index) => (
          <Box 
            borderRadius="4px" borderStyle="solid" 
            borderWidth={currentImage === index ? "2px" : "1px"}
            borderColor={currentImage === index ? "secondary.500" : "blackAlpha.400"}
            boxSize="48px" padding="2px"
            onClick={() => {setCurrentImage(index)}}
          >
            <Image
              key={image.id}
              src={image.secure_url}
              width="100%"
              height="100%"
              objectFit='contain'
            />
          </Box>
        ))}
      </Stack>
      <Box width="700px" height="500px" padding="16px" marginTop="40px">
        <Image 
          src={images[currentImage].secure_url}
          alt="product"
          objectFit="cover"
          height="100%"
          margin="auto"
        />
      </Box>
    </Box>
  )
}

export default Gallery;