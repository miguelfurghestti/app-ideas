"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";

export default function CauseEffect() {
  const [user, setUser] = useState(-1);
  const [highlight, setHighlight] = useState(-1);

  const people = [
    {
      name: "Miguel Furghestti",
      street: "Rua Florianópolis",
      city: "Tubarão",
      state: "Santa Catarina",
      country: "Brasil",
      telephone: "(48) 99211-1288",
      birthday: "16/12/1988",
    },
    {
      name: "Alberto Bebeto",
      street: "Rua São Paulo",
      city: "Laguna",
      state: "Santa Catarina",
      country: "Brasil",
      telephone: "(48) 99211-1288",
      birthday: "14/12/1988",
    },
    {
      name: "João Aurélio",
      street: "Rua São Paulo",
      city: "Laguna",
      state: "Santa Catarina",
      country: "Brasil",
      telephone: "(48) 99211-1288",
      birthday: "01/11/1988",
    },
    {
      name: "Fulano Ciclano",
      street: "Rua São Paulo",
      city: "Laguna",
      state: "Santa Catarina",
      country: "Brasil",
      telephone: "(48) 99211-1288",
      birthday: "08/08/1988",
    },
    {
      name: "Billy Joe",
      street: "Rua São Paulo",
      city: "Laguna",
      state: "Santa Catarina",
      country: "Brasil",
      telephone: "(48) 99211-1288",
      birthday: "04/02/1988",
    },
  ];

  const targetItem = people[user];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <nav>
          <ul>
            {people.map((item, index) => (
              <li
                className={highlight === index ? styles.selected : "teste"}
                key={index}
                onClick={() => {
                  setUser(index);
                  {
                    setHighlight(index);
                  }
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {user >= 0 ? (
        <div className={styles.content}>
          <h1>{targetItem.name}</h1>
          <p>
            {targetItem.street} - {targetItem.city} / {targetItem.state} -{" "}
            {targetItem.country}
          </p>
          <p>
            {targetItem.telephone} - {targetItem.birthday}
          </p>
        </div>
      ) : (
        <div className={styles.content}>
          Por favor, selecione um nome ao lado.
        </div>
      )}
    </div>
  );
}
