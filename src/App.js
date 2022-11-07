import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import s from './App.module.css';


// Import Components
import Loader from "./components/loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Import Routes
import Feeding from "./route/feeding/Feeding";
import Lunches from "./route/lunches/Lunches";
import Shop from "./route/shop/Shop";
import About from "./route/about/About";
import Blog from "./route/blog/Blog";

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
                        <div className={s.navbar__fixed}>
                            <Navbar />
                        </div>
                        <Routes>
                            <Route path="/" element={<Feeding/>} />
                            <Route path="/feeding" element={<Feeding />} />
                            <Route path="/lunches" element={<Lunches />} />
                            <Route path="/gastro/shop" element={<Shop />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/blog" element={<Blog />} />

                        </Routes>
                            <Footer />
                    </BrowserRouter>
            }
        </>
    );
}

export default App;
