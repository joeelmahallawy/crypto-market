import { Button,Text } from "@chakra-ui/react";
import React from "react";

export default function Pagination(pageNum) {
return pageNum===0?<>
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
}
