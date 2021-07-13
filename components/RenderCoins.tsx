import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useTable, useSortBy } from "react-table";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import MyModal from "./modal";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import categoryStyling from "../switches/categoryDecor";
// const {
//   getTableProps,
//   getTableBodyProps,
//   headerGroups,
//   prepareRow,
//   page, // Instead of using 'rows', we'll use page,
//   // which has only the rows for the active page

//   // The rest of these things are super handy, too ;)
//   canPreviousPage,
//   canNextPage,
//   pageOptions,
//   pageCount,
//   gotoPage,
//   nextPage,
//   previousPage,
//   setPageSize,
//   state: { pageIndex, pageSize },
// } = useTable(
//   {
//     columns,
//     data,
//     initialState: { pageIndex: 2 },
//   },
//   usePagination
// );
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const getPrice = ({ value: p }) => {
  // return currency(p).format();

  return p === 0
    ? "?"
    : p <= 0.99 && p > 0.1
    ? "$" + p.toFixed(3)
    : p < 0.1 && p > 0.01
    ? "$" + p.toFixed(4)
    : p < 0.01 && p > 0.001
    ? "$" + p.toFixed(5)
    : p < 0.001 && p > 0.0001
    ? "$" + p.toFixed(6)
    : p < 0.0001 && p > 0.00001
    ? "$" + p.toFixed(7)
    : p < 0.00001 && p > 0.000001
    ? "$" + p.toFixed(8)
    : p < 0.000001 && p > 0.0000001
    ? "$" + p.toFixed(9)
    : p < 0.0000001 && p > 0.00000001
    ? "$" + p.toFixed(10)
    : p < 0.00000001 && p > 0.000000001
    ? "$" + p.toFixed(11)
    : p < 0.000000001 && p > 0.0000000001
    ? "$" + p.toFixed(12)
    : p < 0.0000000001 && p > 0.00000000001
    ? "$" + p.toFixed(13)
    : p < 0.00000000001 && p > 0.000000000001
    ? "$" + p.toFixed(14)
    : p < 0.000000000001 && p > 0.0000000000001
    ? "$" + p.toFixed(15)
    : p < 0.0000000000001 && p > 0.00000000000001
    ? "$" + p.toFixed(16)
    : p < 0.00000000000001 && p > 0.000000000000001
    ? "$" + p.toFixed(17)
    : p < 0.000000000000001 && p > 0.0000000000000001
    ? "$" + p.toFixed(18)
    : p < 0.0000000000000001 && p > 0.00000000000000001
    ? "$" + p.toFixed(19)
    : p < 0.00000000000000001 && p > 0.000000000000000001
    ? "$" + p.toFixed(20)
    : p < 0.000000000000000001 && p > 0.0000000000000000001
    ? "$" + p.toFixed(21)
    : "$" + numberWithCommas(p.toFixed(2));
};

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
    Cell: (item) => getPrice(item),
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
  pageNumber = 0,
  searchQuery = "",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<{}>(
      {
        columns,
        data: arr,
      },
      useSortBy
    );

  const firstPageRows = rows.slice(0, 50);

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
              {headerGroup.headers.map(
                (column, i) => (
                  // console.log(column);
                  // column.totalWidth = 20;

                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props

                  <Th
                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                    {...column.getHeaderProps()}
                    width={
                      column.Header === `#`
                        ? "1.25%"
                        : column.Header === "Coin"
                        ? "7.5%"
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
                    {/* FIXME:FIXME:FIXME:IMPLEMENT SORTING HEREFIXME:FIXME:FIXME: */}
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                    <span>
                      {/* @ts-expect-error */}
                      {column.isSorted
                        ? // @ts-expect-error
                          column.isSortedDesc
                          ? `${(<IoMdArrowDropdown />)}`
                          : `${(<IoMdArrowDropup />)}`
                        : ""}
                    </span>
                  </Th>
                ),
                console.log(columns)
              )}
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
                _hover={{ bg: "#ECECEC" }}
              >
                {row.cells.map((cell, i) => {
                  return categoryStyling(cell, i);
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <br />
      <div style={{ marginBottom: "2.5%", marginTop: "2.5%" }}>
        Showing the first 50 results of {rows.length} rows
      </div>
      {/* <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {"<"}
      </Button>{" "}
      <Button onClick={() => nextPage()} disabled={!canNextPage}>
        {">"}
      </Button> */}
    </>
  );

  // <Box
  //   w="11.875%"
  //   textAlign="right"
  //   justifyContent="right"
  //   justifyItems="right"
  //   fontSize="90%"
  //   fontWeight="500"
  //   color={coin.pc > 0 ? "#57bd0f" : coin.pc < 0 ? "red" : "black"}
  // >
  //   {coin.pc > 0 ? (
  //     <>
  //       {/* <IoMdArrowDropup></IoMdArrowDropup> */}
  //       {`${coin.pc.toFixed(2)}%`}
  //     </>
  //   ) : (
  //     <>
  //       {/* <IoMdArrowDropdown /> */}
  //       {`${coin.pc.toFixed(2)}%`}
  //     </>
  //   )}
  // </Box>
  // <Box w="11.875%" textAlign="right" fontSize="85%">
  //   <Text cursor="pointer">
  //     {`${
  //       coin.v === 0 ? "?" : "$" + numberWithCommas(coin.v.toFixed(0))
  //     }`}
  //   </Text>
  // </Box>
  // <Box w="11.875%" textAlign="right" fontSize="85%">
  //   {`${
  //     coin.mc === 0 ? "?" : "$" + numberWithCommas(coin.mc.toFixed(0))
  //   }`}
  // </Box>

  // <Box w="11.875%" textAlign="center" fontSize="85%">
  //   {`${coin.vt === 0 ? "?" : (coin.vt * 100).toFixed(2) + "%"}`}
  // </Box>
  // <Box w="11.875%" textAlign="center" fontSize="85%">
  //   {/* <Button w="100%">SOCIAL MEDIA STATUS</Button> */}

  //   <MyModal Curcoin={coin} />
  // </Box>
}
// function nextPage(): void {
//   throw new Error("Function not implemented.");
// }

// function previousPage(): void {
//   throw new Error("Function not implemented.");
// }
