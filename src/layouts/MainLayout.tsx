import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import MainHeader from '../components/navigation/MainHeader';
import Sidebar from '../components/sidebar/Sidebar';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAppDispatch } from '../hooks/useTypedSelector';
import { setCredentials } from '../store/reducers/auth/authSlice';
import { useAuth } from '../hooks/useAuth';

const MainLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { userData } = useAuth();

  const dispatch = useAppDispatch();
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (userData)
      dispatch(setCredentials(userData));
  }, []);

  return (
    <>
      <MainHeader toggleSidebar={handleOpen} />
      <Box as="main" pt={28}>
        <Container maxW="1300px" mx="auto">
          <Outlet />
        </Container>
      </Box>
      <Sidebar isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default MainLayout;