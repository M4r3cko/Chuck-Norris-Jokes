import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const footer = defineStyle({
  minWidth: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  bgColor: 'gray.50',
  position: 'absolute',
  bottom: '0',
  fontWeight: 'md',

  _dark: {
    bgColor: 'gray.800',
  },
});

export const containerTheme = defineStyleConfig({ variants: { footer } });
