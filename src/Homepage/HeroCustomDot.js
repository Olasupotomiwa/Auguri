import React from "react";
import { Box } from "@chakra-ui/react";

const HeroCustomDot = ({ onClick, isActive }) => {
  return (
    <Box p={2} cursor="pointer" onClick={onClick}>
      <Box
        width="20px"
        height="3px"
        bg={isActive ? "#DF6951" : "#e6e6e6"}
        borderRadius="2px"
        _hover={{ opacity: 0.7 }}
        transition="background-color 0.3s"
      />
    </Box>
  );
};

export default HeroCustomDot;
