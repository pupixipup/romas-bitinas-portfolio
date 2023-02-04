import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import experience from "@/data/experience"
import styles from "./MediaCard.module.css"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ExperienceModal from "../ExperienceModal/ExperienceModal"

interface MediaCardProps {
  data: typeof experience[0]
  button?: string
}

export default function MediaCard(props: MediaCardProps) {
  const [open, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])
  const openModal = () => setIsOpen(true)
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.data.url}
          title="green iguana"
        />
        <CardContent>
          <Typography
            className={styles.date ?? ""}
            gutterBottom
            variant="caption"
            component="div"
          >
            {props.data.startDate} - {props.data.endDate}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.position}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.brief}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={openModal}
            fullWidth={true}
            variant="outlined"
            size="medium"
          >
            {props.button ?? "Expand"}
          </Button>
        </CardActions>
      </Card>
      <ExperienceModal open={open} handleClose={() => setIsOpen(false)} />
    </>
  )
}
