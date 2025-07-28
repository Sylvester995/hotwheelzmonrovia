import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export default function HomePage() {
  return (
    
    <main className="flex flex-col items-center gap-12 p-6">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center py-12">
      <div className="mb-6 flex justify-center">
          <Image
            src="/hotwheelz_hero.png"
            alt="HotwheelzMonrovia Logo"
            width={300}    // or whatever size you prefer
            height={146}   // adjust as needed
            priority
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Find Your Ride Today – New or Used</h1>
        <p className="text-lg mb-8 text-gray-600">
          Drive Your Dream, Liberia's Way.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/search?type=new">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Search New Vehicles
            </button>
          </Link>
          <Link href="/search?type=used">
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
              Search Used Vehicles
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
            <div className="w-full h-32 bg-gray-200 mb-4 rounded"></div>
            <h3 className="font-bold mb-2">Toyota Corolla 2016</h3>
            <p className="text-gray-600 mb-1">$7,500</p>
            <p className="text-xs text-gray-400 mb-4">In Stock</p>
            <Link href="/vehicle/1">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                View Details
              </button>
            </Link>
          </div>
          <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
            <div className="w-full h-32 bg-gray-200 mb-4 rounded"></div>
            <h3 className="font-bold mb-2">Nissan Rogue 2018</h3>
            <p className="text-gray-600 mb-1">$10,900</p>
            <p className="text-xs text-gray-400 mb-4">In Stock</p>
            <Link href="/vehicle/2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                View Details
              </button>
            </Link>
          </div>
          <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
            <div className="w-full h-32 bg-gray-200 mb-4 rounded"></div>
            <h3 className="font-bold mb-2">Ford F-150 2017</h3>
            <p className="text-gray-600 mb-1">$13,400</p>
            <p className="text-xs text-gray-400 mb-4">In Shipment</p>
            <Link href="/vehicle/3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full max-w-3xl text-center py-8">
        <h2 className="text-xl font-bold mb-2">Why HotwheelzMonrovia?</h2>
        <p className="text-gray-700">
          Trusted by dozens of buyers in Monrovia. Great prices. Friendly service. Reliable cars!
        </p>
      </section>

      {/* WhatsApp Chat Button (placeholder) */}
    </main>
  );
}
