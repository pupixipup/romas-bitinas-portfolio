import experience from "@/data/experience"

import React from "react"
import MediaCard from "./MediaCard/MediaCard"

function ExperienceCards(props: { className?: string }) {
  return (
    <div className={props.className ?? ""}>
      {experience.map((el) => (
        <MediaCard data={el} key={el.company} />
      ))}
    </div>
  )
}

export default ExperienceCards
