import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Icon,
  AvatarGroup,
  Avatar,
  Link,
} from "@chakra-ui/react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
function NFT(props) {
  const { image, name, author, bidders, currentbid, download } = props;
  const [like, setLike] = useState(false);
  return (
    <Box
      p="20px"
      boxShadow="0px 0px 2px 1px rgba(0,0,0,0.2)"
      borderRadius="20px"
    >
      <Flex direction="column" justify="center">
        <Box mb="20px" position="relative">
          <Image src={image} width="100%" height="auto" borderRadius="20px" />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={() => setLike(!like)}
          >
            <Icon
              w="20px"
              h="20px"
              as={like ? IoHeart : IoHeartOutline}
              color="brand.500"
            />
          </Button>
        </Box>
        <Flex flexDirection="column" justify="space-between">
          <Flex justify="space-between" mb="auto">
            <Flex direction="column">
              <Text fontSize="xl" mb="5px" fontWeight="bold">
                {name}
              </Text>
              <Text color="gray.600" fontSize="sm">
                {author}
              </Text>
            </Flex>
            <AvatarGroup max={3} size="sm" fontSize="12px">
              {bidders.map((avt, key) => (
                <Avatar key={key} src={avt} />
              ))}
            </AvatarGroup>
          </Flex>
          <Flex align="start" justify="space-between" mt="25px">
            <Text fontWeight="700" fontSize="sm">
              Current Bid: {currentbid}
            </Text>
            <Link href={download}>
              <Button
                variant="outline"
                colorScheme="blue"
                fontSize="sm"
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                Place Bid
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
export default NFT;
