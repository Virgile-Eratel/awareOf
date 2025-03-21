import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Swiper (Carousel)
import { Swiper, SwiperSlide } from "swiper/react";
// Pour Swiper >= 8
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// N'oublie pas d'importer les styles de Swiper (par exemple, dans ton index.css ou App.css)
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();

  // Effet parallax pour le header
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 300], [0, 200]);

  // Variante d'animation pour les sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Démarrage de l'autoplay pour le carousel "Énergie et Pollution"
  const [startAutoplay, setStartAutoplay] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setStartAutoplay(true);
    }
  }, [inView]);

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-[url('/images/wave-haikei.svg')] bg-cover bg-center bg-no-repeat -z-10" />

      {/* Contenu de la page */}
      <div className="w-screen min-h-screen bg-[#dcd9c3] text-gray-800">
        {/* Header / Introduction avec effet parallax */}
        <header className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center shadow-lg">
          <motion.div
            style={{ y: yRange }}
            className="absolute inset-0 bg-[url('/images/aerial-photo-of-a-massive-bitcoin-mining_s6sR5VOjTe28rINljT7zYQ_E6lBPrANR-eAkoHT7eKqVA.jpeg')] bg-cover bg-center bg-no-repeat"
          />
          <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold flex items-center gap-4"
            >
              <FaLeaf className="text-4xl" />
              Bitcoin : Quand le Minage Chauffe la Planète
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-4 text-xl max-w-2xl"
            >
              Découvrez comment la surconsommation énergétique du Bitcoin menace notre planète et comment nous pouvons agir.
            </motion.p>
            {/* Section audio pour la musique générée par Suno */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-6"
            >
            <audio controls loop src="/accueil.mp3">
            Votre navigateur ne supporte pas l’élément audio.
              </audio>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        </header>

        {/* Contenu principal */}
        <main className="w-full container mx-auto px-4 py-12 relative z-20">
          {/* Section 1 : Situation Actuelle */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center my-12"
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Situation Actuelle</h2>
              <p className="mb-4">
                Le minage de cryptomonnaies, en particulier le Bitcoin, requiert une puissance de calcul considérable. En 2022, les cryptos ont consommé environ <strong>110 térawattheures</strong> d’électricité (0,4 % de la demande mondiale annuelle), contribuant ainsi à une empreinte carbone alarmante.
              </p>
              <p className="mb-4">
                Par exemple, en 2021, le réseau Bitcoin a utilisé près de <strong>1 574 milliards de litres d'eau</strong> pour refroidir ses installations, soit environ 16 000 litres par transaction – une comparaison qui met en lumière l’ampleur du gaspillage par rapport aux transactions traditionnelles.
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <img
                src="/images/a-photo-of-a-split-natural-landscape-wit_TzrKCb5hQwuFjEbAC5loiA_9gFY5OF7RTiWJa8BWb2Xbg.jpeg"
                alt="Impact environnemental"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.section>

          {/* Section 2 : Problématique Énergétique */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center my-12"
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Problématique Énergétique</h2>
              <p className="mb-4">
                L’utilisation intensive des GPUs pour miner engendre une surconsommation d’électricité et accentue la pression sur nos ressources énergétiques. Ce modèle non durable alimente directement le changement climatique et soulève des enjeux cruciaux pour l’avenir de notre planète.
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <img
                src="/images/aerial-photo-of-a-massive-bitcoin-mining_s6sR5VOjTe28rINljT7zYQ_E6lBPrANR-eAkoHT7eKqVA.jpeg"
                alt="Infrastructure énergétique"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.section>

          {/* Section 3 : Énergie et Pollution */}
          <motion.section
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="my-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Énergie et Pollution</h2>
              <p className="mb-4 max-w-2xl mx-auto">
                L’extraction et le minage de Bitcoin s’appuient souvent sur des sources non renouvelables, générant une pollution massive et des émissions de CO₂ préoccupantes.
              </p>
              <ul className="list-disc pl-5 inline-block text-left">
                <li>Utilisation excessive d’électricité</li>
                <li>Empreinte carbone démesurée</li>
              </ul>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={
                startAutoplay
                  ? { delay: 5000, disableOnInteraction: false }
                  : false
              }
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              className="w-full md:w-2/3 mx-auto"
            >
              <SwiperSlide>
                <img
                  src="/images/a-photo-of-a-massive-bitcoin-mining-farm_bme4-UVRQ06-XUWTyFjwzw_E6lBPrANR-eAkoHT7eKqVA.jpeg"
                  alt="Fermes de minage énergivores"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/an-aerial-view-of-a-massive-bitcoin-mini_7HTMxXy6TNm2uuBVnzsa4g_E6lBPrANR-eAkoHT7eKqVA.jpeg"
                  alt="Vue aérienne de consommation énergétique"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </SwiperSlide>
            </Swiper>
          </motion.section>

          {/* Section 4 : Notre Jeu - Éteignez les Workers */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center my-12 bg-white p-6 rounded-lg shadow-xl"
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Notre Jeu : Éteignez les Workers</h2>
              <p className="mb-4">
                Inspiré du principe du "tape-taupe", ce mini-jeu interactif vous met au défi d'éteindre les workers qui activent sans cesse des GPUs pour miner. Chaque clic représente une action pour réduire la surconsommation énergétique, symbolisant l'urgence d'agir avant que nos ressources ne soient épuisées.
              </p>
              <p className="mb-4 font-bold text-xl text-red-600">
                🔥 Débranchez-les avant qu'ils ne grillent la planète ! 🔥
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <img
                src="/images/jeu.webp"
                alt="Aperçu du mini-jeu"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.section>

          {/* Section 5 : Données, Infographies & Visuels IA */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center my-12"
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-4">Données et Visuels</h2>
              <p className="mb-4">
                Infographies et images générées par IA vous permettent de visualiser la consommation énergétique et l'impact environnemental du minage. Ces représentations rendent accessibles des enjeux complexes pour mieux les comprendre.
              </p>
            </div>
            <div className="md:w-1/2 p-4 grid grid-cols-2 gap-4">
              <img
                src="/images/a-stylized-infographic-style-image-with-_wQIOtEUWRCWG4feMGAz4Ww_X9HXGpUCR7uIbShy4aHfNw.jpeg"
                alt="Infographie énergétique"
                className="w-full rounded-lg shadow-2xl"
              />
              <img
                src="/images/ia-generated-visual.jpeg"
                alt="Visuel IA de l'impact écologique"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center my-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/game")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-xl transition duration-300"
            >
              Lancer le Mini Jeu
            </motion.button>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-800 text-gray-300 py-6 mt-12">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} Bitcoin : Quand le Minage Chauffe la Planète. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
