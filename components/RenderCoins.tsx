import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import React, { useState } from "react";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import categoryStyling from "../helpers/categoryDecor";
import renderSearch from "../helpers/renderSearch";

const columns = [
  {
    Header: "#",
  },
  {
    Header: "Name",
    accessor: "n",
  },
  {
    Header: "Coin",
    accessor: "s",
  },
  {
    Header: "Price",
    accessor: "p",
  },
  {
    Header: "24H Change",
    accessor: "pc",
  },
  {
    Header: "24H Volume",
    accessor: "v",
  },
  {
    Header: "Market Cap",
    accessor: "mc",
  },
  {
    Header: "Volatility",
    accessor: "vt",
  },
  { Header: "Social Media Status" },
];

export default function RenderCoin({
  arr = [],
  pageNumber = 1,
  searchQuery = "",
  state = false,
}) {
  const hoverOnCoin = useColorModeValue("#edf2f7", "#2d3748");
  const [pageNum, setPageNum] = useState(pageNumber);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<{}>(
      {
        columns,
        data: arr,
      },
      useSortBy,
      usePagination
    );
  function iconsForSorts(col) {
    return col.isSorted ? (
      col.isSortedDesc ? (
        <TiArrowSortedUp color="green" size="20px" />
      ) : (
        <TiArrowSortedDown color="red" size="20px" />
      )
    ) : null;
  }

  let firstPageRows = searchQuery
    ? renderSearch(rows, searchQuery).slice(pageNum * 50 - 50, pageNum * 50)
    : rows.slice(pageNum * 50 - 50, pageNum * 50);

  return (
    <>
      <Box overflowX="auto">
        <Table
          {...getTableProps()}
          style={{ tableLayout: "auto" }}
          variant="striped"
          width="100%"
        >
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr height="20" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => {
                  // @ts-expect-error
                  column.sortType = "basic";
                  return (
                    <Th
                      key={i}
                      {...(pageNum === 1
                        ? {
                            ...column.getHeaderProps(
                              // @ts-expect-error
                              column.getSortByToggleProps()
                            ),
                          }
                        : { ...column.getHeaderProps })}
                      minWidth={column.Header === "24H Change" && "160px"}
                      textAlign={
                        column.Header != `#` &&
                        column.Header != `Coin` &&
                        column.Header != `Name`
                          ? "right"
                          : "left"
                      }
                      fontSize="100%"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      // pos="absolute"
                      // bg="green"
                    >
                      {column.render("Header")}
                      {iconsForSorts(column)}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>

          <Tbody {...getTableBodyProps()}>
            {firstPageRows.map((row, i) => {
              prepareRow(row);

              return (
                <Tr
                  height="20"
                  {...row.getRowProps()}
                  key={i}
                  // _hover={{ bg: "#F3F3F3" }}
                  _hover={{ bg: hoverOnCoin }}
                  // bg="red"
                  // overflowX="scroll"
                  width="100%"
                >
                  {row.cells.map((cell, i) => {
                    return categoryStyling(cell, i, pageNum);
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <br />
      <Center style={{ marginBottom: "2.5%", marginTop: "2.5%" }}>
        <Button
          borderRadius="50%"
          w={["5vh", "3.5vh", "5vh", "5vh", "5vh", "5vh"]}
          h={["5vh", "3.5vh", "5vh", "5vh", "5vh", "5vh"]}
          ml="40%"
          fontSize="200%"
          onClick={() => setPageNum(pageNum - 1)}
          disabled={pageNum === 1}
        >
          {"-"}
        </Button>{" "}
        <Text m="0 1%" fontSize="125%" minWidth="115px">
          {`Page ${+pageNum} of ${
            searchQuery
              ? Math.ceil(renderSearch(rows, searchQuery).length / 50)
              : Math.floor(rows.length / 50)
          }`}
        </Text>
        <Button
          borderRadius="50%"
          w={["5vh", "3.5vh", "5vh", "5vh", "5vh", "5vh"]}
          h={["5vh", "3.5vh", "5vh", "5vh", "5vh", "5vh"]}
          fontSize="200%"
          onClick={() => setPageNum(pageNum + 1)}
          disabled={
            pageNum >= rows.length / 50 ||
            (searchQuery &&
              pageNum == Math.ceil(renderSearch(rows, searchQuery).length / 50))
          }
        >
          {"+"}
        </Button>{" "}
        <Heading fontSize="100%" pl="25%">
          {" "}
          Go to page:
        </Heading>
        <NumberInput
          pl="1%"
          min={1}
          max={Math.ceil(rows.length)}
          placeholder="Enter page number"
          onChange={(e) => {
            if (+e === 1) setPageNum(1);
            if (!+e) setPageNum(1);
            if (+e > 1) setPageNum(+e);
            if (+e >= Math.floor(rows.length / 50))
              setPageNum(Math.ceil(rows.length / 50));
            if (
              searchQuery &&
              +e >= Math.floor(renderSearch(rows, searchQuery).length / 50)
            )
              setPageNum(
                Math.ceil(renderSearch(rows, searchQuery).length / 50)
              );
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Center>
    </>
  );
}
