import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import s from './App.module.css';


// Import Components
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";

function App() {

    const [loader, setLoader] = useState(true);

    return (
        <>
            {
                // qotishlar bor yo'qligiga qarab loaderni ishga tushurdim 
                !loader
                    ?
                    <Loader />
                    :
                    // Muammo yo'q bo'lsa loader o'chadi va sahifa ko'rinadi 
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            {/* <Route path="/" element={<Home/>} /> */}
                        </Routes>
                    </BrowserRouter>
            }
        </>
    );
}

export default App;
