import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { ScrollToTop } from "./ScrollToTop";
import { useBackground } from "../../hooks";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const background = useBackground();

  return (
    <Box bgImage={background} minHeight="100vh" pb={[75, 10]}>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
      <ScrollToTop />
    </Box>
  );
};
