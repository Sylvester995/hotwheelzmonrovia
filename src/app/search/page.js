export default function SearchPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Find Your Next Vehicle</h1>

      {/* FILTERS */}
      <section className="mb-8 bg-gray-100 p-4 rounded-xl flex flex-wrap gap-4 justify-center">
        <select className="p-2 rounded border" defaultValue="">
          <option value="" disabled>Type (New/Used)</option>
          <option>New</option>
          <option>Used</option>
        </select>
        <select className="p-2 rounded border" defaultValue="">
          <option value="" disabled>Brand</option>
          <option>Toyota</option>
          <option>Ford</option>
          <option>Nissan</option>
        </select>
        <select className="p-2 rounded border" defaultValue="">
          <option value="" disabled>Model Year</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
        <select className="p-2 rounded border" defaultValue="">
          <option value="" disabled>Price Range</option>
          <option>Below $10,000</option>
          <option>$10,000 - $20,000</option>
          <option>Above $20,000</option>
        </select>
        <select className="p-2 rounded border" defaultValue="">
          <option value="" disabled>Transmission</option>
          <option>Automatic</option>
          <option>Manual</option>
        </select>
        <select className="p-2 rounded border" defaultValue="">
          <option value="" disabled>Body Type</option>
          <option>SUV</option>
          <option>Sedan</option>
          <option>Pickup</option>
        </select>
      </section>

      {/* LISTINGS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Example card */}
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
          <div className="w-full h-32 bg-gray-200 mb-4 rounded"></div>
          <h3 className="font-bold mb-2 text-gray-400">Toyota Corolla 2016</h3>
          <p className="text-gray-600 mb-1">$7,500</p>
          <p className="text-xs text-gray-400 mb-4">Used · In Stock</p>
          <a href="/vehicle/1">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm mb-2">
              Request to Purchase
            </button>
          </a>
          <a href="/vehicle/1">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-sm">
              View Details
            </button>
          </a>
        </div>
        {/* Copy and modify this card for more vehicles */}
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
          <div className="w-full h-32 bg-gray-200 mb-4 rounded"></div>
          <h3 className="font-bold mb-2 text-gray-400">Nissan Rogue 2018</h3>
          <p className="text-gray-600 mb-1">$10,900</p>
          <p className="text-xs text-gray-400 mb-4">Used · In Stock</p>
          <a href="/vehicle/2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm mb-2">
              Request to Purchase
            </button>
          </a>
          <a href="/vehicle/2">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-sm">
              View Details
            </button>
          </a>
        </div>
        <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
          <div className="w-full h-32 bg-gray-200 mb-4 rounded"></div>
          <h3 className="font-bold mb-2 text-gray-400">Ford F-150 2017</h3>
          <p className="text-gray-600 mb-1">$13,400</p>
          <p className="text-xs text-gray-400 mb-4">Used · In Shipment</p>
          <a href="/vehicle/3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm mb-2">
              Request to Purchase
            </button>
          </a>
          <a href="/vehicle/3">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition text-sm">
              View Details
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
