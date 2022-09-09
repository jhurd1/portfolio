import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/Home"></Link>
                </li>
                    <Link to="/AboutMe"></Link> | {" "}
                <li>
                    <Link to="/GitHub Projects">GitHub Projects</Link>
                </li>
                    <Link to="/Photography">Photopraphy</Link>
                <li>
                    <Link to="/Influence">Influence</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;