import { useParams } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Stack,
  Text,
  Image
} from '@chakra-ui/react';
import { useFetchLeagueStatsQuery } from '../../services/leagueApi/leagueService';
import CustomContainer from '../../components/shared/CustomContainer';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const LeagueDetails: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useFetchLeagueStatsQuery({ season: 2020, league: +id! });

  console.log(data);

  if (isLoading) return <LoadingSpinner />;


  return (
    <CustomContainer>
      <Box display="flex" flexDirection="column" gap={12} pt={20}>
        <Box display="flex" alignItems="center" gap={10}>
          <Image boxSize="120px" src={data?.league.flag} />
          <Heading>Football Leagues of {data?.league.country} - {data?.league.name}</Heading>
        </Box>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>League statistics of {data?.league.country} - {data?.league.name}</TableCaption>
            <Thead>
              <Tr>
                <Th>Position</Th>
                <Th>Club</Th>
                <Th>Form</Th>
                <Th>Matches</Th>
                <Th>Win</Th>
                <Th>Draw</Th>
                <Th>Lose</Th>
                <Th>Goals For</Th>
                <Th>Goals Against</Th>
                <Th isNumeric>Goal Difference</Th>
                <Th isNumeric>Points</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.league.standings[0].map((standing, index) => (
                <Tr key={index}>
                  <Td>{standing.rank}</Td>
                  <Td display="flex" alignItems="center" gap={2}>
                    <Image boxSize="30px" borderRadius='full' src={standing.team.logo} />
                    <Text>{standing.team.name}</Text>
                  </Td>
                  <Td>{standing.form}</Td>
                  <Td isNumeric>{standing.all.played}</Td>
                  <Td isNumeric>{standing.all.win}</Td>
                  <Td isNumeric>{standing.all.draw}</Td>
                  <Td isNumeric>{standing.all.goals.for}</Td>
                  <Td isNumeric>{standing.all.goals.against}</Td>
                  <Td isNumeric>{standing.all.lose}</Td>
                  <Td isNumeric>{standing.goalsDiff}</Td>
                  <Td isNumeric>{standing.points}</Td>
                  <Td>{standing.description}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </CustomContainer>
  );
};

export default LeagueDetails;