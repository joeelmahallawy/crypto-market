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
              REDDIT ACTIVITY IN PAST 24 HOURS:{Curcoin.n}
            </Text>
            <Text fontSize="xl">SOCIAL DOMINANCE:{Curcoin.n}</Text>
            <Text fontSize="xl">BULLISH TO BEARISH RATIO:{Curcoin.n}</Text>
            <Text fontSize="xl">AVERAGE BULLISH SCORE:{Curcoin.n}</Text>
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
