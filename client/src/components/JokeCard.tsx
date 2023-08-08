import {
  Box,
  Card,
  Flex,
  HStack,
  Image,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";

import { useLogo } from "../hooks";
import { Joke } from "../types/types";

export type JokeCardProps = Joke & {
  isOnlyOne: boolean;
};

export const JokeCard = ({ value, categories, isOnlyOne }: JokeCardProps) => {
  const logo = useLogo();

  return (
    <Card
      boxShadow="0 0 3px 3px #bcbcbc"
      maxW={["100%", 600]}
      minW={["100%", isOnlyOne ? "600px" : "100%"]}
    >
      <Box borderRadius="xl" pb="4" pl="4" pr="4">
        <Flex p="5">
          <HStack m="5" spacing="3" justifyContent="right">
            {categories.map((category) => (
              <Tag key={category}>{category}</Tag>
            ))}
          </HStack>
          <Spacer />
          <Image
            justifyContent="right"
            src={logo}
            alt="Chuck Logo"
            borderRadius="xl"
            boxSize="16"
            mx="auto"
          />
        </Flex>

        <Text wordBreak="break-word">{value}</Text>
      </Box>
    </Card>
  );
};
