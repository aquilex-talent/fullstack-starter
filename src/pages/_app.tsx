import * as React from "react";
import '../styles/global.css';
import type { AppProps } from "next/app";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { theme } from "../styles/theme/theme";
import createEmotionCache from "../utility/createEmotionCache";
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
