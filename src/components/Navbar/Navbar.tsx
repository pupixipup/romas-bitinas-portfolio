import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Divider,
} from "@mui/material"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import React from "react"
import { useRouter } from "next/router"
import Link from "next/link"

function Navbar() {
  const trigger = useScrollTrigger()
  const router = useRouter()
  const linkData =
    router.pathname === "/"
      ? { link: "/contacts", label: "Contacts" }
      : { link: "/", label: "Home" }
  return (
    <Slide in={!trigger}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Link
            style={{ textAlign: "right", width: "100%" }}
            href={linkData.link}
          >
            <Typography variant="h6" color="inherit" component="div">
              {linkData.label}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default Navbar
