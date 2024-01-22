"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { evaluate, typeOf } from "mathjs";

export default function Calculator() {
  const [value, setValue] = useState("");

  const deleteNumber = () => {
    const resultadoTotal = String(value).slice(0, -1);
    setValue(resultadoTotal);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    setValue(value + inputValue);
  };

  const handleResult = () => {
    try {
      const resultadoTotal = evaluate(value);
      setValue(resultadoTotal);
    } catch {
      setValue("ERROR");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <form action="">
          <div className={styles.display}>
            <input type="text" value={value} />
          </div>

          <div>
            <input
              type="button"
              value="AC"
              readOnly
              onClick={(e) => setValue("")}
            />
            <input type="button" value="DE" onClick={deleteNumber} />
            <input type="button" value="." onClick={handleClick} />
            <input type="button" value="/" onClick={handleClick} />
          </div>

          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="*" onClick={handleClick} />
          </div>

          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="+" onClick={handleClick} />
          </div>

          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="-" onClick={handleClick} />
          </div>

          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input
              type="button"
              value="="
              readOnly
              className={styles.equal}
              onClick={handleResult}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
