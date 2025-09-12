import { motion } from "framer-motion";

export default function StatsCard({ title, value, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center"
    >
      <h3 className="text-gray-600 dark:text-gray-300 text-sm">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
      <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
    </motion.div>
  );
}