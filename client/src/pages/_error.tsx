import { NextPage, NextPageContext } from "next";
import React from "react";
import { Center } from "@chakra-ui/react";
import { Alert } from "../components/Alert";

type Props = {
  statusCode: number | undefined;
};

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <Center>
      <Alert
        status="error"
        title={"Error " + statusCode}
        description="Please try again later"
      />
    </Center>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
