import { motion } from "framer-motion";

const Filter = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 overflow-y-auto max-h-[90vh]"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Apply Filters</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Out of Syllabus */}
        <div className="mb-6 flex items-center gap-3">
          <input type="checkbox" id="outSyllabus" className="w-4 h-4" />
          <label htmlFor="outSyllabus" className="text-gray-700 font-medium">
            Hide Out of Syllabus Qs
          </label>
        </div>

        {/* Question Type */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2 text-gray-800">
            Question Type
          </p>
          <div className="flex flex-col gap-2 pl-3">
            {["Single Correct", "Multiple Correct", "Numerical"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Evaluation Status */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2 text-gray-800">
            Evaluation Status
          </p>
          <div className="flex flex-col gap-2 pl-3">
            {["Correct", "Incorrect", "Partially Correct"].map((status) => (
              <label key={status} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Years */}
        <div className="mb-6">
          <p className="text-lg font-semibold mb-2 text-gray-800">Years</p>
          <div className="grid grid-cols-2 gap-2 pl-3">
            {[
              "JEE Main 2025",
              "JEE Main 2024",
              "JEE Main 2023",
              "JEE Main 2022",
            ].map((year) => (
              <label key={year} className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-700">{year}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg">
            Reset Filter
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
            Apply Filter
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Filter;
