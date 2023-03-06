import { Box, Wrap, WrapItem, Button, IconButton } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <Box as="nav">
      <Wrap spacing={4}>
        <WrapItem alignItems="center">
          <NavLink to="/login">Login</NavLink>
        </WrapItem>
        <WrapItem alignItems="center">
          <NavLink to="/login">Register</NavLink>
        </WrapItem>
        <WrapItem alignItems="center">
          <Button colorScheme="orange">Logout</Button>
        </WrapItem>
        <WrapItem alignItems="center">
          <NavLink to="/login">Profile</NavLink>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default NavLinks;