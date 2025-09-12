import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", patients: 400 },
  { month: "Feb", patients: 600 },
  { month: "Mar", patients: 800 },
  { month: "Apr", patients: 700 },
  { month: "May", patients: 900 },
];

export default function LineChartCard() {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Monthly Patients</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="patients" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}