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

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 py-6 px-8 flex flex-col items-center text-2xl tracking-wide font-bold text-[#002d3f] z-50 space-y-3">
        <div className="flex gap-8 uppercase justify-center">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-full text-2xl uppercase tracking-wide shadow"
        >
          Book Now
        </button>
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
    </div>
  );
}
