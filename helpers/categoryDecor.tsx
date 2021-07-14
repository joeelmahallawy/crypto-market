import { Td, Button, Text, Flex } from "@chakra-ui/react";
import React from "react";
import numberWithCommas from "./numbersWithCommas";
import getPrice from "./pricePrecision";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import MyModal from "../components/modal";

export default function categoryStyling(exp, key, page) {
  switch (exp.column.Header) {
    case "#":
      return (
        <Td key={key}>
          <Text>{+exp.row.id + 1}</Text>
        </Td>
      );
    case "Name":
      return (
        <Td key={key}>
          <Text fontWeight="500" fontSize="105%">
            {exp.value}
          </Text>
        </Td>
      );
    case "Coin":
      return (
        <Td key={key} w="100px">
          <Text color="gray" fontWeight="500">
            {exp.value}
          </Text>
        </Td>
      );
    case "Price":
      return (
        <Td key={key} width="20px">
          <Text textAlign="right">
            {`${
              exp.value > 1
                ? numberWithCommas(getPrice(exp.value))
                : getPrice(exp.value)
            }`}
          </Text>
        </Td>
      );
    case "24H Change":
      return (
        <Td key={key}>
          <Text
            color={exp.value >= 0 ? "rgb(22,199,132)" : "rgb(235,64,74)"}
            textAlign="center"
          >
            {`${exp.value.toFixed(2)}%`}
          </Text>
        </Td>
      );
    case "24H Volume":
      return (
        <Td key={key} w="5%">
          <Text textAlign="right">{`${
            exp.value ? "$" + numberWithCommas(exp.value.toFixed(0)) : "?"
          }`}</Text>
        </Td>
      );
    case "Market Cap":
      return (
        <Td key={key}>
          <Text textAlign="right">{`${
            exp.value ? `$` + numberWithCommas(exp.value) : "?"
          }`}</Text>
        </Td>
      );
    case "Volatility":
      return (
        <Td key={key}>
          <Text textAlign="right">
            {exp.value < 0.0000001 ? "<0.00000001" : exp.value.toFixed(7)}
          </Text>
        </Td>
      );
    case "Social Media Status":
      return (
        <Td key={key} w="5%">
          <MyModal Curcoin={exp} />
        </Td>
      );
    default:
      return null;
  }
}
