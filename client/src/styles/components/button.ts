import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  bg: "red",
  width: "100%",
  size: "lg",
  p: 3,
  color: "white",
  textAlign: "center",
  boxShadow: "0 0 4px 4px #ababab",
  ":hover": {
    bg: "red.600",
  },
  _dark: {
    color: "black",
    bg: "gray.300",
    p: 5,
    boxShadow: "0 0 4px 4px #efdfde",
    ":hover": {
      color: "white",
      bg: "gray.600",
      background: "gray.600",
    },
  },
});
export const buttonTheme = defineStyleConfig({
  variants: { outline },
});
