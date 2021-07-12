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
    const [curPage, setCurPage] = useState(0);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const [pageNum, setPageNum] = useState(0);
    const coinSearch = useRef();
    const [img, setImg] = useState("");
    const [AscNames, setAscNames] = useState(null);
    const [AscPrice, setAscPrice] = useState(null);
    const [AscPriceChange, setAscPriceChange] = useState(null);
    const [volumeAsc, setVolumeAsc] = useState(null);
    const [marketCapAsc, setMarketCapAsc] = useState(null);
    const [volatilityAsc, setVolatilityAsc] = useState(null);
    const [sizeOfReturnedArr, setSizeOfReturnedArr] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
  
    const [state, doFetch] = useAsyncFn(async () => {
      const response = await fetch(API_FOR_DESCENDING_VOLUME_MARKET);
      const responseData = await response.json();
  
      const valueOver0 = responseData.data.filter((tok) => {
        return tok.p > 0;
      });
  
      return valueOver0;
    }, []);
    
  
    // Render Helper functions
    function renderPageNumber() {
      return (
        <Text p="0 1%">{`Page ${curPage + 1} of ${Math.floor(
          state.value?.length / 50
        )}`}</Text>
      );
    }
    function previousPageBtn() {
      return (
        <Button
          borderRadius="50%"
          height="50px"
          w="50px"
          bg="lightgray"
          onClick={() => {
            setCurPage(curPage - 1);
          }}
          fontSize="170%"
          justifyContent="center"
          alignItems="center"
          _active={{ bg: "darkgray" }}
          _focus={{ outline: "none" }}
          pb=".25%"
        >
          -
        </Button>
      );
    }
    function forwardPageBtn() {
      return (
        <Button
          borderRadius="50%"
          height="50px"
          w="50px"
          bg="lightgray"
          onClick={() => {
            setCurPage(curPage + 1);
          }}
          justifyContent="center"
          alignContent="center"
          fontSize="120%"
          _active={{ bg: "darkgray" }}
          _focus={{ outline: "none" }}
          pb=".25%"
        >
          +
        </Button>
      );
    }
    // SEARCH SORTING
    function searchResults(e) {
      // const searchArr = [];
      // searchArr.push(e.target.value);
      // console.log(e.target.value);
      // // FIXME:FIXME: FIXME: FIXME: FIXME: FIXME: FIXME: FIXME:  SEARCH RESULTS messed up on erasing inputsFIXME: FIXME: FIXME: FIXME: FIXME: FIXME: FIXME: FIXME: FIXME:
      // console.log(searchArr.join(""));
      // setSearchQuery(e.target.value);
      // let copyArr=[...state.value?]
      // console.log(state.value?);
      const newArr = state.value?.map((coin) => {
        if (coin.n.startsWith(e.target.value.toUpperCase())) return coin;
      });
      // console.log(state.value?);
      // const testArr = [1, 2, 3, 4];
      // const newArr2 = testArr.map((num) => num > 2);
      // console.log(newArr2);
      // console.log(state.value?);
      // console.log(newArr);
      // console.log(e.target.value);
      console.log(newArr);
      console.log(newArr);
    }
  
    console.log(state.value?);
    // NAMES SORTING
    function sortByNameDes() {
      const clonedArr = [...state.value];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.n.toLowerCase() > b.n.toLowerCase() ? -1 : 1;
      });
  
      setAscNames(false);
      setCryptoArr(sortedNameArr);
    }
    function sortByNameAsc() {
      const clonedArr = [...state.value?];
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
      const clonedArr = [...state.value?];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.p > b.p ? -1 : 1;
      });
      setAscPrice(false);
      setCryptoArr(sortedNameArr);
    }
    function sortByPriceAsc() {
      const clonedArr = [...state.value?];
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
      const clonedArr = [...state.value?];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.pc > b.pc ? -1 : 1;
      });
      setAscPriceChange(false);
      setCryptoArr(sortedNameArr);
    }
    function sortByPriceChangeAsc() {
      const clonedArr = [...state.value?];
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
      const clonedArr = [...state.value?];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.v > b.v ? -1 : 1;
      });
      setVolumeAsc(false);
      setCryptoArr(sortedNameArr);
    }
    function sortVolumeAsc() {
      const clonedArr = [...state.value?];
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
      const clonedArr = [...state.value?];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.mc > b.mc ? -1 : 1;
      });
      setMarketCapAsc(false);
      setCryptoArr(sortedNameArr);
    }
    function sortMarketCapAsc() {
      const clonedArr = [...state.value?];
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
    // VOLATILITY SORTING
    function sortVolatilityDes() {
      const clonedArr = [...state.value?];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.vt > b.vt ? -1 : 1;
      });
      setVolatilityAsc(false);
      setCryptoArr(sortedNameArr);
    }
    function sortVolatilityAsc() {
      const clonedArr = [...state.value?];
      const sortedNameArr = clonedArr.sort((a, b) => {
        return a.vt < b.vt ? -1 : 1;
      });
      setVolatilityAsc(true);
      setCryptoArr(sortedNameArr);
    }
    function toggleVolatilitySort() {
      if (volatilityAsc === true) sortVolatilityDes();
      if (volatilityAsc === false) sortVolatilityAsc();
      if (volatilityAsc === null) sortVolatilityDes();
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
              _focus={{ outline: "none" }}
              onChange={(e) => setSearchQuery(e.target.value)}
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
            <Box
              w="11.875%"
              textAlign="center"
              _hover={{ cursor: "pointer" }}
              onClick={toggleVolatilitySort}
            >
              Volatility
            </Box>
          </Flex>
  
          {!state.loading && state.value?.length !== 0 && (
            <>
              <RenderCoin
                arr={state.value?}
                pageNumber={curPage}
                searchQuery={searchQuery}
              />
  
              <Center mt="2.5%" mb="2.5%" fontSize="125%">
                {curPage === 0 ? (
                  <>
                    {renderPageNumber()}
                    {forwardPageBtn()}
                  </>
                ) : curPage === Math.ceil(state.value?.length / 50) ? (
                  <>
                    {console.log(Math.ceil(state.value?.length / 50))}
                    {previousPageBtn()}
                    {renderPageNumber()}
                  </>
                ) : (
                  <>
                    {() => {
                      // debugger;
                    }}
                    {previousPageBtn()}
                    {renderPageNumber()}
                    {forwardPageBtn()}
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
  
  
  function useSortBy(arg0: { columns: { Header: string; accessor: string; }[]; data: any; }, useSortBy: any): { getTableProps: any; getTableBodyProps: any; headerGroups: any; rows: any; prepareRow: any; } {
    throw new Error("Function not implemented.");
  }
  
  function useTable(arg0: { columns: { Header: string; accessor: string; }[]; data: any; }, useSortBy: (arg0: {
    columns: { Header: string; accessor: string; }[]; data: any;
  }, useSortBy: any) => {
    getTableProps: any; getTableBodyProps: any; headerGroups: any; rows: any; prepareRow: any;
  }): { getTableProps: any; getTableBodyProps: any; headerGroups: any; rows: any; prepareRow: any; } {
    throw new Error("Function not implemented.");
  }
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
  