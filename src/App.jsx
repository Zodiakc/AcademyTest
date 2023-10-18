import "./App.scss";
import Layout from "./layout/Layout";
import { createContext, useState } from "react";
import SliderPage from "./pages/SliderPage/SliderPage";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
export const SliderContext = createContext();
function App() {
    const [slideId, setSlideId] = useState(1);
    return (
        <div className="main">
            <SliderContext.Provider value={{ slideId, setSlideId }}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="slider" element={<SliderPage />} />
                    </Route>
                </Routes>
            </SliderContext.Provider>
        </div>
    );
}

export default App;
