import { Box, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const NavLinks = () => {

  const { isLoggedIn } = useTypedSelector(state => state.auth);

  return (
    <Box as="nav" ml="auto" mr={8}>
      <Wrap spacing={4}>
        {!isLoggedIn && <WrapItem alignItems="center">
          <NavLink to="/login">Login</NavLink>
        </WrapItem>}
        {!isLoggedIn && <WrapItem alignItems="center">
          <NavLink to="/register">Register</NavLink>
        </WrapItem>}
        {isLoggedIn
          && <WrapItem alignItems="center">
            <Button colorScheme="orange">Logout</Button>
          </WrapItem>}
        {isLoggedIn && <WrapItem alignItems="center">
          <NavLink to="/profile">Profile</NavLink>
        </WrapItem>}
      </Wrap>
    </Box>
  );
};

export default NavLinks;