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

const API_KEY = `3vxjsomnzbsd5idi6ee5nl`;
const API_FOR_DESCENDING_VOLUME_MARKET = `https://api.lunarcrush.com/v2?data=market&key=3vxjsomnzbsd5idi6ee5nl&sort=mc&desc=true`;

const IndexPage = () => {
  const [curPage, setCurPage] = useState(0);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const [cryptoArr, setCryptoArr] = useState([]);
  const coinSearch = useRef();
  const [img, setImg] = useState("");
  const [AscNames, setAscNames] = useState(null);
  const [AscPrice, setAscPrice] = useState(null);
  const [AscPriceChange, setAscPriceChange] = useState(null);
  const [volumeAsc, setVolumeAsc] = useState(null);
  const [marketCapAsc, setMarketCapAsc] = useState(null);
  const [sizeOfReturnedArr, setSizeOfReturnedArr] = useState(0);

  // useEffect(() => {
  // getData();
  // }, []);
  // setInterval(() => getData(), 2000);

  // async function getIcons(symbol) {
  // const response = await fetch();
  // `https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png`
  // `https://images.coinviewer.io/currencies/64x64/1000.png`
  // `https://volumeAscs.coinviewer.io/currencies/64x64/${symbol}.png`
  // `https://cors-anywhere.herokuapp.com/https://icons.bitbot.tools/api/${symbol}/32x32`
  // console.log(response);
  // setImg(response.url);
  // setImg(response.url);
  // return response.url;
  // return symbol;
  // }

  // ASYNC FUNCTIONS
  async function getData() {
    const response = await fetch(API_FOR_DESCENDING_VOLUME_MARKET);
    const responseData = await response.json();

    const valueOver0 = responseData.data.filter((tok) => {
      return tok.p > 0;
    });
    setCryptoArr(valueOver0);
    setIsLoaded(true);
    setSizeOfReturnedArr(valueOver0.length);
  }

  // NAMES SORTING
  function sortByNameDes() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.n.toLowerCase() > b.n.toLowerCase() ? -1 : 1;
    });

    setAscNames(false);
    setCryptoArr(sortedNameArr);
  }
  function sortByNameAsc() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.n.toLowerCase() < b.n.toLowerCase() ? -1 : 1;
    });
    setAscNames(true);
    setCryptoArr(sortedNameArr);
  }
  function toggleNameSort() {
    if (AscNames === true) sortByNameDes();
    if (AscNames === false) sortByNameAsc();
    if (AscNames === null) sortByNameDes();
  }
  // PRICE SORTING
  function sortByPriceDes() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.p > b.p ? -1 : 1;
    });
    setAscPrice(false);
    setCryptoArr(sortedNameArr);
  }
  function sortByPriceAsc() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.p < b.p ? -1 : 1;
    });
    setAscPrice(true);
    setCryptoArr(sortedNameArr);
  }
  function togglePriceSort() {
    if (AscPrice === true) sortByPriceDes();
    if (AscPrice === false) sortByPriceAsc();
    if (AscPrice === null) sortByPriceDes();
  }
  // PRICE CHANGE SORTING
  function sortByPriceChangeDes() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.pc > b.pc ? -1 : 1;
    });
    setAscPriceChange(false);
    setCryptoArr(sortedNameArr);
  }
  function sortByPriceChangeAsc() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.pc < b.pc ? -1 : 1;
    });
    setAscPriceChange(true);
    setCryptoArr(sortedNameArr);
  }
  function togglePriceChangeSort() {
    if (AscPriceChange === true) sortByPriceChangeDes();
    if (AscPriceChange === false) sortByPriceChangeAsc();
    if (AscPriceChange === null) sortByPriceChangeDes();
  }
  // VOLUME SORTING
  function sortVolumeDes() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.v > b.v ? -1 : 1;
    });
    setVolumeAsc(false);
    setCryptoArr(sortedNameArr);
  }
  function sortVolumeAsc() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.v < b.v ? -1 : 1;
    });
    setVolumeAsc(true);
    setCryptoArr(sortedNameArr);
  }
  function toggleVolumeSort() {
    if (volumeAsc === true) sortVolumeDes();
    if (volumeAsc === false) sortVolumeAsc();
    if (volumeAsc === null) sortVolumeDes();
  }
  // MARKET CAP SORTING
  function sortMarketCapDes() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.mc > b.mc ? -1 : 1;
    });
    setMarketCapAsc(false);
    setCryptoArr(sortedNameArr);
  }
  function sortMarketCapAsc() {
    const clonedArr = [...cryptoArr];
    const sortedNameArr = clonedArr.sort((a, b) => {
      return a.mc < b.mc ? -1 : 1;
    });
    setMarketCapAsc(true);
    setCryptoArr(sortedNameArr);
  }
  function toggleMarketCapSort() {
    if (marketCapAsc === true) sortMarketCapDes();
    if (marketCapAsc === false) sortMarketCapAsc();
    if (marketCapAsc === null) sortMarketCapDes();
  }

  //Reusable blocks
  function headerButtons(type) {
    return (
      <Button
        _focus={{ boxShadow: "none" }}
        _active={{ bg: "none" }}
        ml="1%"
        alignContent="center"
        bg="transparent"
        _hover={{ bg: "transparent", color: "blue" }}
      >
        {type}
      </Button>
    );
  }
  return (
    <>
      <Box id="header">
        <Box id="Options" w="70%" m="1% auto" textAlign="right">
          <Button onClick={getData}>Get coins</Button>
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
          {headerButtons("Home ")}
          {headerButtons("Exchange ")}
          {headerButtons("DeFi ")}
          {headerButtons("NFT ")}
          {headerButtons("Upcomings ")}

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
        <Flex w="100%" mb="1%">
          <Box w="2.5%" textAlign="center">
            #
          </Box>
          <Box
            w="11.875%"
            textAlign="left"
            pl="1%"
            _hover={{ cursor: "pointer" }}
            onClick={toggleNameSort}
          >
            Name
          </Box>
          <Box w="11.875%" textAlign="left">
            Coin
          </Box>
          <Box
            w="11.875%"
            textAlign="right"
            _hover={{ cursor: "pointer" }}
            onClick={togglePriceSort}
          >
            Price
          </Box>
          <Box
            w="11.875%"
            textAlign="right"
            _hover={{ cursor: "pointer" }}
            onClick={togglePriceChangeSort}
          >
            24H Change
          </Box>
          <Box
            w="11.875%"
            textAlign="right"
            _hover={{ cursor: "pointer" }}
            onClick={toggleVolumeSort}
          >
            24H Volume
          </Box>
          <Box
            w="11.875%"
            textAlign="right"
            _hover={{ cursor: "pointer" }}
            onClick={toggleMarketCapSort}
          >
            Market Cap
          </Box>
          <Box w="11.875%" textAlign="center" _hover={{ cursor: "pointer" }}>
            Volatility
          </Box>
        </Flex>

        {isLoaded && (
          <>
            <RenderCoin arr={cryptoArr} pageNumber={curPage} />

            <Center mt="2.5%" mb="2.5%" fontSize="125%">
              {curPage === 0 ? (
                <>
                  <Text p="0 1%">{`Page ${curPage + 1} of ${Math.round(
                    sizeOfReturnedArr / 50
                  )}`}</Text>
                  <Button
                    borderRadius="50%"
                    height="50px"
                    w="50px"
                    bg="lightgray"
                    onClick={() => {
                      setCurPage(curPage + 1);
                    }}
                  >
                    +
                  </Button>
                </>
              ) : curPage === sizeOfReturnedArr / 50 ? (
                <>
                  <Button
                    borderRadius="50%"
                    height="50px"
                    w="50px"
                    bg="lightgray"
                    onClick={() => {
                      setCurPage(curPage - 1);
                    }}
                  >
                    -
                  </Button>
                  <Text p="0 1%">{`Page ${curPage + 1} of ${Math.round(
                    sizeOfReturnedArr / 50
                  )}`}</Text>
                </>
              ) : (
                <>
                  <Button
                    borderRadius="50%"
                    height="50px"
                    w="50px"
                    bg="lightgray"
                    onClick={() => {
                      setCurPage(curPage - 1);
                    }}
                  >
                    -
                  </Button>
                  <Text p="0 1%">{`Page ${curPage + 1} of ${Math.round(
                    sizeOfReturnedArr / 50
                  )}`}</Text>
                  <Button
                    borderRadius="50%"
                    height="50px"
                    w="50px"
                    bg="lightgray"
                    onClick={() => {
                      setCurPage(curPage + 1);
                    }}
                  >
                    +
                  </Button>
                </>
              )}
            </Center>
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
