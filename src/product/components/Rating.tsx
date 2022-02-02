import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

interface Props {
  width?: string;
  height?: string;
}

const FullStar: React.FC<Props> = ({width,height}) => {
  return <Icon as={BsStarFill} color="secondary.500" width={width} height={height} marginRight="3px"/>;
}
const HalfStar: React.FC<Props> = ({width,height}) => {
  return <Icon as={BsStarHalf} color="secondary.500" width={width} height={height} marginRight="3px"/>;
}
const EmptyStar : React.FC<Props> = ({width,height}) => {
  return <Icon as={BsStarFill} color="blackAlpha.200" width={width} height={height} marginRight="3px"/>;
}

const Rating : React.FC<{rating: number}> = ({rating}) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 > 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <Box display="flex" alignItems="center">
        {[...Array(fullStars)].map((_, i) => <FullStar key={i} width="15px" height="14px"/>)}
        {[...Array(halfStars)].map((_, i) => <HalfStar key={i} width="15px" height="14px"/>)}
        {[...Array(emptyStars)].map((_, i) => <EmptyStar key={i} width="15px" height="14px"/>)}
    </Box>
  )
}

export default Rating;