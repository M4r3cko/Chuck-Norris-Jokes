import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button";

import { numberInputTheme } from "./components/numberInputTheme";
import { selectTheme } from "./components/selectTheme";
import { inputTheme } from "./components/inputTheme";
import { containerTheme } from "./components/footerTheme";

export const theme = extendTheme({
  components: {
    Select: selectTheme,
    NumberInput: numberInputTheme,
    Input: inputTheme,
    Button: buttonTheme,
    Container: containerTheme,
  },
});
