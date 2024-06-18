// ContactUs.jsx
import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Text,
    Input,
    Textarea,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import path from '../assets/path.png';

const ContactUs = () => {
    return (
        <Flex direction={{ base: 'column', md: 'row' }} py={8} px={{ base: '4', md: '8' }}>
            <Box flex="1" borderRadius={{ base: '15px 15px 0 0', md: '15px 0 0 15px' }} overflow="hidden">
                <img
                    src={path}
                    alt="Travel"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                />
            </Box>
            <Box
                flex="1"
                p={{ base: '4', md: '8' }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                bg="#F2F2F2"
                borderRadius={{ base: '0 0 15px 15px', md: '0 15px 15px 0' }}
            >
                <Heading as="h1" mb="4" fontFamily="Francois One">
                    Plan Your Next Trip
                </Heading>
                <Text mb="8" fontFamily="Poppins">
                    Write to us for personalized travel advice or for information
                    on group travel and last minute travel. All travel is insured
                    and safe.
                </Text>
                <FormControl id="name" mb="4" fontFamily="Poppins">
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="email" mb="4" fontFamily="Poppins">
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="message" mb="4" fontFamily="Poppins">
                    <FormLabel>Message</FormLabel>
                    <Textarea />
                </FormControl>
                <Button colorScheme="teal" size="lg">
                    Submit
                </Button>
            </Box>
        </Flex>
    );
};

export default ContactUs;
