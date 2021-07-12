import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { SiBitcoin } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import RenderCoin from "../components/RenderCoins";
import { useAsyncFn } from "react-use";

const API_KEY = `3vxjsomnzbsd5idi6ee5nl`;
const API_FOR_DESCENDING_VOLUME_MARKET = `https://api.lunarcrush.com/v2?data=market&key=3vxjsomnzbsd5idi6ee5nl&sort=mc&desc=true`;

const IndexPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [state, doFetch] = useAsyncFn(async () => {
    const response = await fetch(API_FOR_DESCENDING_VOLUME_MARKET);
    const responseData = await response.json();

    const valueOver0 = responseData.data.filter((tok) => {
      return tok.p > 0;
    });

    return valueOver0;
  }, []);

  return (
    <>
      <Box id="header">
        <Box id="Options" w="70%" m="1% auto" textAlign="right">
          <Button onClick={doFetch}>Get coins</Button>
          <Button
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            EN
          </Button>
          <Button
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            USD
          </Button>
          <Button
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            Help
          </Button>
          <Button
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            Nightmode
          </Button>
        </Box>
        <Flex id="categories" bg="gray" w="70%" m="1% auto" alignItems="center">
          <SiBitcoin size="5%" color="gold" />

          <Input
            ml="5%"
            placeholder="Search Coin"
            type="text"
            size="lg"
            _focus={{ outline: "none" }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Flex>
      </Box>
      <Box id="body" w="70%" m="0 auto">
        {!state.loading && state.value?.length !== 0 && (
          <>
            <RenderCoin arr={state.value} searchQuery={searchQuery} />
          </>
        )}
      </Box>
    </>
  );
};

export default IndexPage;

/*
import WebSocket from "ws";

function renderData() {
  const ws = new WebSocket("wss://ws.coinapi.io/v1/");
  ws.on("open", function open() {
    var hello = {
      type: "hello",
      apikey: "DF439066-38BA-4046-AAED-7C7F85722F43",
      heartbeat: false,
      subscribe_data_type: ["quote"],
      subscribe_filter_asset_id: ["BTC", "ETH"],
    };
    ws.send(JSON.stringify(hello));
  });

  ws.on("message", function incoming(data) {
    console.log(data);
  });
  return null;
}*/
