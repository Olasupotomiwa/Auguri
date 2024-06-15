
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, CalendarIcon, InfoOutlineIcon, PhoneIcon, AtSignIcon } from '@chakra-ui/icons';

import Logo from '../assets/Logo.png';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box fontFamily={"Poppins"} bg="white">
      <Flex
        color="#000000"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 2, md: 8 }}  // Adjusting padding for mobile and desktop
        align={'center'}
        justify={{ base: 'space-between', md: 'center' }}
      >
        <Flex flex={{ base: 1, md: 'auto' }} align="center">
          <Image src={Logo} h={'65px'} />
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
        <Flex flex={{ base: 1, md: 'auto' }} justify="flex-end" align="center">
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            display={{ base: 'flex', md: 'none' }}
          />
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            color={'white'}
            bg={'#9D7C49'}
            href={'#'}
            _hover={{
              opacity: '0.9'
            }}
            display={{ base: 'none', md: 'inline-flex' }}
            ml={4}
            leftIcon={<CalendarIcon />}
          >
            Book Now
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = '#000000';
  const linkHoverColor = '#9D7C49';

  return (
    <Stack direction={'row'} spacing={4} justify={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Text
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'18px'}
            fontWeight={600}
            color={linkColor}
            display="flex"
            alignItems="center"
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.icon}
            <Box ml={2}>{navItem.label}</Box>
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  const linkColor = '#000000';
  const linkHoverColor = '#9D7C49';

  return (
    <Stack bg="white" p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} py={2} display="flex" alignItems="center" _hover={{
          textDecoration: 'none',
          color: linkHoverColor,
        }}>
          {navItem.icon}
          <Text
            as="a"
            href={navItem.href ?? '#'}
            fontWeight={600}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
            ml={2}
          >
            {navItem.label}
          </Text>
        </Box>
      ))}
      <Button
        as={'a'}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'#9D7C49'}
        href={'#'}
        _hover={{
          opacity: '0.9',
        }}
        mt={4}
        w={'full'}
        leftIcon={<CalendarIcon />}
      >
        Book Now
      </Button>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: <AtSignIcon />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <InfoOutlineIcon />,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <PhoneIcon />,
  },
];
