import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatsCard from "./components/StatsCard";
import LineChartCard from "./components/LineChartCard";
import PieChartCard from "./components/PieChartCard";
import DataTable from "./components/DataTable";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-gray-100 min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>
      <Navbar toggleTheme={() => setDark(!dark)} dark={dark} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatsCard title="Delivery Speed" value="50%" subtitle="Faster delivery" />
            <StatsCard title="User Satisfaction" value="+25%" subtitle="Higher adoption" />
            <StatsCard title="Time to Launch" value="3 Weeks" subtitle="Reduced cycle time" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <LineChartCard />
            <PieChartCard />
          </div>
          <DataTable />
        </main>
      </div>
    </div>
  );
}
export default App;