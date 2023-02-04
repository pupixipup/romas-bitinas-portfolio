import "@/styles/globals.css"
import { createTheme } from "@mui/material"
import type { AppProps } from "next/app"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
