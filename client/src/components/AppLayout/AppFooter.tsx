import {
  ButtonGroup,
  Container,
  IconButton,
  Flex,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

export const AppFooter = () => {
  return (
    <Container as="footer" variant="footer">
      <Flex justify="center" direction={["column", "row"]} alignItems="center">
        <ButtonGroup variant="ghost">
          <Tooltip label="Facebook">
            <IconButton
              as="a"
              target="_blank"
              href="https://www.facebook.com/groups/223130684832725"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
            />
          </Tooltip>
          <Tooltip label="GitHub">
            <IconButton
              as="a"
              target="_blank"
              href="https://github.com/chucknorris-io"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
          </Tooltip>
          <Tooltip label="Twitter">
            <IconButton
              as="a"
              target="_blank"
              href="https://twitter.com/chucknorrsjokes?lang=en"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </Tooltip>
        </ButtonGroup>

        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} MJ Development, Inc. All rights
          reserved.
        </Text>
      </Flex>
    </Container>
  );
};
