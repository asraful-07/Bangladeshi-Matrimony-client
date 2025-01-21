import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner";
import Story from "../../components/Story";

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800"];

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch the admin statistics
  const { data, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stat");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Prepare data for the pie chart
  const pieChartData = [
    { name: "Total Biodata", value: data.totalBiodata },
    { name: "Male Biodata", value: data.maleBiodataCount },
    { name: "Female Biodata", value: data.femaleBiodataCount },
    { name: "Premium Biodata", value: data.premiumBiodataCount },
    { name: "Total Revenue", value: data.totalRevenue },
  ];

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
        Admin Statistics
      </h1>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.name}: ${entry.value}`}
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <Story />
      </div>
    </div>
  );
};

export default AdminHome;
