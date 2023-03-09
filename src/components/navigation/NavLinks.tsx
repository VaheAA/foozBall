import { Box, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
useAppDispatch;
import { logout } from '../../store/reducers/auth/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useEffect, useState } from 'react';


const NavLinks = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { isLoggedIn, user } = useTypedSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();



  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      dispatch(logout());
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <Box as="nav" ml="auto" mr={8}>
      <Wrap spacing={4}>
        {!isLoggedIn && <WrapItem alignItems="center">
          <NavLink to="/login">Login</NavLink>
        </WrapItem>}
        {!isLoggedIn && <WrapItem alignItems="center">
          <NavLink to="/register">Register</NavLink>
        </WrapItem>}
        {isLoggedIn && <WrapItem alignItems="center">
          <NavLink to="/profile">Profile</NavLink>
        </WrapItem>}
        {isLoggedIn
          && <WrapItem alignItems="center">
            <Button onClick={handleLogout} colorScheme="orange">Logout</Button>
          </WrapItem>}
      </Wrap>
    </Box>
  );
};

export default NavLinks;