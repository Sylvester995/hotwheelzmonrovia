export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Blog & News</h1>
      <p className="mb-8 text-center text-gray-500">Get the latest car maintenance tips and HotwheelzMonrovia news.</p>
      
      {/* Featured Article (optional) */}
      <div className="bg-white shadow rounded-xl mb-8 p-6">
        <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400 text-lg">
          [Featured Image]
        </div>
        <h2 className="text-xl font-semibold mb-2 text-gray-400">5 Tips to Keep Your Used Car Running Like New</h2>
        <p className="text-gray-600 mb-3">
          Regular maintenance can save you money and stress. Here are our top tips for keeping your ride in top shape...
        </p>
        <button className="text-blue-600 hover:underline">Read More</button>
      </div>

      {/* Blog Post List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example post 1 */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="h-28 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400 text-sm">
            [Image]
          </div>
          <h3 className="font-semibold mb-1 text-gray-400">How to Check a Used Car Before Buying</h3>
          <p className="text-gray-600 mb-2 text-sm">
            A quick checklist to inspect your future car...
          </p>
          <button className="text-blue-600 hover:underline text-sm">Read More</button>
        </div>
        {/* Example post 2 */}
        <div className="bg-white shadow rounded-xl p-4">
          <div className="h-28 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400 text-sm">
            [Image]
          </div>
          <h3 className="font-semibold mb-1 text-gray-400">Why Choose HotwheelzMonrovia?</h3>
          <p className="text-gray-600 mb-2 text-sm">
            See why so many people trust us for their next car.
          </p>
          <button className="text-blue-600 hover:underline text-sm">Read More</button>
        </div>
      </div>
    </main>
  );
}
