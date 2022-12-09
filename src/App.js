import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "./Pages/MainPage/MainPage";
import { QuizPage } from "./Pages/QuizPage/QuizPage";
import { TnkPage } from "./Pages/TnkPage/TnkPage";

import styles from "./styles.module.scss";
function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/quest" element={<QuizPage />} />
          <Route path="/tnk" element={<TnkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
