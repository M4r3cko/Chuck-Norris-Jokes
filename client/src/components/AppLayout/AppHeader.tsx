import { Box, Flex, Image } from "@chakra-ui/react";
import { useLogo } from "../../hooks";
import { LightDarkMode } from "./LightDarkMode";

export const AppHeader = () => {
  const logo = useLogo();

  return (
    <>
      <LightDarkMode />
      <Flex p="3" justifyContent="center">
        <Box maxWidth={600}>
          <Flex justifyContent="center">
            <Image
              src={logo}
              alt="Chuck Norris approved picture"
              maxBlockSize={200}
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
