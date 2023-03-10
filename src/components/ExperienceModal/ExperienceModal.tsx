import { Box, Modal, Typography } from "@mui/material"
import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import experience from "@/data/experience"
import styles from "./ExperienceModal.module.css"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 2,
  width: 400,
  bgcolor: "#121212",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
}

interface IProps {
  experience: typeof experience[0]
  open: boolean
  handleClose: () => void
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: [
      "Poppins",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})
const whiteText = { color: "White" }
function ExperienceModal({ open, handleClose, experience }: IProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography style={whiteText} variant="h6" component="h2">
          {experience.company}
        </Typography>
        <Typography sx={{ mt: 1, color: "white" }} variant="h4" component="h2">
          {experience.position}
        </Typography>
        <Typography
          sx={{ mt: 1, color: "white" }}
          className={styles.date}
          variant="h6"
          component="p"
        >
          {experience.startDate} - {experience.endDate}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, color: "white" }}>
          {experience.description}
        </Typography>
      </Box>
    </Modal>
  )
}

export default ExperienceModal
