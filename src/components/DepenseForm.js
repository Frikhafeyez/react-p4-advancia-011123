import React, { useRef } from "react";
import styles from "./DepenseForm.module.css";
function DepenseForm(props) {
  let intitule = useRef();
  let montant = useRef();
  let date = useRef();

  function submitHandler(e) {
    e.preventDefault();
    console.log(intitule);
    props.add({
      title: intitule.current.value,
      amount: montant.current.value,
      date_d: new Date(date.current.value),
    });
  }
  return (
    <form>
      <div className={styles.new_expense_controls}>
        <div className={styles.new_expense__control}>
          <label>Intitule</label>
          <input type="text" ref={intitule}></input>
        </div>
        <div className={styles.new_expense__control}>
          <label>Montant</label>
          <input type="number" ref={montant}></input>
        </div>
        <div className={styles.new_expense__control}>
          <label>Date</label>
          <input type="date" ref={date}></input>
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button type="submit" onClick={submitHandler}>
          Ajouter
        </button>
      </div>
    </form>
  );
}

export default DepenseForm;
