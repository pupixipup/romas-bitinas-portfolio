import { Box, Modal, Typography } from "@mui/material"
import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 2,
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
}

interface IProps {
  open: boolean
  handleClose: () => void
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function ExperienceModal({ open, handleClose }: IProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </ThemeProvider>
  )
}

export default ExperienceModal
