import { ChakraProvider } from "@chakra-ui/react";
import { AppLayout } from "../components/AppLayout";
import {theme} from "../styles/theme";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
};

export default MyApp;
