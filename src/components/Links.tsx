import React from "react"
import links from "@/data/links"
import styles from "./Links.module.css"

function Links() {
  return (
    <div className={styles.links}>
      {links.map((link, index) => (
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          key={link.label}
          href={link.url}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}

export default Links
