
import { useState } from "react";
import banner from "/wheelie-banner.png";

export default function WheelieCleanAndyHome() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdf4f1] text-black relative">
      <div className="relative w-full h-screen">
        <img
          src={banner}
          alt="Wheelie Clean Andy Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">Wheelie Clean Andy</h1>
          <p className="text-lg mt-2 text-white">Bin Cleaning That’ll Make You Smile</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#fff8f4] border-t border-pink-300 flex justify-between items-center px-6 py-3 text-[#222] z-50">
        <div className="flex space-x-4 text-sm font-bold">
          <a href="#about" className="hover:text-red-500">ABOUT</a>
          <a href="#services" className="hover:text-red-500">SERVICES</a>
        </div>

        <div className="text-xl font-extrabold tracking-wide text-pink-600">Wheelie Clean Andy</div>

        <div className="flex space-x-4 text-sm font-bold">
          <a href="#contact" className="hover:text-red-500">CONTACT</a>
          <button
            onClick={() => setShowModal(true)}
            className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
          >
            BOOK
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-96 rounded-2xl p-6 text-center shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-6 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Book a Bin Clean</h2>
            <form
              action="https://wa.me/447583847902"
              method="GET"
              target="_blank"
              className="flex flex-col space-y-3"
            >
              <input type="text" placeholder="Your Name" className="input" required />
              <select className="input" required>
                <option>Select Bin</option>
                <option>Green</option>
                <option>Black</option>
              </select>
              <input type="text" placeholder="Full Address" className="input" required />
              <input type="email" placeholder="Email Address" className="input" />
              <button
                type="submit"
                className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
