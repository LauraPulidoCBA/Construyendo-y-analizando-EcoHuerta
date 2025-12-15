// FilterablePlantList.jsx
import { useState } from "react";
import PlantCard from "./PlantCard.jsx";

import tomatoImg from "../assets/images/Tomate.jpg";
import lettuceImg from "../assets/images/lechuga.jpg";
import carrotImg from "../assets/images/zanahoria.jpg";
import strawberryImg from "../assets/images/Fresas.jpg"; 
import broccoliImg from "../assets/images/Brocoli.jpg"; 
import avocadoImg from "../assets/images/aguacate.jpg";


const plants = [
  { name: "Tomate", description: "Cultivo de temporada cálida rico en licopeno.", image: tomatoImg },
  { name: "Lechuga", description: "Hortaliza de hoja de temporada fría.", image: lettuceImg },
  { name: "Zanahoria", description: "Raíz rica en betacarotenos.", image: carrotImg },
  { name: "Fresa", description: "Fruta dulce rica en vitamina C.", image: strawberryImg }, 
  { name: "Brócoli", description: "Verdura crucífera rica en antioxidantes.", image: broccoliImg }, 
  { name: "Aguacate", description: "Fruto cremoso rico en grasas saludables.", image: avocadoImg },
];

export default function FilterablePlantList() {
  const [filter, setFilter] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="w-full max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Buscar planta..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {filteredPlants.map((plant, idx) => (
          <PlantCard key={idx} {...plant} />
        ))}
      </div>
    </section>
  );
}
