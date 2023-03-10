import { SimpleGrid } from '@chakra-ui/react';
import { ILeagueResponse } from '../../../types/league';
import LeagueCard from './LeagueCard';


type LeagueListProps = {
  data: ILeagueResponse[] | undefined;
};


const LeagueList: React.FC<LeagueListProps> = ({ data }) => {

  const renderLeagues = data?.map((item, index) => <LeagueCard type={item.league.type} key={item.league.id} name={item.league.name} logo={item.league.logo} id={item.league.id} />);

  return (
    <SimpleGrid columns={5} spacing={10}>
      {renderLeagues}
    </SimpleGrid>
  );
};

export default LeagueList;