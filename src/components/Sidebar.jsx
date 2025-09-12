import { Home, BarChart2, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 hidden md:block">
      <nav className="space-y-6">
        <a href="#" className="flex items-center space-x-3 hover:text-blue-600">
          <Home /> <span>Overview</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-600">
          <BarChart2 /> <span>Reports</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-600">
          <Users /> <span>Patients</span>
        </a>
        <a href="#" className="flex items-center space-x-3 hover:text-blue-600">
          <Settings /> <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}