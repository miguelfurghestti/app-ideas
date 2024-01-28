"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { SiConvertio } from "react-icons/si";

export default function Csv2Json() {
  const [csvCode, setCsvCode] = useState("");
  const [error, setError] = useState("");
  const [jsonCode, setJsonCode] = useState<string | null>(null);

  function validarCode(content: any) {
    // Verifica se há pelo menos uma linha
    if (csvCode.length === 0) {
      console.log("O campo de CSV está vazio.");
      return false;
    }

    // Divide o conteúdo em linhas
    const linhas = content.split("\n");

    const cabecalho = linhas[0].split(",");
    const numeroColunas = cabecalho.length;

    if (numeroColunas === 0) {
      console.error("O cabeçalho do CSV não contém colunas.");
      return false;
    }

    // Verifica se todas as linhas têm o mesmo número de colunas
    for (let i = 1; i < linhas.length; i++) {
      const colunas = linhas[i].split(",");
      if (colunas.length !== numeroColunas) {
        setError(
          `A linha ${i + 1} não tem o mesmo número de colunas que o cabeçalho.`
        );
        return false;
      }
    }

    try {
      const jsonData = [];

      for (let i = 1; i < linhas.length; i++) {
        const colunas = linhas[i].split(",");
        const objeto = {};

        for (let j = 0; j < cabecalho.length; j++) {
          objeto[cabecalho[j]] = colunas[j];
        }

        jsonData.push(objeto);
      }

      let jsonString = JSON.stringify(jsonData, null, 2);

      jsonString = jsonString.replace(/\\+"/g, "");

      setJsonCode(jsonString);
      setError("");
    } catch (error) {
      console.log(error);
    }
  }

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonCode);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [csvCode]);

  return (
    <div className={styles.container}>
      <h1>Convertedor CSV 2 JSON</h1>

      <div className={styles.objects}>
        <textarea
          name="csv"
          id=""
          placeholder="Cole seu código CSV aqui."
          onChange={(event) => {
            setCsvCode(event.target.value);
          }}
        ></textarea>
        <SiConvertio size={30} />
        <div className={styles.jsonoutput}>
          {jsonCode && <pre>{jsonCode}</pre>}
        </div>
      </div>

      {error !== "" && <p>{error}</p>}
      <button
        onClick={(e) => {
          validarCode(csvCode);
        }}
      >
        Convert to JSON
      </button>
      <button onClick={handleCopyToClipboard}>Copy to ClipBoard</button>
    </div>
  );
}
