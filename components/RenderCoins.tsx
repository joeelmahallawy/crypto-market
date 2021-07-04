import { Box, Button, Flex } from "@chakra-ui/react";
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
        <Box
          borderRight="1px solid black"
          w="2.5%"
          textAlign="left"
          fontSize="75%"
        >
          ICON
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="left"
          fontSize="100%"
          fontWeight="600"
        >
          {coin.n}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="left"
          fontSize="85%"
        >
          {coin.s}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="85%"
        >
          {`$${coin.p.toFixed(2).toLocaleString("en")}`}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="90%"
          fontWeight="500"
          color={coin.pc > 0 ? "#57bd0f" : "red"}
        >
          {`${coin.pc}%`}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="75%"
        >
          {coin.v}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="75%"
        >
          {coin.mc}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="75%"
        >
          {coin.vt}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="75%"
        >
          {coin.t}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="75%"
        >
          {coin.sd}
        </Box>
        <Box
          borderRight="1px solid black"
          w="10.75%"
          textAlign="right"
          fontSize="75%"
        >
          <Button w="50%">SOCIAL MEDIA STATUS</Button>
        </Box>
      </Flex>
    );
  });
}
