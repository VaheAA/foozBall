import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import MainHeader from '../components/navigation/MainHeader';
import Sidebar from '../components/sidebar/Sidebar';


const MainLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MainHeader toggleSidebar={handleOpen} />
      <Box as="main">
        <Container maxW="1300px" mx="auto">
          <Outlet />
        </Container>
      </Box>
      <Sidebar isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default MainLayout;