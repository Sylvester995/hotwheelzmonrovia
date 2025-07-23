"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ...rest of your code




export default function VehicleDetailPage() {
    const router = useRouter();

  return (
    <main className="max-w-3xl mx-auto p-8">
      {/* Images Gallery */}
      <section className="mb-8">
        <div className="flex gap-4">
          <div className="w-2/3">
            <div className="h-56 bg-gray-200 flex items-center justify-center rounded">
              {/* Main vehicle image here */}
              <span className="text-gray-400">[Main Image]</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">[Image 2]</div>
            <div className="h-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">[Image 3]</div>
          </div>
        </div>
      </section>

      {/* Details & Actions */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Toyota Corolla 2016</h1>
        <div className="text-lg text-blue-700 font-bold mb-2">$7,500</div>
        <div className="text-sm text-gray-400 mb-4">In Stock</div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div><span className="font-semibold">Brand:</span> Toyota</div>
          <div><span className="font-semibold">Model Year:</span> 2016</div>
          <div><span className="font-semibold">Miles:</span> 56,000</div>
            <div><span className="font-semibold">Condition:</span> Used</div>
          <div><span className="font-semibold">Transmission:</span> Automatic</div>
          <div><span className="font-semibold">Body Type:</span> Sedan</div>
          <div><span className="font-semibold">Fuel:</span> Petrol</div>
          <div><span className="font-semibold">Location:</span> Monrovia</div>
        </div>
        <p className="text-gray-600 mb-4">
          Well-maintained, low-mileage sedan. Great for city and long-distance rides.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
            Request Test Drive
          </button>
          <button className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition">
            Reserve Now
          </button>
          <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-300 transition">
            Financing Options
          </button>
        </div>
        <a
          href="https://wa.me/231881582130"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition mb-6"
        >
          Chat with MARKAY BOY on WhatsApp
        </a>
      </section>
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="mt-8 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        &larr; Go Back
      </button>
    </main>
  );
}
