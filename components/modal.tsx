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
} from "@chakra-ui/react";
import React from "react";

export default function BasicUsage({ Curcoin }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>SOCIAL MEDIA STATUS</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>{Curcoin.n}</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <Heading textAlign="center">{Curcoin.n}</Heading>
            <Text fontSize="xl">TWEETS IN PAST 24 HOURS:{Curcoin.t}</Text>
            <Text fontSize="xl">
              REDDIT ACTIVITY IN PAST 24 HOURS:{Curcoin.r}
            </Text>
            <Text fontSize="xl">
              SOCIAL DOMINANCE:
              {Curcoin.sd < 0.01 ? `<0.01` : `${Curcoin.sd.toFixed(2)}%`}
            </Text>
            <Text fontSize="xl">BULLISH POSTS: {Curcoin.bl}</Text>
            <Text fontSize="xl">BEARISH POSTS: {Curcoin.br}</Text>
            <Text fontSize="xl">
              BEARISH - BULLISH SPECTRUM: {`${(Curcoin.as * 20).toFixed()}%`}
              <Slider
                aria-label="slider-ex-2"
                colorScheme="pink"
                defaultValue={+(Curcoin.as * 20).toFixed(2)}
                w="65%"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
              </Slider>
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
