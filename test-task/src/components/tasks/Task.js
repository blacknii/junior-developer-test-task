import React from "react";
import styles from "./Task.module.css";

function Task(props) {
  return (
    <label className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </div>
      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.size}</p>
    </label>
  );
}

export default Task;
