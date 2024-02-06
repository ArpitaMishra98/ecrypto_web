import Wrapper from "@/layout/Wrapper/Wrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import NightModeToggle from "@/components/NightModeToggle";
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  const { theme } = useThemeContext();

  return (


    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </QueryClientProvider>
  
  );
}
