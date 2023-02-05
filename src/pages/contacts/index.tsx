import React from "react"
import styles from "./Contacts.module.css"
import Animated from "@/components/Animated"
import homeStyles from "@/styles/Home.module.css"
import links from "@/data/links"

function Contacts() {
  return (
    <div className={styles.contacts}>
      <Animated className={homeStyles.title} element="h1">
        Contacts
      </Animated>
      <div className={`${homeStyles.skills} ${styles.skills}`}>
        {links.map((el) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={el.url}
            className={homeStyles.skill}
            key={el.label}
          >
            {el.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Contacts
