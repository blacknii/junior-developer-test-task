import React from "react";
import Task from "./Task";
import styles from "./Tasks.module.css";

function Tasks(props) {
  return (
    <div className={styles.container}>
      {props.products.map((element) => {
        return (
          <Task
            sku={element.SKU}
            name={element.Name}
            price={element.Price}
            type={element.Type}
            amount={element.Amount}
            isChecked={element.Ischecked}
            key={element.SKU}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
