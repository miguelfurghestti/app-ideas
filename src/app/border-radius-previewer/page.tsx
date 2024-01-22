import styles from "../styles.module.scss";

export default function BorderRadiusPreviewer() {
  return (
    <div className={styles.container}>
      <article>
        O objetivo desse app-idea é criar um Binary-to-Decimal number converter
        (convertedor numérico de binário para decimal.)
      </article>
      <div className={styles.codigo}></div>
    </div>
  );
}
