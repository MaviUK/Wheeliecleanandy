
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section className="bg-white text-center py-20 px-6">
        <img src="/andy-logo.png" alt="Wheelie Clean Andy" className="mx-auto mb-6 w-[20rem] md:w-[25rem]" />
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">Wheelie Bin Cleaning, Done Right</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">Professional, friendly bin cleaning that leaves your bins sparkling and fresh — without the drama.</p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-md"
        >
          📲 Book a Bin Clean
        </button>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">How It Works</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            ["📅", "You Book", "Choose your bins and when you want them cleaned."],
            ["💦", "We Clean", "We arrive on time and give them a sparkling wash."],
            ["😄", "You Smile", "Enjoy fresh bins and a happier home!"]
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold text-green-700">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-700">What We Clean</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            ["Green Bin", "Food & garden waste — we leave it spotless."],
            ["Black Bin", "General waste — fresh, deodorised and clean."],
            ["Blue Bin", "Recycling — we keep it bug and smell free."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-700">{title}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Andy */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Who’s Andy?</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          I'm Andy — your friendly local bin-cleaning guy. With my cameraman Bobs, we’re on a mission to make Bangor’s bins the cleanest (and best-smelling) in the UK.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-8 text-center text-sm">
        © 2025 Wheelie Clean Andy · 📞 07583 847902
      </footer>

      {/* WhatsApp Booking Modal */}
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
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded font-bold">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
