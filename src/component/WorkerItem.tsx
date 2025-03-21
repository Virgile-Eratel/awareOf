import React from "react";

type Props = {
    isActive: boolean;
    onToggle: () => void;
};

const WorkerItem = ({ isActive, onToggle }: Props) => {
    return (
        <div
            onClick={onToggle}
            className="relative w-52 h-52 cursor-pointer hover:scale-105 transition-transform duration-200"
        >
            {/* Image statique du worker */}
            <img
                src="/images/worker.webp"
                alt="worker statique"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 z-0 ${
                    isActive ? "opacity-0" : "opacity-100"
                }`}
            />
            {/* Gif actif du worker */}
            <img
                src="/images/workerActif.gif"
                alt="worker actif"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 z-0 ${
                    isActive ? "opacity-100" : "opacity-0"
                }`}
            />
            {/* Gyro : placé en haut à droite, animé si actif, sombre et statique sinon */}
            <div
                className={`absolute top-1 right-1 w-12 h-12 z-10 transition-all duration-300 ${
                    isActive ? "animate-spin" : "filter brightness-50"
                }`}
            >
                <img src="/images/gyro.gif" alt="gyro" className="w-full h-full object-contain" />
            </div>
        </div>
    );
};

export default React.memo(WorkerItem, (prevProps, nextProps) => {
    return prevProps.isActive === nextProps.isActive;
});