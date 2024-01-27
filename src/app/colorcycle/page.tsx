"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function page() {
  const [playstop, setPlayStop] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [intervalId, setIntervalId] = useState(-1);
  const [firstColor, setFirstColor] = useState("FF");
  const [midColor, setMidColor] = useState("FF");
  const [lastColor, setLastColor] = useState("FF");

  function startAnimation() {
    if (playstop === true) {
      setPlayStop(false);
      clearInterval(intervalId); // Limpe o intervalo ao parar a animação
      console.log("Você parou a animação", playstop);
    } else {
      setPlayStop(true);
      console.log("Você iniciou a animação", playstop);
    }
  }

  function changeColor() {
    const randomColor = "#" + firstColor + midColor + lastColor;
    setBackgroundColor(randomColor);
  }

  useEffect(() => {
    if (playstop === true) {
      changeColor();
    } else {
      clearInterval(intervalId); // Limpe o intervalo ao desmontar o componente
    }
  }, [playstop, firstColor, midColor, lastColor]);

  const colorboxStyle = {
    backgroundColor: backgroundColor,
    transition: "background-color 0.5s linear", // Adicione a transição aqui
  };

  return (
    <div className={styles.container}>
      <div className={styles.colorbox} style={colorboxStyle}></div>

      <label>
        RED
        <input
          type="text"
          value={firstColor}
          onChange={(e) => setFirstColor(e.target.value)}
        />
      </label>

      <label>
        GREEN
        <input
          type="text"
          value={midColor}
          onChange={(e) => setMidColor(e.target.value)}
        />
      </label>

      <label>
        BLUE
        <input
          type="text"
          value={lastColor}
          onChange={(e) => setLastColor(e.target.value)}
        />
      </label>
      {playstop ? (
        <button
          onClick={() => {
            startAnimation();
          }}
        >
          STOP
        </button>
      ) : (
        <button
          onClick={() => {
            startAnimation();
          }}
        >
          PLAY
        </button>
      )}
    </div>
  );
}
