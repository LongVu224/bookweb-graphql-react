import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core";
import { createClient, Provider } from "urql";
import theme from "../theme";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" }, //send cookie -> need cookies to register
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;