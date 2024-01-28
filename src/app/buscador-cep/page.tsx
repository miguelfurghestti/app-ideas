"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import { MdSearch } from "react-icons/md";
import api from "../../services/api";

interface MeuEstado {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
}

export default function BuscadorCep() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState<MeuEstado>({});

  async function handleSearch() {
    if (input === "") {
      alert("Preencha algum CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data);

      setCep(response.data);
      setInput("");
    } catch {
      alert("Ooops! Erro ao buscar o CEP.");
      setInput("");
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Buscador CEP</h1>

      <div className={styles.containerInput}>
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className={styles.buttonSearch} onClick={handleSearch}>
          <MdSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className={styles.main}>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>
            {cep.localidade} / {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
}
