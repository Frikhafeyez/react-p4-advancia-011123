import React from "react";
import styles from "./DepenseItem.module.css";
import DepenseDate from "./DepenseDate";
import Card from "./layout/Card";

function DepenseItem(props) {
  return (
    <Card className={styles.expense_item}>
      <div>
        <DepenseDate d={props.depense.date_d}></DepenseDate>
      </div>
      <div className={styles.expense_item__description}>
        <h2>{props.depense.title}</h2>
        <div className={styles.expense_item__price}>
          {props.depense.amount} $
        </div>
      </div>
    </Card>
  );
}

export default DepenseItem;
