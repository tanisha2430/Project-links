import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center font-sans">
      {/* Logo */}
      <img src="logo.png" alt="Company Logo" className="h-20 mb-4" />

      {/* Company Name */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Datman Ltd</h1>

      {/* Team Members */}
      <p className="text-lg text-gray-600 mb-5">
        Team Members:{" "}
        <span className="font-bold">Tanisha Saxena, Harsh Saxena</span>
      </p>

      {/* Section: Website Link */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl mb-6">
        <h2 className="text-xl font-semibold mb-2 text-black">
          🌐 Hosted Website
        </h2>
        <a
          href="https://datman-projects.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Datman's AI Portal{" "}
        </a>
      </div>

      {/* Section: PPT Links */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl mb-6">
        <h2 className="text-xl font-semibold mb-4 text-black">
          📊 Project Presentations
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://www.dropbox.com/scl/fi/7r5x4w032z5fsnwh90sdn/Datbot_ppt.pdf?rlkey=p5ddbwbgb0sfouj0972blbb1r&e=1&st=hg0pyp84&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              DatBot - Datman's Support Chatbot
            </a>
          </li>
          <li>
            <a
              href="https://www.dropbox.com/scl/fi/oydna15261fj7uzpprtod/Datmans-Fraud-Detection-MKDFS-2.pdf?rlkey=bi3od0cjed5jaebfrxd0iaupi&st=7cnqakyx&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              MKDFS - Datman's Fraud Engine
            </a>
          </li>
        </ul>
      </div>

      {/* Section: Illustration Video */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl mb-6">
        <h2 className="text-xl font-semibold mb-4 text-black">
          🎥 Illustration Video
        </h2>
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            src="https://www.youtube.com/embed/imoSe6gBVLY"
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
