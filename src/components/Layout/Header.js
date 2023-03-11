import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import Peoples from '../../pages/Peoples'
import Films from '../../pages/Films'
import Starships from '../../pages/Starships'

export default function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/peoples">Peoples</Link>
                    </li>
                    <li>
                        <Link to="/films">Films</Link>
                    </li>
                    <li>
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/peoples" element={<Peoples />} />
                <Route path="/films" element={<Films />} />
                <Route path="/starships" element={<Starships />} />
            </Routes>
        </>
    );
}
