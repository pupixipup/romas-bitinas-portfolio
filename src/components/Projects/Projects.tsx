import React, { useState, useRef } from "react"
import styles from "./Projects.module.css"
import portfolio from "@/data/portfolio"
import homeStyles from "@/styles/Home.module.css"
import Animated from "../Animated"
import Image from "next/image"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { Button, Typography } from "@mui/material"
function Projects() {
  const [currentProject, setProject] = React.useState(portfolio[0])
  const [inProp, setInProp] = useState(false)
  const nodeRef = useRef(null)
  return (
    <>
      <Animated className={homeStyles.titleDark} element="h1">
        Portfolio
      </Animated>
      <Animated className={styles.projects}>
        <ul className={styles.list}>
          {portfolio.map((project, index) => (
            <li
              onClick={() => setProject(project)}
              className={
                project.title === currentProject.title
                  ? `${styles.title} ${styles.active}`
                  : styles.title
              }
              key={project.title}
            >
              {project.title}
            </li>
          ))}
        </ul>
        <div className={styles.project}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={currentProject.url}
              classNames="fade-in-component"
              timeout={300}
            >
              <>
                <Image
                  ref={nodeRef}
                  width="720"
                  height="420"
                  alt={currentProject.title}
                  className={styles.image}
                  src={currentProject.imageUrl}
                />
                <Typography
                  sx={{
                    mt: "2rem",
                    mb: "1rem",
                    fontFamily: "Poppins",
                  }}
                  variant="h4"
                  color="text.secondary"
                >
                  {currentProject.title}
                </Typography>
                <Typography
                  sx={{
                    mt: "1rem",
                    mb: "1rem",
                    fontFamily: "Poppins",
                  }}
                  variant="h5"
                  color="text.secondary"
                >
                  {currentProject.description}
                </Typography>
                <div className={styles.stack}>
                  {currentProject.stack.map((item) => (
                    <div className={styles.stackItem} key={item}>
                      {item}
                    </div>
                  ))}
                </div>
                <Button
                  sx={{
                    width: 100,
                    fontFamily: "Poppins",
                  }}
                  onClick={() =>
                    window.open(currentProject.url, "_blank", "noreferrer")
                  }
                  fullWidth={false}
                  variant="outlined"
                  size="large"
                >
                  Link
                </Button>
              </>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </Animated>
    </>
  )
}

export default Projects
