import {
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Alert as ChakraAlert,
  AlertProps as ChakraAlertProps,
} from "@chakra-ui/react";

export type AlertProps = {
  status: ChakraAlertProps["status"];
  title: string;
  description: string;
};

export const Alert = ({ status, title, description }: AlertProps) => {
  return (
    <ChakraAlert status={status} justifyContent="center">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </ChakraAlert>
  );
};
