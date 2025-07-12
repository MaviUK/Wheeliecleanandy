
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/company-logo.png" alt="Wheelie Clean Andy" className="w-32 h-auto" />
          <nav className="hidden md:flex gap-6 font-semibold text-sm text-gray-700">
            <a href="#services" className="hover:text-orange-500">Services</a>
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#" onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full font-bold text-sm">
              Book Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: 'url(/andy-banner.png)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Wheelie Bin Cleaning, Done Right</h1>
          <p className="text-lg">Sparkling clean bins. Fresh smells. Friendly faces. Book Andy today.</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-bold"
          >
            📲 Book a Clean
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-orange-500">What We Clean</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            ["Green Bin", "Garden waste, cleaned and deodorised."],
            ["Black Bin", "General waste bins made fresh."],
            ["Blue Bin", "Recycling bins kept tidy and bug-free."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Andy */}
      <section id="about" className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Meet Andy</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          I'm Andy – your friendly neighbourhood bin cleaner. With Cameraman Bobs by my side, we're on a mission to banish bin stink from every street.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-6 text-center text-sm">
        © 2025 Wheelie Clean Andy · 📞 07583 847902
      </footer>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-full max-w-md relative">
            <button
              className="absolute top-2 right-4 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Book a Bin Clean</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value;
                const bin = e.target.bin.value;
                const freq = e.target.freq.value;
                const addr = e.target.address.value;
                const msg = encodeURIComponent(
                  `Hi Andy! I'd like a bin clean.\nName: ${name}\nBin: ${bin}\nFrequency: ${freq}\nAddress: ${addr}`
                );
                window.open(`https://wa.me/447583847902?text=${msg}`, "_blank");
              }}
            >
              <input name="name" required className="w-full p-2 mb-3 border rounded" placeholder="Your Name" />
              <select name="bin" className="w-full p-2 mb-3 border rounded">
                <option>Green Bin</option>
                <option>Black Bin</option>
                <option>Blue Bin</option>
                <option>All Bins</option>
              </select>
              <select name="freq" className="w-full p-2 mb-3 border rounded">
                <option>One-off</option>
                <option>Monthly</option>
              </select>
              <input name="address" required className="w-full p-2 mb-3 border rounded" placeholder="Full Address" />
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-bold">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
