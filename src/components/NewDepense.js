import React from "react";
import styles from "./NewDepense.module.css";
import DepenseForm from "./DepenseForm";

function NewDepense(props) {
  return (
    <div className={styles.new_expense}>
      <DepenseForm add={props.addDepense}></DepenseForm>
    </div>
  );
}

export default NewDepense;
