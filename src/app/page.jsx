import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/dev.svg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Elevating Digital Excellence</h1>
        <p className={styles.desc}>
          Crafting Exceptional Designs for Your Digital Innovations.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
