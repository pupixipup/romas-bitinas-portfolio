import Head from "next/head"
import { Inter } from "@next/font/google"
import styles from "@/styles/Home.module.css"
import Animated from "@/components/Animated"
import Links from "@/components/Links"
import ExperienceCards from "@/components/ExperienceCards"
import Projects from "@/components/Projects/Projects"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Romas Bitinas. Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <Animated className={styles.title} element="h1">
            Hello.
          </Animated>
          <Animated className={styles.title} element="h1">
            I am Romas. I am a full stack developer.
          </Animated>
          <Animated className={styles.title} element="h1">
            My main stack is React, Node.js, TypeScript,
          </Animated>
          <Animated className={styles.title} element="h1">
            But I am eager to learn new things.
          </Animated>
        </section>
        <section className={styles.aboutMe}>
          <Animated className={styles.titleDark} element="h1">
            About me
          </Animated>
          <Animated className={styles.text} element="p">
            I am 20 years old. I live in Sweden, and I am a student of Jönköping
            University. I am studying Front-End Development and Graphic Design
            in School of Engineering
          </Animated>
          <Animated
            className={`${styles.text} ${styles.alignRight}`}
            element="div"
          >
            <h1 className={`${styles.titleDark} ${styles.alignRight}`}>
              Contacts
            </h1>
            <Links />
          </Animated>
        </section>
        <section className={styles.hero}>
          <Animated className={styles.title} element="h1">
            Experience
          </Animated>
          <Animated>
            <ExperienceCards className={styles.experiences} />
          </Animated>
        </section>
        <section className={styles.aboutMe}>
          <Projects />
        </section>
      </main>
    </>
  )
}
