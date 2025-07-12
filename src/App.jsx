
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Fullscreen Hero */}
      <section className="h-screen bg-orange-100 flex flex-col items-center justify-center text-center px-6">
        <img src="/company-logo.png" alt="Wheelie Clean Andy" className="w-40 md:w-52 mb-6" />
        <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 mb-4 tracking-wide">
          Bin Cleaning, Done Right
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          We leave your bins sparkling, fresh and fly-free. Book Andy today and experience the magic!
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-md"
        >
          📲 Book a Clean
        </button>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6 text-center" id="services">
        <h2 className="text-3xl font-bold mb-12 text-orange-600">Our Services</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            ["Green Bin", "Cleaned, deodorised and sparkling."],
            ["Black Bin", "General waste bins left spotless."],
            ["Blue Bin", "Recycling bins fresh and bug-free."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-orange-50 rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold text-orange-500">{title}</h3>
              <p className="text-gray-700 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-orange-100 py-20 px-6 text-center" id="about">
        <h2 className="text-3xl font-bold mb-6 text-orange-600">Who’s Andy?</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-800">
          I’m Andy — Bangor’s #1 bin cleaning guy. With Cameraman Bobs capturing the action, we’re the friendliest, funniest, and freshest cleaning team in town.
        </p>
      </section>

      {/* Footer Navigation (Pinks style) */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow z-50">
        <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto text-sm font-semibold uppercase tracking-wider text-gray-700">
          <div className="flex gap-6">
            <a href="#about" className="hover:text-orange-500">About</a>
            <a href="#services" className="hover:text-orange-500">Services</a>
          </div>
          <img src="/company-logo.png" alt="Logo" className="w-10 h-10" />
          <div className="flex gap-4">
            <a
              href="#"
              onClick={() => setShowModal(true)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full"
            >
              Book a Clean
            </a>
          </div>
        </div>
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
