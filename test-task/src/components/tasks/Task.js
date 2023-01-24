import React from "react";
import styles from "./Task.module.css";

function Task(props) {
  let amount = props.amount;
  switch (props.type) {
    case "size":
      amount = `Size: ${amount} MB`;
      break;
    case "weight":
      amount = `Weight: ${amount}GB`;
      break;
    case "dimensions":
      amount = `Dimension: ${amount}`;
      break;

    default:
      break;
  }
  return (
    <label className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </div>
      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{amount}</p>
    </label>
  );
}

export default Task;
