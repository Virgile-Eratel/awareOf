import { useEffect } from "react";
import { useCountUp } from "react-countup";

type AnimatedCounterProps = {
    value: number;
};

const AnimatedCounter = ({ value }: AnimatedCounterProps) => {
    // Utilisation de la prop 'ref' pour cibler un élément DOM
    const { update } = useCountUp({
        ref: "counter",       // id de l'élément DOM qui affichera le compteur
        end: value,           // valeur de fin initiale
        duration: 1,          // durée de l'animation en secondes
        startOnMount: true,   // démarre l'animation dès le montage
    });

     useEffect(() => {
        update(value);
    }, [value, update]);

    return <span id="counter" />;
};

export default AnimatedCounter;