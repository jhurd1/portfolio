import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Photography";
import Contact from "./pages/Github";
import Influence from "./pages/Influence";
import About from "./pages/About";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Photography" element={<Photography />} />
                    <Route path="Github" element={<Github />} />
                    <Route path="Influence" element={<Influence />} />
                    <Route path="About" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));