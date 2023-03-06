import { Box, Container, Flex, Image, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from '../../assets/logo.png';
import NavLinks from './NavLinks';


interface HeaderProps {
  toggleSidebar: () => void;
}

const MainHeader: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <Box as="header" py={4}>
      <Container maxW="1300px" mx="auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Image src={Logo} />
          </Link>
          <NavLinks />
          <IconButton
            colorScheme='orange'
            aria-label='Open sidebar'
            icon={<HamburgerIcon />}
            onClick={toggleSidebar}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default MainHeader;