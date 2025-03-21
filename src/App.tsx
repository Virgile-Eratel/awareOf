import { Routes, Route } from 'react-router-dom'
import Game from "./page/Game.tsx";
import Home from "./page/Home.tsx";
import RulesPage from "./page/RulesPage.tsx";
import RecapPage from "./page/RecapPage.tsx";

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
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/recap" element={<RecapPage />} />
        </Routes>
    )
}

export default App