import { Box, Image, Grid, GridItem, Text, Heading, Button, Link, Stack } from '@chakra-ui/react';
import CustomContainer from '../../components/shared/CustomContainer';
import MainBanner from '../../components/shared/MainBanner';


const Home: React.FC = () => {
  return (
    <Box>
      <MainBanner title="Welcome to Foozball!" subtitle="Start your adventure in the world of football now!" button="Explore countries" href="/countries" />
      <CustomContainer>
        <Stack pt={4} direction="column">
          <Heading as="h2" my={4} textAlign="center">Explore FoozBall!</Heading>
          <Grid h='600px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}>
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
          </Grid>
        </Stack>
      </CustomContainer>
    </Box>
  );
};

export default Home;