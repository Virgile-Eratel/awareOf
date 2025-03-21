import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header / Introduction */}
      <header className="bg-green-700 text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold">Impact du Bitcoin sur la Nature</h1>
          <p className="mt-4 text-xl">
            Découvrez l'influence environnementale du Bitcoin à travers des faits concrets et des images captivantes.
          </p>
        </div>
      </header>

      <main className="px-4 py-8 max-w-6xl mx-auto">
        {/* Section 1: Impact Énergétique */}
        <section className="flex flex-col md:flex-row items-center my-8">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Impact Énergétique</h2>
            <p className="mb-4">
              Le minage du Bitcoin requiert une consommation d'énergie massive, souvent issue de sources non renouvelables.
            </p>
            <ul className="list-disc pl-5">
              <li>Consommation comparable à celle de petits pays</li>
              <li>Dépendance aux énergies fossiles</li>
              <li>Augmentation des émissions de CO₂</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Impact Énergétique"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 2: Biodiversité et Déforestation */}
        <section className="flex flex-col md:flex-row-reverse items-center my-8">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Biodiversité et Déforestation</h2>
            <p className="mb-4">
              L'exploitation pour le minage peut conduire à la déforestation et à la destruction d'habitats naturels, mettant en péril la biodiversité.
            </p>
            <p className="mb-4">
              La perte d'espèces et la perturbation des écosystèmes ont un impact direct sur la stabilité de notre environnement.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Biodiversité et Déforestation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 3: Pollution et Déchets Électroniques */}
        <section className="flex flex-col md:flex-row items-center my-8">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Pollution et Déchets Électroniques</h2>
            <p className="mb-4">
              La fabrication et le recyclage des équipements de minage génèrent d'importants déchets électroniques, souvent toxiques.
            </p>
            <ul className="list-disc pl-5">
              <li>Accumulation de déchets dangereux</li>
              <li>Contamination des sols et des eaux</li>
              <li>Risques pour la santé humaine</li>
            </ul>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Pollution"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section 4: Initiatives pour un Futur Durable */}
        <section className="flex flex-col md:flex-row-reverse items-center my-8">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Initiatives pour un Futur Durable</h2>
            <p className="mb-4">
              Face à ces défis, des solutions émergent : l'intégration d'énergies renouvelables et l'optimisation des matériels de minage.
            </p>
            <p className="mb-4">
              Des projets innovants favorisent une transition vers une technologie plus respectueuse de l'environnement.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Futur Durable"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center my-12">
          <button
            onClick={() => navigate('/game')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Lancer le Mini Jeu
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Impact du Bitcoin sur la Nature. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
