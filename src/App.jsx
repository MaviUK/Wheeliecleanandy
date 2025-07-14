import React from 'react'

const App = () => {
  return (
    <div className="text-center font-sans">
      <div className="w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: "url('/banner.png')" }}></div>

      <div className="flex justify-center items-center space-x-16 text-4xl py-6 bg-black text-white nav-font">
  <a href="#services">What We Do</a>
  <a href="#benefits">Benefits</a>
  <button onClick={() => window.open('https://wa.me/447555178484', '_blank')} className="bg-green-500 text-black px-6 py-2 rounded-full">Book Now</button>
  <a href="#why">Why Andy</a>
  <a href="#journey">Contact</a>
</div>


      <div id="services" className="py-20 px-6 bg-white text-black text-left">
        <h2 className="text-5xl font-bold text-green-600 mb-6">What We Do</h2>
        <p className="text-2xl max-w-4xl leading-relaxed mx-auto">
          We clean household wheelie bins in an eco-friendly and hygienic manner. Using biodegradable products and
          high-pressure cleaning systems, we remove dirt, grime, and odor — leaving your bin fresh, sanitized, and
          safe.
        </p>
      </div>

      <div id="benefits" className="py-20 px-6 bg-gray-100 text-black text-left">
        <h2 className="text-5xl font-bold text-orange-600 mb-6">Benefits</h2>
        <p className="text-2xl max-w-4xl leading-relaxed mx-auto">
          Regularly cleaned bins reduce unpleasant smells, deter pests like maggots and rats, and help maintain
          hygiene around your home. A clean bin also improves curb appeal and reduces bacterial buildup.
        </p>
      </div>

      <div id="why" className="py-20 px-6 bg-white text-black text-left">
        <h2 className="text-5xl font-bold text-pink-600 mb-6">Why Andy?</h2>
        <p className="text-2xl max-w-4xl leading-relaxed mx-auto">
          After being made redundant, I decided to build something from nothing with my nephew Bob and a camera. We're
          documenting every step as I build a wheelie bin cleaning business from scratch. Join the journey and support
          local!
        </p>
      </div>

      <div id="contact" className="py-20 px-6 bg-black text-white text-left">
  <h2 className="text-5xl font-bold text-green-400 mb-6">Contact</h2>
  <form name="contact" method="POST" data-netlify="true" className="max-w-md mx-auto space-y-4">
    <input type="hidden" name="form-name" value="contact" />
    <input 
      type="text" 
      name="name" 
      placeholder="Your Name" 
      required 
      className="w-full p-2 rounded text-black" 
    />
    <input 
      type="email" 
      name="email" 
      placeholder="Your Email" 
      required 
      className="w-full p-2 rounded text-black" 
    />
    <textarea 
      name="message" 
      placeholder="Your Message" 
      required 
      className="w-full p-2 rounded text-black"
    ></textarea>
    <button 
      type="submit" 
      className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition"
    >
      Send
    </button>
  </form>
</div>

      </div>
    </div>
  )
}

export default App
