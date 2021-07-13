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
} from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";

const AdvancedChart = dynamic(
  () => import("react-tradingview-embed/dist/components/AdvancedChart"),
  { ssr: false }
);

export default function BasicUsage({ Curcoin }) {
  Curcoin = Curcoin.row.original;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        _focus={{ outline: "none" }}
        _hover={{ bg: "lightgray" }}
        bg="#EAEAEA"
      >
        SOCIAL MEDIA STATUS
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>{Curcoin.n}</ModalHeader> */}
          <ModalCloseButton
            _focus={{ outline: "none" }}
            size="lg"
            _hover={{ bg: "#8D8D8D" }}
          />
          <ModalBody>
            <Center m="0 auto" mt="5%" mb="5% ">
              <Box>
                <Heading textAlign="center" fontSize="300%" mr="-75%">
                  {Curcoin.n}
                </Heading>
              </Box>
              <Flex flexDir="column" pb="2.5%">
                <Heading
                  fontSize="120%"
                  ml="100%"
                  w="100%"
                  pb="5%"
                  color="gray"
                  fontWeight="400"
                  fontFamily="sans-serif"
                >
                  {`${Curcoin.n} Price`}
                  {` (${Curcoin.s})`}
                </Heading>
                <Heading
                  textAlign="center"
                  fontSize="120%"
                  ml="150%"
                  w="50%"
                  pb="5%"
                >
                  {`$${Curcoin.p.toFixed(2)}`}
                </Heading>
              </Flex>
            </Center>
            <div>
              <AdvancedChart
                widgetProps={{
                  width: "100%",
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
            <SimpleGrid columns={1} spacing={2.5}>
              <Flex justifyContent="space-between" height="80px">
                <Text fontSize="200%">TWEETS IN PAST 24 HOURS:</Text>
                <Text position="absolute" right="5%" fontSize="200%">
                  {Curcoin.t}
                </Text>
              </Flex>
              <Flex height="80px" justifyContent="space-between">
                <Text fontSize="200%">REDDIT ACTIVITY IN PAST 24 HOURS:</Text>
                <Text position="absolute" right="5%" fontSize="200%">
                  {Curcoin.r}
                </Text>
              </Flex>

              <Flex justifyContent="space-between" height="80px">
                <Text fontSize="200%">SOCIAL DOMINANCE:</Text>
                <Text position="absolute" right="5%" fontSize="200%">
                  {Curcoin.sd < 0.01 ? `<0.01` : `${Curcoin.sd.toFixed(2)}%`}
                </Text>
              </Flex>
              <Flex justifyContent="space-between" height="80px">
                <Text fontSize="200%">BULLISH POSTS:</Text>
                <Text position="absolute" right="5%" fontSize="200%">
                  {Curcoin.bl}
                </Text>
              </Flex>
              <Flex justifyContent="space-between" height="80px">
                <Text fontSize="200%">BEARISH POSTS:</Text>
                <Text position="absolute" right="5%" fontSize="200%">
                  {Curcoin.br}
                </Text>
              </Flex>

              <Flex justifyContent="space-between" height="80px">
                <Text fontSize="200%">BEARISH - BULLISH SPECTRUM</Text>

                <Slider
                  aria-label="slider-ex-2"
                  colorScheme="pink"
                  defaultValue={+(Curcoin.as * 20).toFixed(2)}
                  w="25%"
                  size="md"
                  textAlign="center"
                  fontSize="175%"
                  color={+(Curcoin.as * 20).toFixed(2) < 50 ? "red" : "#55B222"}
                >
                  {`${(Curcoin.as * 20).toFixed()}%`}
                  <SliderTrack>
                    <SliderFilledTrack
                      bg={
                        +(Curcoin.as * 20).toFixed(2) < 50 ? "red" : "#55B222"
                      }
                    />
                  </SliderTrack>
                </Slider>
              </Flex>
            </SimpleGrid>
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
