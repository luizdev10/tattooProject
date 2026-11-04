import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import Inicio from "./components/inicio.jsx";
import Trabalhos from "./components/trabalhos.jsx";
import Sobre from "./components/sobre.jsx"
import Faq from "./components/faq.jsx";
import Cuidados from "./components/cuidados.jsx";
import Contato from "./components/contato.jsx";
import Politicas from "./components/politicas.jsx";
import ButtonTop from "./components/button-top.jsx";


function Principal() {
    const [artista, setArtista] = useState("Pedro");

    return(
        <>
        <NavBar />
        <Inicio />
        <Trabalhos artista={artista} setArtista={setArtista} />
        <Sobre />
        <Faq />
        <Cuidados />
        <Contato artista={artista} setArtista={setArtista} />
        <ButtonTop />
        </>
    );
}

function App() {
    return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Principal />} />

        <Route path="/politicas-de-privacidade" element={<Politicas />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
