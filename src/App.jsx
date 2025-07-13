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
    <div className="bg-[#fefcf8] min-h-screen text-center font-sans">
      <div className="relative">
        <img
          src="/andy-banner.png"
          alt="Wheelie Clean Andy Banner"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Wheelie Bin Cleaning, Manchester Style!
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md flex items-center justify-between px-6 py-4 text-lg font-bold text-orange-600">
        <div className="flex gap-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full text-base font-semibold shadow"
        >
          Book Now
        </button>
        <div className="flex gap-6">
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
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

      <div id="services" className="py-16 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">What We Do</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          Domestic and commercial bin cleaning services across Greater Manchester.
        </p>
      </div>

      <div id="about" className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">About Us</h2>
        <p className="max-w-xl mx-auto text-gray-700">
          We’re a local startup aiming to clean up Manchester one bin at a time — friendly, fast, and always sparkling results.
        </p>
      </div>

      <div id="contact" className="py-16 bg-orange-100">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Get in Touch</h2>
        <p className="text-gray-700">Call or WhatsApp Andy at 07583 847902</p>
      </div>
    </div>
  );
}
