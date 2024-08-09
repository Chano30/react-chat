import { extendTheme } from "@chakra-ui/react";

import "@fontsource/manrope";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#F86F0388",
      200: "#F86F0366",
      300: "#F86F03AA",
      400: "#F86F03FF",
      500: "#F86F03"
    },
    primary: {
      100: "#301D0088",
      200: "#301D0066",
      300: "#301D00AA",
      400: "#301D00FF",
      500: "#E4E6EB" // edited
    },
    gray:{
      100: '#a5a5a5'
    },
    blue: {
      100: '#279DED'
    },
    background: {
      100: "#222222", // edited
      200: "#1A1A1A", // edited
      300: "#FFFDF5AA",
      400: "#FFFDF5FF",
      500: "#FFFDF5"
    },
    green: {
      100: "#CCCE6D88",
      200: "#CCCE6D66",
      300: "#CCCE6DAA",
      400: "#CCCE6DFF",
      500: "#CCCE6D"
    },
    purple: {
      100: "#CCB3F888",
      200: "#CCB3F866",
      300: "#CCB3F8AA",
      400: "#CCB3F8FF",
      500: "#CCB3F8"
    },
    yellow: {
      100: "#FFDB6688",
      200: "#FFDB6666",
      300: "#FFDB66AA",
      400: "#FFDB66FF",
      500: "#FFDB66"
    },
    pink: {
      100: "#FF99D088",
      200: "#FF99D066",
      300: "#FF99D0AA",
      400: "#FF99D0FF",
      500: "#FF99D0"
    }
  },
  fonts: {
    heading: "Manrope",
    body: "Manrope"
  },
  baseStyle: {
    separator: {
      separator: {
        bg: "brand.500"
      }
    }
  }
});

export default theme;
