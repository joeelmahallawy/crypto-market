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
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useTable, useSortBy, usePagination } from "react-table";
import React, { useState } from "react";
import {
  IoMdArrowRoundUp,
  IoIosArrowUp,
  IoMdArrowDropup,
} from "react-icons/io";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import categoryStyling from "../helpers/categoryDecor";

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
}) {
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
        <TiArrowSortedUp color="lightgreen" />
      ) : (
        <TiArrowSortedDown color="red" />
      )
    ) : null;
  }

  const firstPageRows = rows.slice(pageNum * 50 - 50, pageNum * 50);
  // const testArr = [1, 2, 3, 4, 5];
  // console.log(testArr.splice(0, 3));
  // console.log(testArr);
  // const [testt] = firstPageRows;
  // console.log(firstPageRows);
  return (
    <>
      <Table
        {...getTableProps()}
        style={{ tableLayout: "fixed" }}
        // variant="striped"
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
                    width={
                      column.Header === `#`
                        ? "1.5%"
                        : column.Header === "Coin"
                        ? "7.5%"
                        : column.Header === "Name"
                        ? "3%"
                        : column.Header === "Social Media Status"
                        ? "3.9%"
                        : "60px"
                    }
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
                  >
                    {column.render("Header")}

                    {/* <span> */}

                    {iconsForSorts(column)}

                    {/* </span> */}
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
                _hover={{ bg: "#F3F3F3" }}
              >
                {row.cells.map((cell, i) => {
                  return categoryStyling(cell, i, pageNum);
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <br />
      <Center style={{ marginBottom: "2.5%", marginTop: "2.5%" }}>
        {/* Showing the first 50 results of {rows.length} rows */}
        <Button
          borderRadius="50%"
          w="60px"
          h="60px"
          ml="45%"
          fontSize="200%"
          onClick={() => setPageNum(pageNum - 1)}
          disabled={pageNum === 1}
        >
          {"-"}
        </Button>{" "}
        <Text m="0 1%" fontSize="125%">
          {`Page ${+pageNum} of ${Math.floor(rows.length / 50)}`}
        </Text>
        <Button
          borderRadius="50%"
          w="60px"
          h="60px"
          fontSize="200%"
          onClick={() => setPageNum(pageNum + 1)}
          disabled={pageNum >= rows.length / 50}
        >
          {"+"}
        </Button>{" "}
        <Heading fontSize="100%" ml="20%">
          {" "}
          Go to page:
        </Heading>
        <NumberInput
          w="15%"
          ml="1%"
          defaultValue={1}
          min={1}
          max={Math.ceil(rows.length)}
          placeholder="Enter page number"
          onChange={(e) => {
            if (+e === 1) setPageNum(1);
            if (!+e) setPageNum(1);
            if (+e > 1) setPageNum(+e);
            if (+e >= Math.floor(rows.length / 50))
              setPageNum(Math.floor(rows.length / 50));
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
