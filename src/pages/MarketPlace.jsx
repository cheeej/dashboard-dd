import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import Banner from "../components/marketplace/Banner";
import Header from "../components/layout/header/Header";
import Nft from "../components/marketplace/Nft";
import NFTCollection from "../components/marketplace/NftColletion";

const MarketPlace = () => {
  return (
    <Layout title={"NFT MarketPlace"} pagename={"MarketPlace"}>
      <Grid
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
          mb={"20px"}
        >
          <Banner />
          <Box>
            <Header>Trending NFTs</Header>
            <SimpleGrid columns={[1, 3]} spacing={"20px"} mt={"20px"}>
              <NFTCollection />
            </SimpleGrid>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
          w="100%"
          h="300px"
          bg="red"
        ></Flex>
      </Grid>
    </Layout>
  );
};

export default MarketPlace;
