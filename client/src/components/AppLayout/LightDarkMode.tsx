import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const LightDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        aria-label="toggle theme"
        position="absolute"
        top={4}
        left={4}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
          <MoonIcon color="blue.700" />
        ) : (
          <SunIcon color="orange.400" />
        )}
      </Button>
    </header>
  );
};
