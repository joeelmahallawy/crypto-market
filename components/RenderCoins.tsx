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
              {headerGroup.headers.map((column, i) => {
                // @ts-expect-error
                column.sortType = "basic";
                return (
                  <Th
                    // @ts-expect-error
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    width={
                      column.Header === `#`
                        ? "1.5%"
                        : column.Header === "Coin"
                        ? "7.5%"
                        : column.Header === "Name"
                        ? "3%"
                        : column.Header === "Social Media Status"
                        ? "4%"
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
    </>
  );
}
