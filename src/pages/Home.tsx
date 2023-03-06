import { useFetchAllCountriesQuery } from '../services/countryApi/countriesService';

const Home: React.FC = () => {

  const { data } = useFetchAllCountriesQuery();

  return (
    <div>Home</div>
  );
};

export default Home;