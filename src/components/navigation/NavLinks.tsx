import { Box, Wrap, WrapItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <Box as="nav">
      <Wrap>
        <WrapItem>
          <NavLink to="/login">Login</NavLink>
        </WrapItem>
        <WrapItem>
          <NavLink to="/login">Register</NavLink>
        </WrapItem>
        <WrapItem>
          <NavLink to="/login">Profile</NavLink>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default NavLinks;