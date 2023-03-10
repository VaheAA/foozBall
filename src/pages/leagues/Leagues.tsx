import { useFetchLeaguesQuery } from '../../services/leagueApi/leagueService';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { Box, Heading, Image } from '@chakra-ui/react';
import LeagueList from './components/LeagueList';
import CustomContainer from '../../components/shared/CustomContainer';

const Leagues: React.FC = () => {
  const { code } = useParams();
  const { data, isLoading } = useFetchLeaguesQuery(code);


  if (isLoading) return <LoadingSpinner />;


  return (
    <CustomContainer>
      <Box display="flex" flexDirection="column" gap={12} pt={20}>
        <Box display="flex" alignItems="center" gap={10}>
          <Image boxSize="120px" src={data![0].country.flag} />
          <Heading>Football Leagues of {data![0].country.name}</Heading>
        </Box>
        <LeagueList data={data} />
      </Box>
    </CustomContainer>
  );
};

export default Leagues;