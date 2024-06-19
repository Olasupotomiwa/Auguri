import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const LiveChatButton = () => {
  return (
    <Box pos={'relative'}>
      <Box
        position="fixed"
        bottom={{ base: '6', md: '8' }}
        right={{ base: '6', md: '8' }}
        bg="#9D7C49"
        color="white"
        borderRadius="50%"
        width={{ base: '80px', md: '100px' }}
        height={{ base: '80px', md: '100px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow="lg"
        cursor="pointer"
        zIndex="999"
        fontFamily={"Poppins"}
        fontWeight={"600"}
        animation="bubble 3s infinite"
        outline='0'
        _focus={{ outline: '0' }}
        _hover={{ outline: '0' }}
        as='a'
        href="https://wa.me/2348061759374"
        target="_blank"
      >
        <Flex flexDirection="column" alignItems="center">
          <ChatIcon boxSize={{ base: '4', md: '6' }} />
          <Text fontSize="sm" fontWeight="bold" textAlign="center">
            24/7
          </Text>
          <Text fontSize="xs" textAlign="center">
            Live Chat
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default LiveChatButton;
