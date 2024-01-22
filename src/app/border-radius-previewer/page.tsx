"use client";
import { useState } from "react";
import styles from "../styles.module.scss";

export default function BorderRadiusPreviewer() {
  const [topLeft, setTopLeft] = useState("0");
  const [topRight, setTopRight] = useState("0");
  const [bottomLeft, setBottomLeft] = useState("0");
  const [bottomRight, setBottomRight] = useState("0");
  const [text, setText] = useState("");

  const estilo = {
    width: "48%",
    height: "200px",
    backgroundColor: "lightblue",
    border: "1px solid black",
    marginTop: "1rem",
    borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
  };

  const handleCopyToClipboard = async () => {
    let copyText = `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;`;
    try {
      await navigator.clipboard.writeText(copyText);
      setText(copyText);
      console.log("Texto copiado para a área de transferência:", copyText);
      setTimeout(() => {
        setText("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao copiar para a área de transferência:", error);
    }
  };

  return (
    <div className={styles.container}>
      <article>
        O objetivo desse app-idea é criar um visualizador de borda arredondada,
        com possibilidade de alterar cada canto da borda e no final copiar o
        código para utilizar no projeto.
      </article>
      <div className={styles.codigo}>
        <div className={styles.divtwo}>
          <label htmlFor="">
            top-left
            <input type="number" onChange={(e) => setTopLeft(e.target.value)} />
          </label>

          <label htmlFor="">
            top-right
            <input
              type="number"
              onChange={(e) => setTopRight(e.target.value)}
            />
          </label>

          <label htmlFor="">
            bottom-left
            <input
              type="number"
              onChange={(e) => setBottomLeft(e.target.value)}
            />
          </label>

          <label htmlFor="">
            bottom-right
            <input
              type="number"
              onChange={(e) => setBottomRight(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.divtwo}>
          <div style={estilo}></div>

          <div className={styles.copyboard}>
            border-radius: {topLeft}px {topRight}px {bottomLeft}px {bottomRight}
            px;
          </div>
        </div>

        <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        {text !== "" && (
          <p className={styles.fadeout}>
            Texto copiado com <strong>sucesso!</strong>
          </p>
        )}
      </div>
    </div>
  );
}
