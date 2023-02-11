import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addX, addY, arrRemoveAmount } from "./redux/productsEditor";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductAdd from "./components/productAdd/ProductAdd";
import Tasks from "./components/tasks/Tasks";

function App() {
  const { protucts } = useSelector((state) => state.productsEditor);
  const dispatch = useDispatch();

  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivator = () => {
    setAddProductVisible(!AddProductVisible);
  };

  const addProductSaveActivator = () => {
    console.log("SAVE Test");
    dispatch(addX());
  };

  const delateProductActivator = () => {
    console.log("Delete Test");
    dispatch(arrRemoveAmount(1));
  };

  return (
    <div className={styles.container}>
      <Header
        addProductActivator={addProductActivator}
        addProductSaveActivator={addProductSaveActivator}
        delateProductActivator={delateProductActivator}
      />
      {AddProductVisible && <Tasks products={protucts} />}
      {!AddProductVisible && <ProductAdd />}
      <Footer />
    </div>
  );
}

export default App;
