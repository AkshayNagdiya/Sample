// // import React from "react";

// // const Content = () => {
// //   return (
// //     <main className="flex-1 p-4 overflow-y-auto bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-xl">
// //       <h2 className="text-2xl font-bold mb-4">Content</h2>
// //       {/* Add main content here */}
// //       <div className="space-y-4">
// //         {/* Example content to demonstrate scrolling */}
// //         {[...Array(50)].map((_, index) => (
// //           <p key={index}>
// //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
// //             lacinia odio vitae vestibulum. Duis vehicula, nunc non auctor
// //             efficitur, purus dolor venenatis ligula, sit amet luctus lectus
// //             libero sit amet libero.
// //           </p>
// //         ))}
// //       </div>
// //     </main>
// //   );
// // };

// // export default Content;
// import React, { useRef, useEffect } from "react";
// import { Line, Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   PointElement,
//   ArcElement,
// } from "chart.js";

// // Register components
// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   PointElement,
//   ArcElement
// );

// const Content = () => {
//   const lineChartRef = useRef(null);
//   const barChartRef = useRef(null);
//   const pieChartRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       if (lineChartRef.current) {
//         lineChartRef.current.destroy();
//       }
//       if (barChartRef.current) {
//         barChartRef.current.destroy();
//       }
//       if (pieChartRef.current) {
//         pieChartRef.current.destroy();
//       }
//     };
//   }, []);

//   const lineData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//     datasets: [
//       {
//         label: "Monthly Sales",
//         data: [30, 45, 60, 50, 70, 65, 80],
//         borderColor: "#4CAF50",
//         backgroundColor: "rgba(76, 175, 80, 0.2)",
//         fill: true,
//       },
//     ],
//   };

//   const barData = {
//     labels: ["Q1", "Q2", "Q3", "Q4"],
//     datasets: [
//       {
//         label: "Quarterly Revenue",
//         data: [5000, 7000, 8000, 9000],
//         backgroundColor: "#2196F3",
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Product A", "Product B", "Product C", "Product D"],
//     datasets: [
//       {
//         label: "Product Distribution",
//         data: [25, 30, 20, 25],
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
//       },
//     ],
//   };

//   return (
//     <main className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-xl space-y-4">
//       {/* Charts */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {/* Line Chart */}
//         <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
//           <h3 className="text-lg font-semibold mb-2">Monthly Sales</h3>
//           <div className="flex-1">
//             <Line data={lineData} ref={lineChartRef} />
//           </div>
//         </div>
//         {/* Bar Chart */}
//         <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
//           <h3 className="text-lg font-semibold mb-2">Quarterly Revenue</h3>
//           <div className="flex-1">
//             <Bar data={barData} ref={barChartRef} />
//           </div>
//         </div>
//         {/* Pie Chart */}
//         <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
//           <h3 className="text-sm font-semibold mb-2">Product Distribution</h3>
//           <div className="flex-1">
//             <Pie data={pieData} ref={pieChartRef} />
//           </div>
//         </div>
//       </div>

//       {/* Dashboard Summary */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {/* Example Card 1 */}
//         <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
//           <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Total Sales
//           </h3>
//           <p className="text-lg font-semibold">$20,000</p>
//         </div>
//         {/* Example Card 2 */}
//         <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
//           <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             New Users
//           </h3>
//           <p className="text-lg font-semibold">150</p>
//         </div>
//         {/* Example Card 3 */}
//         <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
//           <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Pending Orders
//           </h3>
//           <p className="text-lg font-semibold">25</p>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Content;

import React, { useRef, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  ArcElement,
} from "chart.js";

// Register components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PointElement,
  ArcElement
);

const Content = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }
      if (barChartRef.current) {
        barChartRef.current.destroy();
      }
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
    };
  }, []);

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [30, 45, 60, 50, 70, 65, 80],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Quarterly Revenue",
        data: [5000, 7000, 8000, 9000],
        backgroundColor: "#2196F3",
      },
    ],
  };

  const pieData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Product Distribution",
        data: [25, 30, 20, 25],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <main className="flex-1 p-4 dark:bg-gray-800 dark:text-gray-200 rounded-xl space-y-4 ">
      {/* Charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center h-64">
          <h3 className="text-sm font-semibold mb-2">Monthly Sales</h3>
          <div className="w-full h-full flex items-center justify-center">
            <Line
              data={lineData}
              ref={lineChartRef}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
        
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center h-64">
          <h3 className="text-sm font-semibold mb-2">Quarterly Revenue</h3>
          <div className="w-full h-full flex items-center justify-center">
            <Bar
              data={barData}
              ref={barChartRef}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col items-center h-64">
          <h3 className="text-sm font-semibold mb-2">Product Distribution</h3>
          <div className="w-full h-full flex items-center justify-center">
            <Pie
              data={pieData}
              ref={pieChartRef}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>

      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Example Card 1 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Total Sales
          </h3>
          <p className="text-lg font-semibold">$20,000</p>
        </div>
        {/* Example Card 2 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            New Users
          </h3>
          <p className="text-lg font-semibold">150</p>
        </div>
        {/* Example Card 3 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Pending Orders
          </h3>
          <p className="text-lg font-semibold">25</p>
        </div>
        {/* Example Card 4 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Pending Orders
          </h3>
          <p className="text-lg font-semibold">25</p>
        </div>
      </div>

      {/* Dashboard Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example Card 1 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Total Sales
          </h3>
          <p className="text-lg font-semibold">$20,000</p>
        </div>
        {/* Example Card 2 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            New Users
          </h3>
          <p className="text-lg font-semibold">150</p>
        </div>
        {/* Example Card 3 */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Pending Orders
          </h3>
          <p className="text-lg font-semibold">25</p>
        </div>
      </div>
    </main>
  );
};

export default Content;
