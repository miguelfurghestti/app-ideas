"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function ChristmasLight() {
  const [turnOff, setTurnOff] = useState("");
  const [intensidade, setIntensidade] = useState(1);

  const handleTurnOn = () => {
    console.log("Luzes Ligadas!");
    setTurnOff("");
  };

  const handleTurnOff = () => {
    setTurnOff(styles.dark);
    console.log("Luzes Desligadas");
  };

  const handleIntensidadeChange = (e: any) => {
    setIntensidade(e.target.value / 10);
    console.log("intensidade ", intensidade);
  };

  interface StyledChristmasLightProps {
    color: string;
    width: string;
    height: string;
  }

  interface SolidLightProps {
    color: string;
    width: string;
    height: string;
  }

  const blurAnimation = keyframes<StyledChristmasLightProps>`
  0%,
  90% {
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px);
    -ms-filter: blur(0px);
  }
  50% {
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
  }
`;

  const StyledChristmasLight = styled.div<StyledChristmasLightProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: ${({ color }) => color};
    border-radius: 50%;
    animation: ${blurAnimation} ${intensidade}s ease infinite alternate;
  `;

  return (
    <div className={styles.container}>
      <h1>Luzes de Natal</h1>

      <div className={styles.lights}>
        <div>
          <div
            className={styles.solidLight}
            style={{ backgroundColor: "white" }}
          ></div>
          <StyledChristmasLight
            color={"#f4f4f4"}
            width={"50px"}
            height={"50px"}
          />
        </div>

        {/* <ChristmasLightB
          width={"50px"}
          height={"50px"}
          color={"#FFFFFF"}
          borderRadius={"50%"}
        /> */}

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

      <label>
        <input
          type="range"
          min="1"
          max="10"
          value={intensidade * 10}
          onChange={handleIntensidadeChange}
        />
      </label>
    </div>
  );
}
