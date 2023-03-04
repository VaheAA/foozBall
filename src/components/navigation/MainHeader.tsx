import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import NavLinks from './NavLinks';

const MainHeader = () => {
  return (
    <Box as="header" py={4}>
      <Container maxW="1300px" mx="auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Image src={Logo} />
          </Link>
          <NavLinks />
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;