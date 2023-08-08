import { extendTheme } from "@chakra-ui/theme-utils";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default theme;
