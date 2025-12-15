// PlantCard.jsx
export default function PlantCard({ name, description, image }) {
  return (
    <article className="bg-white rounded-xl shadow-md p-4 w-64">
      <img src={image} alt={name} className="rounded-md mb-3 w-full h-40 object-cover" />
      <h2 className="text-lg font-semibold text-green-700">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </article>
  );
}
