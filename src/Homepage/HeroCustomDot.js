// HeroCustomDot.jsx
import React from "react";
import { Box, Circle } from "@chakra-ui/react";

const HeroCustomDot = ({ onClick, isActive }) => {
  return (
    <Box p={2} cursor="pointer" onClick={onClick}>
      <Circle
        size="12px"
        bg={isActive ? "#DF6951" : "#e6e6e6"}
        _hover={{ opacity: 0.7 }}
      />
    </Box>
  );
};

export default HeroCustomDot;
