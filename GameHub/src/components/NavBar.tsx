import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.png'

const NavBar = () => {
    // Hstack add every thing horizontally, pretty straightforward
  return (
    <HStack>
        <Image src={logo} boxSize="60px"></Image>
        <Text fontSize="30">GameHub</Text>
    </HStack>
      
    
  );
};

export default NavBar;
