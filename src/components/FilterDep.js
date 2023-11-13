import React from "react";
import styles from "./FilterDep.module.css";

function FilterDep(props) {
  function changeHandler(e) {
    props.onChangeFilter(e.target.value);
  }
  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filter par année</label>
        <select value={props.selected} onChange={changeHandler}>
          {/* <option value="2022">2022</option>
          <option value="2023">2023</option> */}
          {props.years.map((elt) => {
            console.log(elt);
            return (
              <option key={Math.random().toString()} value={elt}>
                {elt}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default FilterDep;
