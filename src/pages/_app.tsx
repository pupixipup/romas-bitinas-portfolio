import "@/styles/globals.css"
import { createTheme } from "@mui/material"
import type { AppProps } from "next/app"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import Navbar from "@/components/Navbar/Navbar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
