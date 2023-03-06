import CountryCard from './CountryCard';
import { ICountry } from '../../../types/country';
import { Box, SimpleGrid } from '@chakra-ui/react';

type CountryListProps = {
  data: ICountry[] | undefined;
};

const CountryList: React.FC<CountryListProps> = ({ data }) => {


  const renderCountries = data?.map(country => <CountryCard key={country.code} name={country.name} flag={country.flag} code={country.code} />);

  return (
    <SimpleGrid columns={5} spacing={10}>
      {renderCountries}
    </SimpleGrid>
  );
};

export default CountryList;