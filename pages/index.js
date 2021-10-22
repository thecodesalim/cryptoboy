import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>CRYPTO BOY</title>
          <meta name="an nft based game" content="nft mobile game" />
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
      </div>
      <div className={styles.bg}>
        <h1 className={styles.header}>
          CRYPTO <span className={styles.yellow}>BOY</span>
        </h1>
      </div>
      <div className={styles.main}>
        <p className={styles.headerText}>An NFT based game</p>
        <p className={styles.text}>COMING SOON</p>
      </div>
    </div>
  );
}
