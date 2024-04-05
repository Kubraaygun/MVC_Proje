import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPageController from "./controllers/LoginPageController";
import MainPageController from "./controllers/MainPageController";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageController/>} />
        <Route path="/home" element={<MainPageController/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
