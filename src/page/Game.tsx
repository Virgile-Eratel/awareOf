import WorkerItem from "../component/WorkerItem";
import AnimatedCounter from "../component/AnimatedCounter";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Tableau de délais de réactivation en millisecondes
const REACTIVATION_TIMES = [5000, 7000, 8000, 11000, 12000, 6000];

type Worker = {
    id: number;
    isActive: boolean;
};

const Game = () => {
    const navigate = useNavigate();

    // Initialisation : ici 16 workers démarrent tous actifs
    const [workers, setWorkers] = useState<Worker[]>(
        Array.from({ length: 16 }, (_, i) => ({ id: i, isActive: true }))
    );

    // Consommation (320 kJ par seconde par worker actif)
    const [points, setPoints] = useState<number>(0);

    // Durée du jeu en millisecondes (30 secondes)
    const gameDuration = 30 * 1000;
    // TimeLeft en secondes, initialisé à 30
    const [timeLeft, setTimeLeft] = useState<number>(30);

    // Références pour stocker le temps de début et de fin
    const startTimeRef = useRef<number>(Date.now());
    const endTimeRef = useRef<number>(startTimeRef.current + gameDuration);

    // Ref pour accéder toujours à la liste des workers dans l'intervalle
    const workersRef = useRef(workers);
    useEffect(() => {
        workersRef.current = workers;
    }, [workers]);

    // Intervalle qui augmente la consommation chaque seconde
    useEffect(() => {
        const interval = setInterval(() => {
            const activeCount = workersRef.current.filter(
                (worker) => worker.isActive
            ).length;
            setPoints((prev) => prev + activeCount * 320);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Timer plus fiable basé sur Date.now()
    useEffect(() => {
        const timerInterval = setInterval(() => {
            const now = Date.now();
            const remainingMs = endTimeRef.current - now;
            const remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));
            setTimeLeft(remainingSec);

            if (remainingMs <= 0) {
                clearInterval(timerInterval);
                navigate("/recap", { state: { score: points } });
            }
        }, 100); // mise à jour toutes les 100ms pour plus de précision
        return () => clearInterval(timerInterval);
    }, [navigate, points]);

    // Fonction pour désactiver un worker et planifier sa réactivation
    const toggleWorker = (id: number) => {
        setWorkers((prev) => {
            const activeCount = prev.filter((worker) => worker.isActive).length;
            const target = prev.find((worker) => worker.id === id);
            if (!target) return prev;
            // Ne pas désactiver si le worker est déjà inactif ou si c'est le dernier actif
            if (!target.isActive || activeCount === 1) return prev;

            // Désactiver le worker
            const updated = prev.map((worker) =>
                worker.id === id ? { ...worker, isActive: false } : worker
            );

            // Choisir un délai aléatoire dans REACTIVATION_TIMES
            const delay =
                REACTIVATION_TIMES[
                    Math.floor(Math.random() * REACTIVATION_TIMES.length)
                    ];
            console.log(`Worker ${id} désactivé pour ${delay}ms`);

            // Réactiver automatiquement après le délai choisi
            setTimeout(() => {
                setWorkers((current) =>
                    current.map((worker) =>
                        worker.id === id ? { ...worker, isActive: true } : worker
                    )
                );
            }, delay);

            return updated;
        });
    };

    return (
        <div className="w-screen h-screen bg-[#dcd9c3] p-8">
            <h1 className="text-4xl text-black mb-4">Usine</h1>
            <p className="text-xl text-black mb-4">
                Consommation: <AnimatedCounter value={points} /> kJ
            </p>
            <p className="text-xl text-black mb-4">Temps restant : {timeLeft} sec</p>
            <div className="grid grid-cols-4 gap-4">
                {workers.map((worker) => (
                    <WorkerItem
                        key={worker.id}
                        isActive={worker.isActive}
                        onToggle={() => toggleWorker(worker.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Game;