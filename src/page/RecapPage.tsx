// src/pages/RecapPage.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

type LeaderboardEntry = {
    score: number;
    saving: number;
};

const RecapPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Si location.state n'est pas défini ou ne contient pas de score, rediriger
    useEffect(() => {
        if (!location.state || typeof location.state.score !== "number") {
            navigate("/rules");
        }
    }, [location.state, navigate]);

    // Ici, score est garanti d'exister (grâce à la redirection précédente)
    const score = location.state?.score || 0;
    const result = 172000 - score;
    const exemple = Math.round(result / 5000);

    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    // Ref pour s'assurer que l'update du leaderboard s'effectue une seule fois
    const updatedRef = useRef(false);

    useEffect(() => {
        // On exécute ce bloc une seule fois
        if (updatedRef.current) return;
        updatedRef.current = true;

        // Récupérer le leaderboard depuis sessionStorage (ou tableau vide s'il n'existe pas)
        const stored = sessionStorage.getItem("leaderboard");
        let lb: LeaderboardEntry[] = stored ? JSON.parse(stored) : [];

        const newEntry = { score, saving: result };

        // Vérifier si une entrée identique existe déjà dans le leaderboard
        const alreadyExists = lb.some(
            (entry) => entry.score === newEntry.score && entry.saving === newEntry.saving
        );
        if (!alreadyExists) {
            lb.push(newEntry);
        }

        // Trier par score croissant (meilleur score = consommation la plus faible)
        lb.sort((a, b) => a.score - b.score);
        // Conserver uniquement les 10 meilleurs scores
        lb = lb.slice(0, 10);

        // Sauvegarder le leaderboard mis à jour
        sessionStorage.setItem("leaderboard", JSON.stringify(lb));
        setLeaderboard(lb);
    }, [score, result]);

    const handleReplay = () => {
        navigate("/game");
    };
    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-2xl flex flex-col gap-8 items-center justify-center text-gray-800 p-10 max-w-2xl">
                <h1 className="text-4xl font-semibold">
                    Consommation en 30 secondes : {score} kJ
                </h1>
                <p className="text-lg text-center">
                    Sans vous, les usines auraient consommé plus de{" "}
                    <strong>172 000 kJ</strong>, soit la consommation de{" "}
                    <strong>plus d'un million</strong> de foyers français sur le même temps.
                </p>
                <p className="text-3xl font-bold text-center">
                    Vous avez sauvé <strong>{result} kJ</strong> en 30 secondes
                    {exemple >= 1 &&
                        `, soit l'équivalent d'un radiateur électrique en marche pendant ${
                            exemple
                        } heure${exemple > 1 ? "s" : ""}`}
                </p>

                <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Leaderboard</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow">
                            <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left">#</th>
                                <th className="py-2 px-4 border-b text-left">Consommation (kJ)</th>
                                <th className="py-2 px-4 border-b text-left">Économie (kJ)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {leaderboard.map((entry, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{entry.score}</td>
                                    <td className="py-2 px-4 border-b">{entry.saving}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={handleReplay}
                        className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
                    >
                        Rejouer
                    </button>
                    <button
                        onClick={handleHome}
                        className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
                    >
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecapPage;