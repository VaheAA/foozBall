import React from 'react';
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
      <Heading>{data![0].country.name}</Heading>
      <LeagueList />
    </CustomContainer>
  );
};

export default Leagues;