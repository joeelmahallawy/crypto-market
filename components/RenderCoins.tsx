import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function RenderCoin({ arr }) {
  return arr.map((coin, i) => {
    return (
      <Flex
        key={i}
        w="100%"
        m="0 auto"
        h="60px"
        border="1px solid black"
        // alignItems="center"
      >
        <Box borderRight="1px solid black" w="10%" textAlign="right">
          {coin.n}
        </Box>
        <Box borderRight="1px solid black" textAlign="right" w="5%">
          {coin.s}
        </Box>
        <Box borderRight="1px solid black" textAlign="right">
          {coin.v}
        </Box>
        <Box>{coin.p}</Box>
      </Flex>
    );
  });
}
