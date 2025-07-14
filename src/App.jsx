import React, { useState } from 'react'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [bins, setBins] = useState([{ type: '', quantity: 1, frequency: '' }])

  const addBin = () => {
    setBins([...bins, { type: '', quantity: 1, frequency: '' }])
  }

  const handleBinChange = (index, field, value) => {
    const updatedBins = [...bins]
    updatedBins[index][field] = value
    setBins(updatedBins)
  }

  return (
    <div className="text-center font-sans">
      {/* Mobile Banner */}
      <div className="w-full h-[50vh] bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/banner-mobile.png')" }}></div>

      {/* Desktop Banner */}
      <div className="hidden md:block w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/banner.png')" }}></div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-20 text-6xl py-6 bg-black text-white nav-font">
        <a href="#services">What We Do</a>
        <a href="#benefits">Benefits</a>
        <button onClick={() => setShowModal(true)} className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-600 transition">Book Now</button>
        <a href="#why">Why Andy</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile Menu */}
      <div className="flex flex-col md:hidden items-center py-4 bg-black text-white nav-font text-xl space-y-2">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#services">What We Do</a>
          <a href="#benefits">Benefits</a>
          <a href="#why">Why Andy</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-600 transition">Book Now</button>
      </div>

      {/* What We Do Section */}
      <div id="services" className="py-10 md:py-20 px-4 md:px-6 bg-white text-black text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-green-600 mb-6">What We Do</h2>
        <p className="text-lg md:text-2xl max-w-4xl leading-relaxed mx-auto">
          We clean household wheelie bins in an eco-friendly and hygienic manner. Using biodegradable products and
          high-pressure cleaning systems, we remove dirt, grime, and odor — leaving your bin fresh, sanitized, and safe.
        </p>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-10 md:py-20 px-4 md:px-6 bg-gray-100 text-black text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6">Benefits</h2>
        <p className="text-lg md:text-2xl max-w-4xl leading-relaxed mx-auto">
          Regularly cleaned bins reduce unpleasant smells, deter pests like maggots and rats, and help maintain hygiene around your home. 
          A clean bin also improves curb appeal and reduces bacterial buildup.
        </p>
      </div>

      {/* Why Andy Section */}
      <div id="why" className="py-10 md:py-20 px-4 md:px-6 bg-white text-black text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-pink-600 mb-6">Why Andy?</h2>
        <p className="text-lg md:text-2xl max-w-4xl leading-relaxed mx-auto">
          After being made redundant, I decided to build something from nothing with my nephew Bob and a camera. 
          We're documenting every step as I build a wheelie bin cleaning business from scratch. Join the journey and support local!
        </p>
      </div>

      {/* Contact Form */}
      <div id="contact" className="py-10 md:py-20 px-4 md:px-6 bg-black text-white text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-green-400 mb-6">Contact</h2>
        <form name="contact" method="POST" data-netlify="true" className="max-w-md mx-auto space-y-4">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded text-black" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded text-black" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 rounded text-black"></textarea>
          <button type="submit" className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition w-full">Send</button>
        </form>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Book a Bin Clean</h2>
              <button onClick={() => setShowModal(false)} className="text-2xl">&times;</button>
            </div>

           <form className="space-y-4">
  <input type="text" placeholder="Your Name" className="w-full p-2 border rounded text-black" required />

  {bins.map((bin, index) => (
    <div key={index} className="flex gap-2">
      <select
        value={bin.type}
        onChange={(e) => handleBinChange(index, 'type', e.target.value)}
        className="flex-1 p-2 border rounded text-black"
        required
      >
        <option value="">Select Bin</option>
        <option value="Black">Black</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>

      <input
        type="number"
        min="1"
        value={bin.quantity}
        onChange={(e) => handleBinChange(index, 'quantity', e.target.value)}
        className="w-20 p-2 border rounded text-black"
        required
      />

      <select
        value={bin.frequency}
        onChange={(e) => handleBinChange(index, 'frequency', e.target.value)}
        className="flex-1 p-2 border rounded text-black"
        required
      >
        <option value="">Frequency</option>
        <option value="One-off">One-off</option>
        <option value="4 Weekly">4 Weekly</option>
      </select>
    </div>
  ))}

  <button type="button" onClick={addBin} className="text-green-500 text-left">+ Add Another Bin</button>

  <input type="text" placeholder="Full Address" className="w-full p-2 border rounded text-black" required />
  <input type="email" placeholder="Email Address" className="w-full p-2 border rounded text-black" required />

  <button type="submit" className="w-full bg-green-500 text-black py-2 rounded hover:bg-green-600 transition">Send via WhatsApp</button>
</form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
