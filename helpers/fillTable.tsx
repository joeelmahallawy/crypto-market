import { Tr, Td } from "@chakra-ui/react";
import React from "react";

export default function fillTable(coinData, category) {
  if (category == "SOCIAL DOMINANCE:")
    return (
      <Tr fontSize="125%">
        <Td>{category}</Td>
        <Td isNumeric>{`${
          coinData < 0.01 ? "<0.00001" : coinData.toFixed(2)
        }%`}</Td>
      </Tr>
    );
  return (
    <Tr fontSize="125%">
      <Td>{category}</Td>
      <Td isNumeric>{coinData}</Td>
    </Tr>
  );
}
