import React from "react";
import { Pie } from "react-chartjs-2";

const AdminHome = () => {
  // Sample data (replace these with actual values from your API or database)
  const totalBiodata = 200;
  const maleBiodata = 120;
  const femaleBiodata = 80;
  const premiumBiodata = 50;
  const totalRevenue = 5000;

  // Data for the Pie Chart
  const pieData = {
    labels: ["Total Biodata", "Male", "Female", "Premium"],
    datasets: [
      {
        data: [totalBiodata, maleBiodata, femaleBiodata, premiumBiodata],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Display Statistics */}
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Biodata</h2>
          <p className="text-xl font-bold">{totalBiodata}</p>
        </div>
        <div className="bg-pink-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Male Biodata</h2>
          <p className="text-xl font-bold">{maleBiodata}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Female Biodata</h2>
          <p className="text-xl font-bold">{femaleBiodata}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Premium Biodata</h2>
          <p className="text-xl font-bold">{premiumBiodata}</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-xl font-bold">${totalRevenue}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Biodata Statistics</h2>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AdminHome;
