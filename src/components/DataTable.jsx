const patients = [
  { id: 1, name: "John Doe", age: 45, department: "Cardiology", status: "Stable" },
  { id: 2, name: "Jane Smith", age: 39, department: "Neurology", status: "Critical" },
  { id: 3, name: "David Johnson", age: 29, department: "Orthopedics", status: "Recovering" },
  { id: 4, name: "Emily Davis", age: 50, department: "Pediatrics", status: "Stable" },
];

export default function DataTable() {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Patient Records</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-600">
            <th className="p-3 text-left">Name</th>
            <th className="p-3">Age</th>
            <th className="p-3">Department</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.age}</td>
              <td className="p-3">{p.department}</td>
              <td className={`p-3 font-medium ${p.status === "Critical" ? "text-red-600" : "text-green-600"}`}>
                {p.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}