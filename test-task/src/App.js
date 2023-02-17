import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addX, addY, arrRemoveAmount } from "./redux/productsEditor";
import { testPrint, dateUpdater, size2Updater } from "./redux/newProduct";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductAdd from "./components/productAdd/ProductAdd";
import Tasks from "./components/tasks/Tasks";

function App() {
  const { protucts } = useSelector((state) => state.productsEditor);
  const { addingProduct } = useSelector((state) => state.newProduct);
  const dispatch = useDispatch();

  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivator = () => {
    setAddProductVisible(!AddProductVisible);
  };

  const addProductSaveActivator = () => {
    console.log("SAVE Test");
    dispatch(testPrint());
    if (addingProduct.Type !== "dimensions") {
      dispatch(addX(addingProduct));
    } else {
      console.log("WORKS");
      dispatch(
        addX({
          SKU: addingProduct.SKU,
          Name: addingProduct.Name,
          Price: addingProduct.Price + " $",
          Type: addingProduct.Type,
          Amount:
            addingProduct.AmountPrototype[0] +
            "x" +
            addingProduct.AmountPrototype[1] +
            "x" +
            addingProduct.AmountPrototype[2],
          Ischecked: false,
        })
      );
    }
  };

  const delateProductActivator = () => {
    console.log("Delete Test");
    dispatch(arrRemoveAmount(1));
    dispatch(testPrint());
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
