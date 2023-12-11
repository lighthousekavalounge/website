import styles from "./styles.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.header}>Lighthouse Kava Lounge</h1>
        <div className={styles.imgContainer}>
          <Image
            fill
            src="https://res.cloudinary.com/dklxcif1m/image/upload/v1702324524/Temp/image-from-rawpixel-id-12052407-png_covtjy.png"
            alt="lighthouse"
          />
        </div>
        <p>Coming Soon...</p>
      </div>
    </main>
  );
}
