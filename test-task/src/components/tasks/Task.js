import React from "react";
import styles from "./Task.module.css";

function Task() {
  return (
    <label className={styles.container}>
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <span class="checkmark"></span>
      </div>
      <p>JVC200123</p>
      <p>Acrne DISC</p>
      <p>1.00 $</p>
      <p>Size: 700 MB</p>
    </label>
  );
}

export default Task;
