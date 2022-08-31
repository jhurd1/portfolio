import React from 'react';
import { Link } from "react-router-dom";
import './SCSS/index.css';

export default function App()
{
    return
    (
        <div>
            <h1>Jamie Hurd</h1>
            <h2 class="h2">A portfolio.</h2>
         <nav>
            <Link to="/AboutMe"></Link> | {" "}
            <Link to="/GitHub Projects">GitHub Projects</Link>
            <Link to="/Photography">Photopraphy</Link>
            <Link to="/Influence">Influence</Link>
        </nav>
        </div>
    );
}

export default App;
