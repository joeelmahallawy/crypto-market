import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export default function RenderCoin({ arr }) {
  return arr.map((coin, i) => {
    console.log(navigator.language);
    console.log(new Intl.NumberFormat("en-us").format(99999));

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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
          //   borderRight="1px solid black"
          w="2.5%"
          textAlign="left"
          fontSize="75%"
        >
          ICON
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="left"
          fontSize="100%"
          fontWeight="600"
        >
          {coin.n}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="left"
          fontSize="85%"
          color="gray"
        >
          {coin.s}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="95%"
        >
          {/* {`$${new Intl.NumberFormat("en-us").format(coin.p.toFixed(2))}`} */}
          {`$${
            coin.p < 1 && coin.p > 0.1
              ? coin.p.toFixed(3)
              : coin.p < 0.1 && coin.p > 0.01
              ? coin.p.toFixed(4)
              : coin.p < 0.01 && coin.p > 0.001
              ? coin.p.toFixed(5)
              : coin.p < 0.001 && coin.p > 0.0001
              ? coin.p.toFixed(6)
              : coin.p < 0.0001 && coin.p > 0.00001
              ? coin.p.toFixed(7)
              : coin.p < 0.00001 && coin.p > 0.000001
              ? coin.p.toFixed(8)
              : coin.p < 0.000001 && coin.p > 0.0000001
              ? coin.p.toFixed(9)
              : coin.p < 0.0000001 && coin.p > 0.00000001
              ? coin.p.toFixed(10)
              : coin.p < 0.00000001 && coin.p > 0.000000001
              ? coin.p.toFixed(11)
              : numberWithCommas(coin.p.toFixed(2))
          }`}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="90%"
          fontWeight="500"
          color={coin.pc > 0 ? "#57bd0f" : "red"}
        >
          {`${coin.pc}%`}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="85%"
        >
          {`$${numberWithCommas(coin.v.toFixed(0))}`}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="85%"
        >
          {`$${numberWithCommas(coin.mc.toFixed(0))}`}
        </Box>
        {/* <Box
        //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="85%"
        >
          {coin.vt}
        </Box> */}
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="center"
          fontSize="85%"
        >
          {coin.t}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="85%"
        >
          {coin.sd}
        </Box>
        <Box
          //   borderRight="1px solid black"
          w="11.11%"
          textAlign="right"
          fontSize="85%"
        >
          <Button w="50%">SOCIAL MEDIA STATUS</Button>
        </Box>
      </Flex>
    );
  });
}
