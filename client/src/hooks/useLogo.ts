import { useColorMode } from "@chakra-ui/react";

export const useLogo = () => {
  const { colorMode } = useColorMode();

  return colorMode === "light"
    ? "./images/logo.png"
    : "./images/invertedLogo.png";
};
