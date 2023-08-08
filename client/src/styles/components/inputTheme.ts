import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const joke = definePartsStyle({
  field: {
    background: "gray.50",
    colorScheme: "whiteAlpha",

    _placeholder: {
      color: "black",
    },

    _hover: {
      border: "1px",
      borderColor: "gray.500",
    },
    _focus: {
      border: "2px",
      borderColor: "gray.500",
    },

    _dark: {
      background: "gray.700",
      _placeholder: {
        color: "white",
      },

      _hover: {
        border: "1px",
        borderColor: "gray.200",
      },
      _focus: {
        border: "2px",
        borderColor: "gray.200",
      },
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { joke },
});
