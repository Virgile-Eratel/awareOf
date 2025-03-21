// src/pages/RulesPage.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import WorkerItem from "../component/WorkerItem";

const RulesPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/game");
    };

    // State pour le worker d'exemple
    const [exampleActive, setExampleActive] = useState(true);

    // Fonction de toggle pour le worker d'exemple
    const handleExampleToggle = () => {
        if (exampleActive) {
            setExampleActive(false);
            setTimeout(() => {
                setExampleActive(true);
            }, 5000);
        }
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-2xl flex flex-col items-center gap-8 p-10 max-w-xl">
                <h1 className="text-4xl font-bold text-gray-800 text-center">
                    Règles du jeu
                </h1>
                <p className="text-lg text-gray-700 text-center">
                    Vous allez combattre des usines à Bitcoin.
                    <br />
                    Chaque machine fonctionne et consomme de l'électricité.
                    <br />
                    <span className="font-semibold">
            Cliquez sur une machine pour l'arrêter
          </span>{" "}
                    et réduire la consommation.
                    <br />
                    Le but est d'avoir la{" "}
                    <span className="font-semibold">
            plus faible consommation
          </span>{" "}
                    possible en 30 secondes.
                </p>

                {/* Worker d'exemple interactif */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-lg text-gray-600">Exemple interactif :</span>
                    <div onClick={handleExampleToggle} className="cursor-pointer">
                        <WorkerItem isActive={exampleActive} onToggle={handleExampleToggle} />
                    </div>
                    <span className="text-sm text-gray-500">
            Le worker se réactive automatiquement après 5 secondes.
          </span>
                </div>

                <button
                    onClick={handleStart}
                    className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg"
                >
                    Commencer à jouer
                </button>
            </div>
        </div>
    );
};

export default RulesPage;