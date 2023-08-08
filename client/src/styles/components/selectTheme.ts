import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderColor: "gray.200",
    background: "gray.50",
    colorScheme: "whiteAlpha",

    _dark: {
      borderColor: "gray.400",
      background: "gray.700",
    },
  },
  icon: {
    color: "black.800",

    _dark: {
      color: "white",
    },
  },
});

export const selectTheme = defineMultiStyleConfig({ baseStyle });
