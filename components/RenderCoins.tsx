import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import MyModal from "./modal";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function RenderCoin({ arr, pageNumber = 0 }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return arr.slice(pageNumber * 50, pageNumber * 50 + 50).map((coin, i) => {
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
      <Flex
        key={i}
        w="100%"
        m="0 auto"
        h="60px"
        borderTop="0.5px solid lightgray"
        alignItems="center"
        _hover={{ bg: "#F5F5F5" }}
      >
        <Box w="2.5%" textAlign="center" fontSize="85%" color="gray">
          {i + 1 + pageNumber * 50}
        </Box>
        <Box
          w="11.875%"
          textAlign="left"
          fontSize="100%"
          fontWeight="600"
          pl="1%"
          cursor="pointer"
          onClick={onOpen}
        >
          {/* FIXME:FIXME:FIXME:FIXME:IMPLEMENT NEW PAGE FOR CLICKS */}
          {coin.n}
        </Box>
        <Box w="11.875%" textAlign="left" fontSize="85%" color="gray">
          <Text cursor="pointer" w="50%">
            {coin.s}
          </Text>
        </Box>
        <Box w="11.875%" textAlign="right" fontSize="95%">
          <Text cursor="pointer">
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
                : coin.p < 0.000000000000000001 &&
                  coin.p > 0.0000000000000000001
                ? "$" + coin.p.toFixed(21)
                : "$" + numberWithCommas(coin.p.toFixed(2))
            }`}
          </Text>
        </Box>
        <Box
          w="11.875%"
          textAlign="right"
          justifyContent="right"
          justifyItems="right"
          fontSize="90%"
          fontWeight="500"
          color={coin.pc > 0 ? "#57bd0f" : coin.pc < 0 ? "red" : "black"}
        >
          {coin.pc > 0 ? (
            <>
              {/* <IoMdArrowDropup></IoMdArrowDropup> */}
              {`${coin.pc.toFixed(2)}%`}
            </>
          ) : (
            <>
              {/* <IoMdArrowDropdown /> */}
              {`${coin.pc.toFixed(2)}%`}
            </>
          )}
        </Box>
        <Box w="11.875%" textAlign="right" fontSize="85%">
          <Text cursor="pointer">
            {`${
              coin.v === 0 ? "?" : "$" + numberWithCommas(coin.v.toFixed(0))
            }`}
          </Text>
        </Box>
        <Box w="11.875%" textAlign="right" fontSize="85%">
          {`${
            coin.mc === 0 ? "?" : "$" + numberWithCommas(coin.mc.toFixed(0))
          }`}
        </Box>

        <Box w="11.875%" textAlign="center" fontSize="85%">
          {`${coin.vt === 0 ? "?" : (coin.vt * 100).toFixed(2) + "%"}`}
        </Box>
        <Box w="11.875%" textAlign="center" fontSize="85%">
          {/* <Button w="100%">SOCIAL MEDIA STATUS</Button> */}

          <MyModal Curcoin={coin} />
        </Box>
      </Flex>
    );
  });
}
