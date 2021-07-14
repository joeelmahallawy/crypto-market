import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Box,
  SimpleGrid,
  Flex,
  Center,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";
import getPrice from "../helpers/pricePrecision";
import fillTable from "../helpers/fillTable";

const AdvancedChart = dynamic(
  () => import("react-tradingview-embed/dist/components/AdvancedChart"),
  { ssr: false }
);

export default function BasicUsage({ Curcoin }) {
  const modalButton = useColorModeValue("#C9C9C9", "gray");
  const modalHoverButton = useColorModeValue("lightgray", "gray.500");

  Curcoin = Curcoin.row.original;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        _focus={{ outline: "none" }}
        _hover={{ bg: modalHoverButton }}
        // bg="#EAEAEA"
        bg={modalButton}
      >
        SOCIAL MEDIA STATUS
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            _focus={{ outline: "none" }}
            size="lg"
            _hover={{ bg: "#8D8D8D" }}
          />
          <ModalBody>
            <Flex mt="1.5%" gridGap="10%" w="100%">
              <Box ml="30%">
                <Heading textAlign="center" fontSize="250%" mr="-75%">
                  {Curcoin.n}
                </Heading>
              </Box>
              <Box flexDir="column" pb="2.5%" pl="5%" float="right">
                <Heading
                  fontSize="120%"
                  pb="5%"
                  fontWeight="400"
                  fontFamily="sans-serif"
                  textAlign="right"
                >
                  {`${Curcoin.n} Price`}
                  {` (${Curcoin.s})`}
                </Heading>
                <Heading textAlign="right" fontSize="120%" right="0px" pb="5%">
                  {`${getPrice(Curcoin.p)}`}
                </Heading>
              </Box>
            </Flex>
            <div>
              <AdvancedChart
                widgetProps={{
                  width: "auto",
                  height: 610,
                  symbol: `${Curcoin.s}USD`,
                  interval: "D",
                  timezone: "Etc/UTC",
                  theme: "dark",
                  style: "1",
                  locale: "en",
                  toolbar_bg: "#f1f3f6",
                  enable_publishing: false,
                  allow_symbol_change: false,
                }}
              />
            </div>

            <Table variant="simple">
              {fillTable(Curcoin.t, "TWEETS IN PAST 24 HOURS:")}
              {fillTable(Curcoin.r, "REDDIT ACTIVITY IN PAST 24 HOURS:")}
              {fillTable(Curcoin.sd, "SOCIAL DOMINANCE:")}
              {fillTable(Curcoin.bl, "BULLISH POSTS:")}
              {fillTable(Curcoin.br, "BEARISH POSTS:")}
              <Tr>
                <Td fontSize="125%">BEARISH - BULLISH SPECTRUM</Td>
                <Td>
                  <Slider
                    aria-label="slider-ex-2"
                    colorScheme="pink"
                    defaultValue={+(Curcoin.as * 20).toFixed(2)}
                    w="100%"
                    size="md"
                    textAlign="center"
                    fontSize="175%"
                    color={
                      +(Curcoin.as * 20).toFixed(2) < 50 ? "red" : "#55B222"
                    }
                    isDisabled={true}
                  >
                    <Text mb="15%" float="right">{`${(
                      Curcoin.as * 20
                    ).toFixed()}%`}</Text>
                    <SliderTrack>
                      <SliderFilledTrack
                        bg={
                          +(Curcoin.as * 20).toFixed(2) < 50 ? "red" : "#55B222"
                        }
                      />
                    </SliderTrack>
                  </Slider>
                </Td>
              </Tr>
            </Table>
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              variant="solid"
              onClick={onClose}
              w="20%"
              _hover={{ bg: "gray" }}
              _focus={{ outline: "none" }}
            >
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
