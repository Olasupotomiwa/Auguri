import React from "react";
import Header from './Header'
import Contact from './Contact'
import Footer from '../Homepage/Footer'
import Form from './Form'
import { Box } from "@chakra-ui/react";
import LiveChatButton from "../Homepage/Chatbtn";
const ContactUs = () => {
  return (
    <Box
    >
    <Header/>
    <Contact/>
    <Form/>
    <LiveChatButton/>
    <Footer/>
    </Box>
  );
};

export default ContactUs;
