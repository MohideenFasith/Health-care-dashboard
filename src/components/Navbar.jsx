export default function Navbar({ toggleTheme, dark }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Healthcare Dashboard</h1>
      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100"
      >
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}