import Header from "./components/Header.jsx";
// import Card from "./components/Card.jsx";
import Counter from "./components/Counter.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FilterablePlantList from "./components/FilterablePlantList.jsx";

// import tomatoImg from "./assets/images/Tomate.jpg";
// import lettuceImg from "./assets/images/lechuga.jpg";
// import carrotImg from "./assets/images/zanahoria.jpg";


export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Navbar />

      <Header title="EcoHuerta 🌿" subtitle="Aprende cultivos sostenibles" />

      {/* <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl p-6">
        <Card title="Tomate" description="Cultivo de estación cálida rico en licopeno." image={tomatoImg} />
        <Card title="Lechuga" description="Verduras de hoja de temporada fría." image={lettuceImg} />
        <Card title="Zanahoria" description="Cultivo de raíces rico en betacaroteno." image={carrotImg} />
      </section> */}

      <Counter />

      <section className="w-full p-6">
        <FilterablePlantList />
      </section>

      <Footer />
    </main>
  );
}



