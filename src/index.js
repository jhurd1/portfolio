import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Influence from "./Influence";
import About from "./About";
import Photography from "./Photography";
import Github from "./Github";

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