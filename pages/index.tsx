import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Spinner,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { SiBitcoin, SiLitecoin } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import RenderCoin from "../components/RenderCoins";
import { useAsyncFn } from "react-use";

const API_KEY = `3vxjsomnzbsd5idi6ee5nl`;
const API_FOR_DESCENDING_VOLUME_MARKET = `https://api.lunarcrush.com/v2?data=market&key=3vxjsomnzbsd5idi6ee5nl&sort=mc&desc=true`;

const IndexPage = () => {
  const { toggleColorMode } = useColorMode();
  const headerBackground = useColorModeValue(
    "rgb(111,111,111,0.75)",
    "rgb(173,173,173,0.1)"
  );
  const blackWhite = useColorModeValue("darkgray", "white");
  const hoverButtons = useColorModeValue("#0F35DF", "white");
  const hoverBackgroundButtons = useColorModeValue(
    "none",
    "rgb(173,173,173,0.25)"
  );
  const trendingButton = useColorModeValue("rgb(173,173,173,0.45)", "");
  const trendingHoverButton = useColorModeValue(
    "#919191",
    "rgb(173,173,173,0.25)"
  );
  const logoColor = useColorModeValue("#CF1111", "red");

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [trendingCoins, setTrendingCoins] = useState(false);
  useEffect(() => {
    doFetch();
  }, []);

  function sortByTrend(arr) {
    const containerArr = [...arr];
    return containerArr.sort((a, b) => b.t - a.t).slice(0, 50);
  }

  const [state, doFetch] = useAsyncFn(async () => {
    const response = await fetch(API_FOR_DESCENDING_VOLUME_MARKET);
    const responseData = await response.json();
    setIsLoaded(true);
    const valueOver0 = responseData.data.filter((tok) => {
      return tok.p > 0;
    });

    return valueOver0;
  }, []);

  return (
    <>
      <Box id="header">
        <Flex id="Options" w="70%" m="1% auto" justifyContent="flex-end">
          <Heading
            color={logoColor}
            mr="56%"
            fontSize="300%"
            onClick={() => setTrendingCoins(false)}
          >
            <Flex _hover={{ cursor: "pointer" }}>
              𝙆
              <Box pt="4%" pl="1%">
                <SiBitcoin color="red" size="35px" />
              </Box>
              𝙞𝙣𝙢𝙖𝙧𝙠𝙚𝙩𝙆𝙖𝙥
            </Flex>
          </Heading>
          <Button
            ml="1%"
            _hover={{ bg: trendingHoverButton }}
            onClick={() => setTrendingCoins(true)}
            fontSize="200%"
            h="50px"
            w="auto"
            bg={trendingButton}
          >
            Top 50 Trending Coins on Twitter!
          </Button>
        </Flex>
        <Flex
          id="categories"
          bg={headerBackground}
          w="70%"
          m="1% auto"
          alignItems="center"
          borderRadius="10px"
          // height="60px"
        >
          <SiBitcoin
            style={{ cursor: "pointer" }}
            size="5%"
            color="gold"
            onClick={() => setTrendingCoins(false)}
          />
          <Button
            bg="transparent"
            fontWeight="bold"
            _hover={{ bg: hoverBackgroundButtons, color: hoverButtons }}
            _focus={{ outline: "none" }}
            _active={{ bg: "none" }}
            onClick={() => setTrendingCoins(false)}
          >
            Home
          </Button>
          <Button
            bg="transparent"
            fontWeight="bold"
            _hover={{ bg: hoverBackgroundButtons, color: hoverButtons }}
            _focus={{ outline: "none" }}
            _active={{ bg: "none" }}
          >
            DummyBtn
          </Button>
          <Button
            bg="transparent"
            fontWeight="bold"
            _hover={{ bg: hoverBackgroundButtons, color: hoverButtons }}
            _focus={{ outline: "none" }}
            _active={{ bg: "none" }}
          >
            Language
          </Button>
          <Button
            bg="transparent"
            fontWeight="bold"
            _hover={{ bg: hoverBackgroundButtons, color: hoverButtons }}
            _focus={{ outline: "none" }}
            _active={{ bg: "none" }}
            onClick={toggleColorMode}
          >
            Nightmode
          </Button>
          <Input
            ml="1%"
            placeholder="Search Coin"
            type="text"
            size="lg"
            fontSize="20px"
            _placeholder={{ color: blackWhite }}
            _focus={{ outline: "none" }}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg={headerBackground}
            // bg="black"
          />
        </Flex>
      </Box>
      <Box id="body" w="70%" m="0 auto">
        {/* {console.log(
          state.value.sort((a, b) => {
            return b.t - a.t;
          })
        )} */}
        {isLoaded ? (
          <>
            <RenderCoin
              arr={trendingCoins ? sortByTrend(state.value) : state.value}
              searchQuery={searchQuery}
              state={trendingCoins}
            />
          </>
        ) : (
          <Center h="80vh">
            <Spinner
              thickness="5px"
              speed=".75s"
              emptyColor="gray.200"
              color="black"
              width="200px"
              height="200px"
            />
          </Center>
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
