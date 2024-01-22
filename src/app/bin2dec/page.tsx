"use client";
import styles from "../styles.module.scss";
import { useState } from "react";

export default function bin2dec() {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalOutput, setDecimalOutput] = useState<number | null>(null);
  const [errorFind, setErrorFind] = useState(false);

  const convertBinaryToDecimal = () => {
    //Verifica se a entrada é um número binário válido
    if (
      /^[01]+$/.test(binaryInput) &&
      binaryInput.length <= 8 &&
      binaryInput.length > 1
    ) {
      const decimalValue = parseInt(binaryInput, 2);
      setDecimalOutput(decimalValue);
      setBinaryInput("");
      setErrorFind(false);
    } else {
      setDecimalOutput(null);
      setErrorFind(true);
    }
  };

  return (
    <div className={styles.container}>
      <article>
        O objetivo desse app-idea é criar um Binary-to-Decimal number converter
        (convertedor numérico de binário para decimal.)
      </article>
      <div className={styles.codigo}>
        <p>Digite algum número (máximo de 8 digitos):</p>

        <input
          type="text"
          value={binaryInput}
          onChange={(e) => setBinaryInput(e.target.value)}
          placeholder="Digite o número para converter"
        />
        <button onClick={convertBinaryToDecimal}>Converter</button>

        {decimalOutput !== null && (
          <p>
            O resultado é: <strong>{decimalOutput}</strong>
          </p>
        )}

        {errorFind === true && (
          <center>
            <p style={{ color: "red", width: 400 }}>
              Você digitou um número binário inválido ou com menos de 2 digitos
              ou mais de 8 digitos.
            </p>
          </center>
        )}
      </div>
    </div>
  );
}
