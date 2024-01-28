import styles from "./page.module.css";
import SocialMedia from "./cards/socialmediaBar/socialMediaBar";
import MenuBar from "./cards/menuBar/menuBar";
import PageHead from "./cards/pageHead/pageHead";
export default function Home() {
  return (
    <main className={styles.main}>
      <SocialMedia />
      <PageHead />
      <MenuBar />
    </main>
  );
}
