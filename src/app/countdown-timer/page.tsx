"use client";
import React, { useState, useEffect } from "react";
import {
  format,
  parseISO,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { HiOutlineTrash } from "react-icons/hi";
import styles from "./styles.module.scss";

export default function CountDownTimer() {
  const [data, setData] = useState("");
  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });
  const [nomeEvento, setNomeEvento] = useState("");
  const [eventos, setEventos] = useState<any[]>([]);

  const calcularTempoRestante = () => {
    const dataEscolhida = new Date(data + "T00:00:00");
    const dataAtual = new Date();

    // Verifica se a data escolhida é maior que a data atual
    if (dataEscolhida > dataAtual) {
      const dias = differenceInDays(dataEscolhida, dataAtual);
      const horas = differenceInHours(dataEscolhida, dataAtual) % 24;
      const minutos = differenceInMinutes(dataEscolhida, dataAtual) % 60;
      const segundos = differenceInSeconds(dataEscolhida, dataAtual) % 60;

      setTempoRestante({
        dias: dias,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
      });
    } else {
      setTempoRestante({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(calcularTempoRestante, 1000);
    return () => clearInterval(intervalId);
  }, [data]);

  useEffect(() => {
    const eventosStorage = localStorage.getItem("@eventos");

    if (eventosStorage) {
      setEventos(JSON.parse(eventosStorage));
    }
  }, []);

  function handleRegisterDate(e: any) {
    e.preventDefault();

    const eventosStorageString = localStorage.getItem("@eventos");
    const eventosStorage = eventosStorageString
      ? JSON.parse(eventosStorageString)
      : [];

    const novoEvento = {
      data: data,
      nomeEvento: nomeEvento,
    };

    eventosStorage.push(novoEvento);
    setEventos(eventosStorage);

    localStorage.setItem("@eventos", JSON.stringify(eventosStorage));
    console.log(localStorage);

    setNomeEvento("");
  }

  function handleRemoveEvent(valor: any) {
    const arrayNoLocalStorage: any[] = JSON.parse(
      localStorage.getItem("@eventos") ?? "[]"
    );

    const novoArray = arrayNoLocalStorage.filter(
      (item: any) => item.data !== valor
    );

    localStorage.setItem("@eventos", JSON.stringify(novoArray));
    setEventos(novoArray);
    console.log(typeof valor, novoArray);
  }

  return (
    <div className={styles.container}>
      <div className={styles.clockinput}>
        <form onSubmit={handleRegisterDate}>
          <input
            type="date"
            value={data}
            onChange={(event) => {
              setData(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Nome do Evento"
            onChange={(event) => setNomeEvento(event.target.value)}
          />
          <button>Salvar</button>
        </form>
      </div>

      <div className={styles.clockstatus}>
        <div className={styles.clockitem}>
          <span className={styles.clocktimer}>{tempoRestante.dias}</span>
          <span className={styles.clocklabel}>dias</span>
        </div>

        <div className={styles.clockitem}>
          <span className={styles.clocktimer}>{tempoRestante.horas}</span>
          <span className={styles.clocklabel}>horas</span>
        </div>

        <div className={styles.clockitem}>
          <span className={styles.clocktimer}>{tempoRestante.minutos}</span>
          <span className={styles.clocklabel}>minutos</span>
        </div>

        <div className={styles.clockitem}>
          <span className={styles.clocktimer}>{tempoRestante.segundos}</span>
          <span className={styles.clocklabel}>segundos</span>
        </div>
      </div>

      <div className={styles.eventos}>
        <h2>Meus eventos agendados</h2>
        <ul>
          {eventos.map((evento, index) => (
            <li key={index}>
              <HiOutlineTrash
                onClick={() => {
                  handleRemoveEvent(evento.data);
                }}
              />
              <p onClick={() => setData(evento.data)}>
                Data: {format(parseISO(evento.data), "dd/MM/yyyy")}, Evento:{" "}
                {evento.nomeEvento}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
