import { Routes, Route } from 'react-router-dom'
import Game from "./page/Game.tsx";
import Home from "./page/Home.tsx";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home/>
                }
            />
            <Route path="/game" element={<Game />} />
        </Routes>
    )
}

export default App