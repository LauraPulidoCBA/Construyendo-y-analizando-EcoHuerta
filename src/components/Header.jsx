// Header.jsx
export default function Header({ title, subtitle }) {
  return (
    <header className="w-full bg-green-700 text-white p-6 shadow-md">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-lg opacity-90">{subtitle}</p>
      </div>
    </header>
  );
}
