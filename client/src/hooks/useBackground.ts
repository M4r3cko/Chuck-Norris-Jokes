import { useColorMode } from "@chakra-ui/react";

export const useBackground = () => {
  const { colorMode } = useColorMode();

  return colorMode === "light"
    ? "./images/lightModeBackground.jpeg"
    : "./images/darkModeBackground.jpeg";
};
