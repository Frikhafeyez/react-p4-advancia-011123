import React from "react";
import styles from "./DepenseDate.module.css";
function DepenseDate(props) {
  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__month}>
        {props.d.toLocaleString("fr-FR", { month: "long" })}
      </div>
      <div className={styles.expense_date__year}>
        {props.d.toLocaleString("fr-FR", { year: "numeric" })}
      </div>
      <div className={styles.expense_date__day}>
        {props.d.toLocaleString("fr-FR", { day: "2-digit" })}
      </div>
    </div>
  );
}

export default DepenseDate;
