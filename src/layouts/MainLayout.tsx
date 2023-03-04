import { Outlet } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import MainHeader from '../components/navigation/MainHeader';


const MainLayout: React.FC = () => {
  return (
    <>
      <MainHeader />
      <Box as="main">
        <Container maxW="1300px" mx="auto">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default MainLayout;