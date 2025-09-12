import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Cardiology", value: 400 },
  { name: "Neurology", value: 300 },
  { name: "Orthopedics", value: 300 },
  { name: "Pediatrics", value: 200 },
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444"];

export default function PieChartCard() {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Patients by Department</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}