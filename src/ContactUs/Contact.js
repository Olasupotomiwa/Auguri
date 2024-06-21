// ContactUs.jsx
import React from 'react';
import { Flex, Box, Heading, Icon, Text } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    // Custom color for the icons
    const iconColor = '#9D7C49';

    return (
        <Flex justify="space-between" mx={'auto'} p="4"  direction={{base:'column', md: 'row'}} py={8} >
            <Box flex="1" mb={10}>
                <Flex align="center" mb="4">
                    <Icon as={FaMapMarkerAlt} boxSize="1.5rem" color={iconColor} mr="4" />
                    <Heading as="h2" size="lg" fontFamily={"Francois One"}>Location</Heading>
                </Flex>
                <Text textAlign={["center", "left"]} p={4}>
            Via Col Di Lana 20 Milan, Italy.
            <br /> Victoria Island Lagos, Nigeria
          </Text>
            </Box>
            <Box flex="1"  mb={10}>
                <Flex align="center" mb="4">
                    <Icon as={FaPhoneAlt} boxSize="1.5rem" color={iconColor} mr="4" />
                    <Heading as="h2" size="lg" fontFamily={"Francois One"}>Give Us a Call</Heading>
                </Flex>
                <Text fontWeight={'bold'}>Mobile No</Text>
                <Text>+234 858 374 4747</Text>
                <Text fontWeight={'bold'}>Office No</Text>
                <Text>+234 858 374 4747</Text>
            </Box>
            <Box flex="1" mb={10}>
                <Flex align="center">
                    <Icon as={FaEnvelope} boxSize="1.5rem" color={iconColor} mr="4" />
                    <Heading as="h2" size="lg" fontFamily={"Francois One"}>Write to Us</Heading>
                </Flex>
                <Text fontWeight={'bold'}>Email Us</Text>
                <Text>Info@AuguriTravelagent.com</Text>
               
            </Box>
        </Flex>
    );
};

export default ContactUs;
