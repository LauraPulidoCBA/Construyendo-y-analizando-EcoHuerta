export default function Card({ title, description, image }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition w-64">

      {image && (
        <img src={image} alt={title} className="rounded-md mb-3 w-full h-40 object-cover" />
      )}
      <h2 className="text-xl font-semibold mb-2 text-green-700">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
    </article>
  );
}
