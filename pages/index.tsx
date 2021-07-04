import { Box, Button, Center, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { SiBitcoin } from "react-icons/si";
import RenderCoin from "../components/RenderCoins";

const API_KEY = `3vxjsomnzbsd5idi6ee5nl`;
const API_FOR_DESCENDING_VOLUME_MARKET = `https://api.lunarcrush.com/v2?data=market&key=3vxjsomnzbsd5idi6ee5nl&sort=v&desc=true`;

const options = {
  method: "GET",
  hostname: "rest.coinapi.io",
  path: "/v1/exchanges",
  headers: {
    "X-CoinAPI-Key": "DF439066-38BA-4046-AAED-7C7F85722F43",
    Accept: "application/json",
  },
};

const IndexPage = () => {
  const [cryptoArr, setCryptoArr] = useState([]);
  const coinSearch = useRef();

  async function getData(type, sortBy = "") {
    // const response = await fetch(
    //   `https://api.lunarcrush.com/v2?data=${type}&key=${API_KEY}&sort=${sortBy}`
    // );
    const response = await fetch(
      `https://api.lunarcrush.com/v2?data=market&key=3vxjsomnzbsd5idi6ee5nl&sort=v&desc=true`
    );
    const responseData = await response.json();
    console.log(responseData);
    const valueOver0 = responseData.data.filter((tok) => {
      return tok.p > 0;
    });

    setCryptoArr(valueOver0);
    console.log(valueOver0);
  }

  // function sortArray(arr) {
  //   return null;
  // }

  return (
    <>
      <Box id="header">
        <Box id="Options" w="70%" m="1% auto" textAlign="right">
          <Button onClick={() => getData("market")}>Get coins</Button>
          <Button>Sort in descending order</Button>
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
          <Button
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
            ml="1%"
            alignContent="center"
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            Home
          </Button>
          <Button
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
            ml="1%"
            alignContent="center"
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            Exchange
          </Button>
          <Button
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
            ml="1%"
            alignContent="center"
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            DeFi
          </Button>
          <Button
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
            ml="1%"
            alignContent="center"
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            NFT
          </Button>
          <Button
            _focus={{ boxShadow: "none" }}
            _active={{ bg: "none" }}
            ml="1%"
            alignContent="center"
            bg="transparent"
            _hover={{ bg: "transparent", color: "blue" }}
          >
            Upcomings
          </Button>
          <Input
            ml="5%"
            placeholder="Search Coin"
            type="text"
            ref={coinSearch}
            size="lg"
          />
        </Flex>
      </Box>
      <Box id="body" w="70%" m="0 auto">
        <Flex w="90%">
          {/* <Button borderRight="1px solid black">#</Button> */}
          <Button borderRight="1px solid black" w="2.5%">
            #
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Name
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Coin
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Price
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            24H Change
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            24H Volume
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Market Cap
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Volatility
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Tweets
          </Button>
          <Button borderRight="1px solid black" w="10.75%">
            Social Dominance
          </Button>

          {/* <Button borderRight="1px solid black">Social Media Trends</Button> */}
        </Flex>
        <RenderCoin arr={cryptoArr} />
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
