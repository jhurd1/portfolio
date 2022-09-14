import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./SCSS/index.css";

function Navbar() {
    return (
        <div id="menu-outer">
            <div class="table">
                <ul id="horizontal-list">
                    <nav id="menu-outer">
                        
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
                        
                    </nav>
                </ul>
            </div>
        </div>

            );
}

export default Navbar;