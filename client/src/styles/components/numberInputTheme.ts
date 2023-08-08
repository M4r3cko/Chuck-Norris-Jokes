import { numberInputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const joke = definePartsStyle({
  field: {
    borderColor: "gray.200",
    background: "gray.50",
    colorScheme: "whiteAlpha",
    _placeholder: {
      color: "black",
    },
    _dark: {
      borderColor: "gray.400",
      background: "gray.700",
      _placeholder: {
        color: "white",
      },
    },
  },
});

export const numberInputTheme = defineMultiStyleConfig({
  variants: { joke },
});
