import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#050505] text-white font-sans">
      {/* Hero */}
      <section className="text-center py-16 px-4 bg-[#1a1a1a]">
        <img src="/andy-logo.png" alt="Wheelie Clean Andy" className="mx-auto mb-8 w-[30rem] md:w-[35rem]" />
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500">Wheelie Bin Cleaning, Done Fun</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
          Friendly, fast, and fresh-smelling bins. Let Andy sort your stink!
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition"
        >
          📲 Book a Clean via WhatsApp
        </button>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#27272a]">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Green Bins", desc: "One-off or regular deep cleans." },
            { title: "Black Bins", desc: "Smell-free and sparkling every time." },
            { title: "Eco-Friendly", desc: "Biodegradable products, minimal water." }
          ].map((s, i) => (
            <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold text-orange-400 mb-2">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Andy */}
      <section className="py-16 px-6 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Andy?</h2>
        <p className="max-w-2xl mx-auto text-lg">Smells great. Looks clean. Friendly faces. You’ll know when Andy’s been!</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © 2025 Wheelie Clean Andy | 📞 07583 847902
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
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
                <option>Both Bins</option>
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