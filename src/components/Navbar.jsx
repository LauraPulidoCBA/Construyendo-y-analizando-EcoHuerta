import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-green-700 text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">EcoHuerta 🌿</h1>
      <button onClick={() => setOpen(!open)} className="mt-2 bg-green-600 px-3 py-1 rounded">
        Menú
      </button>
      {open && (
        <ul className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
          <li className="hover:underline cursor-pointer">Inicio</li>
          <li className="hover:underline cursor-pointer">Plantas</li>
          <li className="hover:underline cursor-pointer">Contacto</li>
        </ul>
      )}
    </nav>
  );
}

