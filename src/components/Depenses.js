import React, { useState } from "react";
import Card from "./layout/Card";
import FilterDep from "./FilterDep";
import DepensesList from "./DepensesList";
import styles from "./Depenses.module.css";
import DepensesChart from "./charts/DepensesChart";

function Depenses(props) {
  const [filteredYear, setFiltredYear] = useState("2023");
  let tabYears = [];
  //   const [tabYears, setTabYears] = [];

  const filterDepenses = props.data.filter(
    (element) => element.date_d.getFullYear().toString() == filteredYear
  );

  for (const element of props.data) {
    tabYears.push(element.date_d.getFullYear().toString());
  }

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  tabYears = tabYears.filter(onlyUnique);

  return (
    <div>
      <Card className={styles.expenses}>
        <FilterDep
          selected={filteredYear}
          onChangeFilter={setFiltredYear}
          years={tabYears}
        ></FilterDep>
        <DepensesChart data={filterDepenses}></DepensesChart>
        <DepensesList data={filterDepenses}></DepensesList>
      </Card>
    </div>
  );
}

export default Depenses;
