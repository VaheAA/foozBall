import { useFetchAllCountriesQuery } from '../../services/countryApi/countriesService';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import CountryList from './components/CountryList';
import { Box, Heading } from '@chakra-ui/react';

const Countries: React.FC = () => {

  const { data, isLoading } = useFetchAllCountriesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box display="flex" flexDirection="column" gap={12}>
      <Heading>Browse countries</Heading>
      <CountryList data={data} />
    </Box>
  );
};

export default Countries;