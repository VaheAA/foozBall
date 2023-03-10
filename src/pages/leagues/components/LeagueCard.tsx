import { Card, Heading, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ILeague } from '../../../types/league';

const LeagueCard: React.FC<ILeague> = ({ id, name, type, logo }) => {
  return (
    <RouterLink to={`/leagues/${id}`}>
      <Card overflow='hidden'
        variant='outline'
        direction='column' p={2}
        transition="ease 0.3s"
        _hover={{ boxShadow: ' rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; ' }}
      >
        <Heading fontSize={20} mb={4}>{name}</Heading>
        <Image src={logo} />
      </Card>
    </RouterLink>
  );
};

export default LeagueCard;