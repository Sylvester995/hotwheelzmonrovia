export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Have a question? We’d love to hear from you!</p>
      
      {/* WhatsApp Contact */}
      <a
        href="https://wa.me/231881582130"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-center mb-4 hover:bg-green-600 transition"
      >
        Chat with us on WhatsApp
      </a>

      {/* Email */}
      <div className="mb-6 text-center text-gray-700">
        Or email us at <a href="mailto:HotwheelzMonrovia@gmail.com" className="text-blue-600 underline">HotwheelzMonrovia@gmail.com</a>
      </div>

      {/* Google Maps */}
      <div className="mb-8">
  <h2 className="text-lg font-semibold mb-2">Our Location</h2>
  <div className="rounded-xl overflow-hidden shadow mb-2">
    <iframe
      src="https://www.google.com/maps?q=Old+Road,+Monrovia,+Liberia&output=embed"
      width="100%"
      height="240"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <div className="text-sm text-gray-400">Old Road, Monrovia, Liberia</div>
</div>


      {/* Opening Hours */}
      <div className="mb-8 text-gray-200">
        <h2 className="text-lg font-semibold mb-2">Opening Hours</h2>
        <ul className="text-gray-400 text-sm">
          <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
          <li>Saturday: 9:00 AM – 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Contact Form */}
      <form className="bg-gray-100 p-6 rounded-xl shadow flex flex-col gap-4 text-gray-400">
        <input
          type="text"
          placeholder="Your Name :"
          className="p-2 rounded border"
        />
        <input
          type="email"
          placeholder="Your Email :"
          className="p-2 rounded border"
        />
        <textarea
          placeholder="Your Message ..."
          className="p-2 rounded border"
          rows={4}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          disabled
        >
          Send Message (Demo)
        </button>
      </form>
    </main>
  );
}
