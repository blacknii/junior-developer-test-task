import React from "react";
import styles from "./Task.module.css";
import { useDispatch, useSelector } from "react-redux";
import { arrCheker } from "../../redux/productsEditor";

function Task(props) {
  const { protucts } = useSelector((state) => state.productsEditor);
  const dispatch = useDispatch();

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

  const changeChandler = () => {
    dispatch(arrCheker(props.sku));
  };

  return (
    <label className={styles.container}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={changeChandler}
          checked={props.isChecked}
        />
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
