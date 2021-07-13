import { Td, Button, Text } from "@chakra-ui/react";
import React from "react";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function categoryStyling(exp, key) {
  switch (exp.column.Header) {
    case "#":
      // exp.column;
      // console.log(exp.column);
      return (
        <Td width="100%">
          <Text>{+exp.row.id + 1}</Text>
        </Td>
      );
    case "Name":
      return (
        <Td key={key}>
          <Text ml="0%">{exp.value}</Text>
        </Td>
      );
    case "Coin":
      return (
        <Td key={key}>
          <Text color="gray">{exp.value}</Text>
        </Td>
      );
    case "Price":
      return (
        <Td key={key} width="20px">
          <Text textAlign="right">
            {`$${numberWithCommas(exp.value.toFixed(2))}`}
          </Text>
        </Td>
      );
    case "24H Change":
      return (
        <Td key={key}>
          <Text
            color={exp.value >= 0 ? "rgb(22,199,132)" : "rgb(235,64,74)"}
            textAlign="right"
          >
            {`${exp.value.toFixed(2)}%`}
          </Text>
        </Td>
      );
    case "24H Volume":
      return (
        <Td key={key}>
          <Text textAlign="right">{`$${numberWithCommas(
            exp.value.toFixed(0)
          )}`}</Text>
        </Td>
      );
    case "Market Cap":
      return (
        <Td key={key}>
          <Text textAlign="right">{`$${numberWithCommas(exp.value)}`}</Text>
        </Td>
      );
    case "Volatility":
      return (
        <Td key={key}>
          <Text textAlign="right">{exp.value.toFixed(7)}</Text>
        </Td>
      );
    case "Social Media Status":
      return <Button key={key}>TEST</Button>;
    // return <MyModal Curcoin={exp} />;
    default:
      return null;
  }
}
