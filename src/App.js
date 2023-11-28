import "./App.css";
import Header from "../src/Containers/Header/Header";
import FormularioAtividade from "../src/Containers/Formulario";
import Atividades from "./Containers/Atividades";
import Home from "./Containers/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/form" element={<FormularioAtividade />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
