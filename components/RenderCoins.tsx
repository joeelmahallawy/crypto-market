import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function RenderCoin({ arr }) {
  return arr.map((coin, i) => {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <Flex key={i} w="100%" m="0 auto" h="60px" borderTop="0.5px solid gray">
        <Box w="2.5%" textAlign="right" fontSize="75%">
          ICON
        </Box>
        <Box
          w="11.875%"
          textAlign="left"
          fontSize="100%"
          fontWeight="600"
          pl="1%"
        >
          {coin.n}
        </Box>
        <Box w="11.875%" textAlign="left" fontSize="85%" color="gray">
          {coin.s}
        </Box>
        <Box w="11.875%" textAlign="right" fontSize="95%">
          {`${
            coin.p === 0
              ? "?"
              : coin.p <= 0.99 && coin.p > 0.1
              ? "$" + coin.p.toFixed(3)
              : coin.p < 0.1 && coin.p > 0.01
              ? "$" + coin.p.toFixed(4)
              : coin.p < 0.01 && coin.p > 0.001
              ? "$" + coin.p.toFixed(5)
              : coin.p < 0.001 && coin.p > 0.0001
              ? "$" + coin.p.toFixed(6)
              : coin.p < 0.0001 && coin.p > 0.00001
              ? "$" + coin.p.toFixed(7)
              : coin.p < 0.00001 && coin.p > 0.000001
              ? "$" + coin.p.toFixed(8)
              : coin.p < 0.000001 && coin.p > 0.0000001
              ? "$" + coin.p.toFixed(9)
              : coin.p < 0.0000001 && coin.p > 0.00000001
              ? "$" + coin.p.toFixed(10)
              : coin.p < 0.00000001 && coin.p > 0.000000001
              ? "$" + coin.p.toFixed(11)
              : coin.p < 0.000000001 && coin.p > 0.0000000001
              ? "$" + coin.p.toFixed(12)
              : coin.p < 0.0000000001 && coin.p > 0.00000000001
              ? "$" + coin.p.toFixed(13)
              : coin.p < 0.00000000001 && coin.p > 0.000000000001
              ? "$" + coin.p.toFixed(14)
              : coin.p < 0.000000000001 && coin.p > 0.0000000000001
              ? "$" + coin.p.toFixed(15)
              : coin.p < 0.0000000000001 && coin.p > 0.00000000000001
              ? "$" + coin.p.toFixed(16)
              : coin.p < 0.00000000000001 && coin.p > 0.000000000000001
              ? "$" + coin.p.toFixed(17)
              : coin.p < 0.000000000000001 && coin.p > 0.0000000000000001
              ? "$" + coin.p.toFixed(18)
              : coin.p < 0.0000000000000001 && coin.p > 0.00000000000000001
              ? "$" + coin.p.toFixed(19)
              : coin.p < 0.00000000000000001 && coin.p > 0.000000000000000001
              ? "$" + coin.p.toFixed(20)
              : coin.p < 0.000000000000000001 && coin.p > 0.0000000000000000001
              ? "$" + coin.p.toFixed(21)
              : "$" + numberWithCommas(coin.p.toFixed(2))
          }`}
        </Box>
        <Box
          w="11.875%"
          textAlign="right"
          fontSize="90%"
          fontWeight="500"
          color={coin.pc > 0 ? "#57bd0f" : coin.pc < 0 ? "red" : "black"}
        >
          {`${coin.pc.toFixed(2)}%`}
        </Box>
        <Box w="11.875%" textAlign="right" fontSize="85%">
          {`${coin.v === 0 ? "?" : "$" + numberWithCommas(coin.v.toFixed(0))}`}
        </Box>
        <Box w="11.875%" textAlign="right" fontSize="85%">
          {`${
            coin.mc === 0 ? "?" : "$" + numberWithCommas(coin.mc.toFixed(0))
          }`}
        </Box>

        <Box w="11.875%" textAlign="center" fontSize="85%">
          {`${coin.vt === 0 ? "?" : coin.vt.toFixed(5)}`}
        </Box>
        <Box w="11.875%" textAlign="center" fontSize="85%">
          <Button w="100%">SOCIAL MEDIA STATUS</Button>
        </Box>
      </Flex>
    );
  });
}
