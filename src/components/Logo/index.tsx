import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Logo() {
  return (
    <div className={`${styles.logo} ${styles.cyan}`}>
      <a href="#" className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
