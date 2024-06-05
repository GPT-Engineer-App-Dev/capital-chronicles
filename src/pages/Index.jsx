import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">World</Link>
            <Link href="#" color="white">Business</Link>
            <Link href="#" color="white">Tech</Link>
            <Link href="#" color="white">Markets</Link>
            <Link href="#" color="white">Opinion</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Featured News */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>Featured News</Heading>
          <Box mb={8}>
            <Image src="/images/featured-news.jpg" alt="Featured News" mb={4} />
            <Heading as="h3" size="lg">Breaking News: Market Hits Record Highs</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="md">Tech Innovations in 2023</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Global Market Trends</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box>
              <Heading as="h4" size="md">Political Shifts Worldwide</Heading>
              <Text mt={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={8} mt={8}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#" color="white">Privacy Policy</Link>
            <Link href="#" color="white">Terms of Service</Link>
            <Link href="#" color="white">Contact Us</Link>
          </HStack>
          <HStack spacing={4}>
            <Link href="#" color="white"><FaTwitter /></Link>
            <Link href="#" color="white"><FaFacebook /></Link>
            <Link href="#" color="white"><FaLinkedin /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;