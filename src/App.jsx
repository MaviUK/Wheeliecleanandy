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
    <div className="bg-[#fefcf8] min-h-screen font-sans">
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="/andy-banner.png"
          alt="Wheelie Clean Andy Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Wheelie Bin Cleaning, Manchester Style!
          </h1>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-6 flex justify-between items-center text-base font-semibold text-gray-800 z-50">
        <div className="flex gap-4">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
        </div>
        <div className="text-orange-600 text-lg font-extrabold">Wheelie Clean Andy</div>
        <div className="flex gap-4">
          <a href="#contact" className="hover:underline">Contact</a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full"
          >
            Book Now
          </button>
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
    </div>
  );
}
