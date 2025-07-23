"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";


 
export default function AdminPage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("adminLoggedIn")) {
        router.replace("/admin/login");
      } else {
        setIsCheckingAuth(false); // Done checking, safe to render
      }
    }
  }, [router]);

  function handleLogout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("adminLoggedIn");
      router.push("/admin/login");
    }
  }

  if (isCheckingAuth) {
    // Avoid hydration mismatch by not rendering the dashboard until auth is confirmed
    return null;
    // Or: return <div className="text-center mt-16">Checking authentication...</div>
  }
  return (
    <main className="max-w-5xl mx-auto p-8">
      {/* Top: Dashboard title and Logout */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-100 text-blue-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold mb-1">12</div>
          <div className="text-xs uppercase">Vehicles</div>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold mb-1">3</div>
          <div className="text-xs uppercase">In Shipment</div>
        </div>
        <div className="bg-gray-100 text-gray-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold mb-1">8</div>
          <div className="text-xs uppercase">In Stock</div>
        </div>
        <div className="bg-yellow-100 text-yellow-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-bold mb-1">4</div>
          <div className="text-xs uppercase">Leads</div>
        </div>
      </section>

      {/* Inventory Table */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Inventory</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-3 text-left text-sm">Photo</th>
                <th className="py-2 px-3 text-left text-sm">Make/Model</th>
                <th className="py-2 px-3 text-left text-sm">Year</th>
                <th className="py-2 px-3 text-left text-sm">Price</th>
                <th className="py-2 px-3 text-left text-sm">Status</th>
                <th className="py-2 px-3 text-left text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3"><div className="w-14 h-8 bg-gray-200 rounded"></div></td>
                <td className="py-2 px-3">Toyota Corolla</td>
                <td className="py-2 px-3">2016</td>
                <td className="py-2 px-3">$7,500</td>
                <td className="py-2 px-3">In Stock</td>
                <td className="py-2 px-3"><button className="text-blue-600">Edit</button></td>
              </tr>
              <tr>
                <td className="py-2 px-3"><div className="w-14 h-8 bg-gray-200 rounded"></div></td>
                <td className="py-2 px-3">Nissan Rogue</td>
                <td className="py-2 px-3">2018</td>
                <td className="py-2 px-3">$10,900</td>
                <td className="py-2 px-3">In Shipment</td>
                <td className="py-2 px-3"><button className="text-blue-600">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Leads/Requests Table */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Leads / Requests</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-3 text-left text-sm">Name</th>
                <th className="py-2 px-3 text-left text-sm">Contact</th>
                <th className="py-2 px-3 text-left text-sm">Vehicle</th>
                <th className="py-2 px-3 text-left text-sm">Date</th>
                <th className="py-2 px-3 text-left text-sm">Status</th>
                <th className="py-2 px-3 text-left text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3">Samuel K.</td>
                <td className="py-2 px-3">+231 88XXXXXXX</td>
                <td className="py-2 px-3">Toyota Corolla</td>
                <td className="py-2 px-3">2025-07-24</td>
                <td className="py-2 px-3">Pending</td>
                <td className="py-2 px-3"><button className="text-blue-600">View</button></td>
              </tr>
              <tr>
                <td className="py-2 px-3">Mary J.</td>
                <td className="py-2 px-3">+231 77XXXXXXX</td>
                <td className="py-2 px-3">Nissan Rogue</td>
                <td className="py-2 px-3">2025-07-23</td>
                <td className="py-2 px-3">Contacted</td>
                <td className="py-2 px-3"><button className="text-blue-600">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
