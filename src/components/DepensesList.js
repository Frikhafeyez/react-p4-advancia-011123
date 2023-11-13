import React from "react";
import DepenseItem from "./DepenseItem";
import styles from "./DepensesList.module.css";
import Card from "./layout/Card";

function DepensesList(props) {
  return (
    <Card className={styles.expenses}>
      {props.data.map((element) => {
        return <DepenseItem key={element.id} depense={element}></DepenseItem>;
      })}
    </Card>
  );
}

export default DepensesList;
