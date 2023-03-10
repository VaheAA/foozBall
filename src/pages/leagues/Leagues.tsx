import { useFetchLeaguesQuery } from '../../services/leagueApi/leagueService';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { Box, Heading } from '@chakra-ui/react';
import LeagueList from './components/LeagueList';
import CustomContainer from '../../components/shared/CustomContainer';

const Leagues: React.FC = () => {
  const { code } = useParams();
  const { data, isLoading } = useFetchLeaguesQuery(code);


  if (isLoading) return <LoadingSpinner />;


  return (
    <CustomContainer>
      <Box display="flex" flexDirection="column" gap={12} pt={20}>
        <Heading>Football Leagues of {data![0].country.name}</Heading>
        <LeagueList data={data} />
      </Box>
    </CustomContainer>
  );
};

export default Leagues;