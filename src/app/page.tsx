import styles from "./page.module.css";
//import SocialMedia from "./cards/socialmediaBar/socialMediaBar";
import MenuBar from "./cards/menuBar/menuBar";
import PageHead from "./cards/pageHead/pageHead";
import About from "./cards/about/about";
import Hero from "./cards/hero/hero";
import Contact from "./cards/contact/contact";
export default function Home() {
  return (
    <main className={styles.main}>
      <PageHead />
      <MenuBar />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}
