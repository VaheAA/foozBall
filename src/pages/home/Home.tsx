import { Box, Image, Grid, Text, Heading, Button, Link, Stack, Container } from '@chakra-ui/react';
import CustomContainer from '../../components/shared/CustomContainer';
import MainBanner from '../../components/shared/MainBanner';


const Home: React.FC = () => {
  return (
    <Box>
      <MainBanner />
      <CustomContainer>
        <h1>Hello</h1>
      </CustomContainer>
    </Box>
  );
};

export default Home;