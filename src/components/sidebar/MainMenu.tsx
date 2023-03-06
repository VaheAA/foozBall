import {
  Menu,
  MenuItem,
  Icon,
  Text
} from '@chakra-ui/react';
import { FcGlobe } from 'react-icons/fc';
import { GiTrophyCup } from 'react-icons/gi';
import { Link } from 'react-router-dom';


const MainMenu: React.FC = () => {
  return (
    <Menu matchWidth>
      <Link to="/countries">
        <MenuItem py={5} px={2} fontSize={20} display="flex" alignItems="center" gap={4}>
          <Icon as={FcGlobe} alignSelf="center" />
          <Text>
            Countries
          </Text>
        </MenuItem>
      </Link>
      <Link to="/international">
        <MenuItem py={5} px={2} fontSize={20} display="flex" alignItems="center" gap={4}>
          <Icon as={GiTrophyCup} alignSelf="center" />
          <Text>
            International
          </Text>
        </MenuItem>
      </Link>
    </Menu>
  );
};

export default MainMenu;


