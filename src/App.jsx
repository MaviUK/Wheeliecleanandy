import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    bin: "Green Bin",
    type: "One-off",
    address: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const message = `🧹 New Booking Request:\n\n👤 Name: ${form.name}\n🗑️ Bin: ${form.bin}\n📅 Type: ${form.type}\n🏠 Address: ${form.address}\n📧 Email: ${form.email}`;
    const url = `https://wa.me/447583847902?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-[#fefcf8] min-h-screen font-bebas">
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="/andy-banner.png"
          alt="Wheelie Clean Andy Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg text-center">
            Wheelie Bin Cleaning, Manchester Style!
          </h1>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-6 px-8 flex justify-between items-center text-4xl tracking-wide font-bold text-[#002d3f] z-50">
        <div className="flex gap-10 uppercase">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white py-5 px-10 rounded-full text-3xl uppercase tracking-wide shadow"
        >
          Book Now
        </button>
        <div className="flex gap-10 uppercase">
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <div className="text-xl font-bold mb-4">Book a Bin Clean</div>
            <input type="text" name="name" placeholder="Your Name" className="w-full border p-2 rounded mb-2" onChange={handleChange} />
            <select name="bin" className="w-full border p-2 rounded mb-2" onChange={handleChange}>
              <option>Green Bin</option>
              <option>Black Bin</option>
              <option>Blue Bin</option>
            </select>
            <select name="type" className="w-full border p-2 rounded mb-2" onChange={handleChange}>
              <option>One-off</option>
              <option>Monthly</option>
              <option>Every 2 weeks</option>
            </select>
            <input type="text" name="address" placeholder="Full Address" className="w-full border p-2 rounded mb-2" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" className="w-full border p-2 rounded mb-4" onChange={handleChange} />
            <button onClick={sendWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-base font-semibold">
              Send via WhatsApp
            </button>
            <button onClick={() => setShowModal(false)} className="text-gray-500 text-sm mt-3 underline">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div id="services" className="py-20 px-6 bg-orange-50 text-left">
        <h2 className="text-5xl font-bold text-orange-600 mb-6 uppercase tracking-wide">What We Do</h2>
        <div className="max-w-4xl mx-auto text-gray-800 text-2xl leading-relaxed space-y-6">
          <p>
            At <span className="font-bold text-orange-600">Wheelie Clean Andy</span>, we specialise in professional wheelie bin cleaning
            for households across Manchester. Whether it's your <span className="font-semibold">green bin, black bin or blue bin</span>,
            we make sure your bins are sparkling clean, fresh-smelling, and hygienic.
          </p>
          <p>
            Our service is ideal for households that want to maintain cleanliness, avoid pests and eliminate nasty odours.
            We clean bins <span className="font-semibold">right at your kerbside</span> after collection day, so you don’t even need to be home.
          </p>
          <p>
            We use <span className="font-semibold">eco-friendly biodegradable products</span> and minimal water, ensuring that our process is
            kind to the planet. All waste water is contained and responsibly disposed of.
          </p>
          <p>
            ✨ Clean bins. ✅ No smell. 💚 No mess. That’s how we do it.
          </p>
        </div>
      </div>
    </div>
  );
}
