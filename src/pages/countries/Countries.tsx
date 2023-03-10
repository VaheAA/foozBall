import { useFetchAllCountriesQuery } from '../../services/countryApi/countriesService';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import CountryList from './components/CountryList';
import { Box, Heading } from '@chakra-ui/react';
import SearchInput from '../../components/fields/SearchInput';
import React, { useState } from 'react';
import { ICountry } from '../../types/country';
import CustomContainer from '../../components/shared/CustomContainer';

const Countries: React.FC = () => {
  const [filteredCountries, setFilteredCountries] = useState<ICountry[] | undefined>([]);

  const { data, isLoading } = useFetchAllCountriesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredCountries(data?.filter(country => country.name.toLowerCase().includes(e.target.value.toLowerCase())));
  };

  return (
    <CustomContainer>
      <Box display="flex" flexDirection="column" gap={12} pt={20}>
        <Heading>Browse countries</Heading>
        <SearchInput onChange={handleSearchChange} label='Search countries' id="country-search" />
        <CountryList data={filteredCountries!.length > 0 ? filteredCountries : data} />
      </Box>
    </CustomContainer>
  );
};

export default Countries;