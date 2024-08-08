import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "@/fonts";
import theme from "@/theme";

export function Provider({children}: {children: React.ReactNode}) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}