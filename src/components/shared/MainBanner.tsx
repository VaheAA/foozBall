import { Box, Image, Grid, Text, Heading, Button, Link, Stack, Container } from '@chakra-ui/react';
import bannerImage from '../../assets/banner.jpg';
import { Link as RouterLink } from 'react-router-dom';

const MainBanner: React.FC = () => {
  return (
    <Box position="relative" height="650px" width="100%">
      <Image src={bannerImage} height="100%" width="100%" objectFit="cover" />
      <Container maxW="1440px" mx="auto">
        <Stack position="absolute" top="40%" px={4} py={6} spacing={6} direction="column" rounded="md" backgroundColor="whiteAlpha.800">
          <Box display="flex" flexDirection="column" gap={6}>
            <Heading as="h1" fontSize={48} color="gray.600">Welcome to Foozball!</Heading>
            <Text fontSize={24} color="gray.600">Start your adventure in the world of football now!</Text>
          </Box>
          <RouterLink to='/countries'>
            <Button fontSize={20} colorScheme="orange" alignSelf="baseline" size="lg">
              Explore countries
            </Button>
          </RouterLink>
        </Stack>
      </Container>
    </Box>
  );
};

export default MainBanner;