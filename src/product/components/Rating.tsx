import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

type size = "sm" | "md" | "lg"

interface Props {
  w?: string;
  h?: string;
  m?: string;
}

const FullStar: React.FC<Props> = ({w,h,m}) => {
  return  <Icon as={BsStarFill} color="secondary.500" width={w} height={h} margin={m}/>;
}
const HalfStar: React.FC<Props> = ({w,h,m}) => {
  return <Icon as={BsStarHalf} color="secondary.500" width={w} height={h}  margin={m}/>;
}
const EmptyStar : React.FC<Props> = ({w,h,m}) => {
  return <Icon as={BsStarFill} color="blackAlpha.200" width={w} height={h} margin={m}/>;
}


const Rating : React.FC<{rating: number, size: size, margin: string}> = ({rating, size, margin}) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 > 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  const w = size === "sm" ? "15px" : size === "md" ? "16.8px" : "24px";
  const h = size === "sm" ? "14px" : size === "md" ? "16px" : "22.8px";

  return (
    <Box display="flex" alignItems="center">
        {[...Array(fullStars)].map((_, i) => <FullStar key={i} w={w} h={h} m={margin}/>)}
        {[...Array(halfStars)].map((_, i) => <HalfStar key={i} w={w} h={h}  m={margin}/>)}
        {[...Array(emptyStars)].map((_, i) => <EmptyStar key={i} w={w} h={h}  m={margin}/>)}
    </Box>
  )
}

export default Rating;