import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import DialPadAudioElements from "./DialPadSoundElement";
import { useEffect } from "react";

type DialPadProbs = {
  handleDigitPress: (digit: string) => void;
};

const keySounds = new DialPadAudioElements();

export const DialPad = ({ handleDigitPress }: DialPadProbs) => {
  const buttons = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "#"].includes(
        e.key
      )
    ) {
      keySounds?.playKeyTone(e.key);
      handleDigitPress(e.key);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Box p={2} w="full">
      <VStack w="full" bg="grey.500" spacing={0.5}>
        {buttons.map((row, rowIndex) => (
          <HStack key={rowIndex} justifyContent="space-between" spacing={0.5}>
            {row.map((num) => (
              <Button
                key={num}
                onClick={() => {
                  keySounds?.playKeyTone(num);
                  handleDigitPress(num);
                }}
                size="lg"
                p={0}
                width="124px"
                height="70px"
                variant="unstyled"
                bg="white"
                _hover={{
                  bg: "gray.100",
                }}
                borderRadius={0}
              >
                {num}
              </Button>
            ))}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default DialPad;
