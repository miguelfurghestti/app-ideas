"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function ChristmasLight() {
  const [turnOff, setTurnOff] = useState("");
  //   const [intensidade, setIntensidade] = useState("1");

  const handleTurnOn = () => {
    console.log("Luzes Ligadas!");
    setTurnOff("");
  };

  //   const Bola = {
  //     width: `${intensidade}px`,
  //     height: `${intensidade}px`,
  //     backgroundColor: "#73daf8",
  //     borderRadius: "50%",
  //   };

  const handleTurnOff = () => {
    setTurnOff(styles.dark);
    console.log("Luzes Desligadas");
  };

  //   const handleIntensidadeChange = (e) => {
  //     setIntensidade(10 * e.target.value);
  //     console.log("intensidade ", intensidade);
  //   };

  return (
    <div className={styles.container}>
      <h1>Luzes de Natal</h1>

      <div className={styles.lights}>
        {/* <div style={Bola}></div> */}
        <div className={styles.circle + " " + styles.red + " " + turnOff}></div>
        <div
          className={styles.circle + " " + styles.yellow + " " + turnOff}
        ></div>
        <div
          className={styles.circle + " " + styles.blue + " " + turnOff}
        ></div>
        <div
          className={styles.circle + " " + styles.green + " " + turnOff}
        ></div>
        <div className={styles.circle + " " + styles.red + " " + turnOff}></div>
        <div
          className={styles.circle + " " + styles.yellow + " " + turnOff}
        ></div>
        <div
          className={styles.circle + " " + styles.blue + " " + turnOff}
        ></div>
        <div
          className={styles.circle + " " + styles.green + " " + turnOff}
        ></div>
      </div>

      <div className={styles.buttons}>
        <button onClick={handleTurnOn}>On</button>
        <button onClick={handleTurnOff}>Off</button>
      </div>

      {/* <label>
        <input
          type="range"
          min="1"
          max="10"
          value={intensidade / 10}
          onChange={handleIntensidadeChange}
        />
      </label> */}
    </div>
  );
}
