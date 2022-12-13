import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
