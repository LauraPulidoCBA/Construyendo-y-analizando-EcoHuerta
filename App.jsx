import Header from "./components/Header";
import PlantaCard from "./components/PlantaCard";
import Contador from "./components/Contador";
import Parrafo from "./components/Parrafo";
import Boton from "./components/Boton";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header />
      <Parrafo />

      <section className="flex gap-4">
        <PlantaCard nombre="Tomate" tipo="Fruto" />
        <PlantaCard nombre="Lechuga" tipo="Hoja" />
      </section>

      <Contador />
      <Boton />
    </main>
  );
}

export default App;