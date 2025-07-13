import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = () => {
    window.open("https://wa.me/447555178484?text=Hi%20I%20want%20my%20bin%20cleaned!", "_blank");
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Banner */}
      <img
        src="/banner.jpg"
        alt="Wheelie Clean Andy Banner"
        className="w-full h-screen object-cover"
      />

      {/* Navigation */}
      <nav className="flex justify-center items-center py-6 text-xl font-bold tracking-widest space-x-6 uppercase bg-black">
        <a href="#services" className="hover:text-lime-300">What We Do</a>
        <a href="#benefits" className="hover:text-lime-300">Benefits</a>
        <button
          onClick={handleBookNow}
          className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 text-2xl shadow-lg"
        >
          Book Now
        </button>
        <a href="#whyandy" className="hover:text-lime-300">Why Andy</a>
        <a href="#journey" className="hover:text-lime-300">My Journey</a>
      </nav>

      {/* What We Do */}
      <section id="services" className="py-20 px-6 bg-white text-black">
        <h2 className="text-5xl font-bold text-lime-700 mb-6 uppercase tracking-wide">What We Do</h2>
        <div className="max-w-4xl mx-auto text-2xl space-y-4">
          <p>We clean household bins on a regular schedule, removing dirt, grime, and odor.</p>
          <p>All cleaning is done in an eco-friendly manner using biodegradable cleaning solutions and water-saving techniques.</p>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-6 bg-lime-100 text-black">
        <h2 className="text-5xl font-bold text-orange-600 mb-6 uppercase tracking-wide">Benefits</h2>
        <div className="max-w-4xl mx-auto text-2xl space-y-4">
          <p>✔️ No more smelly bins attracting flies.</p>
          <p>✔️ Eco-friendly and safe for kids and pets.</p>
          <p>✔️ Affordable, professional, and hassle-free.</p>
        </div>
      </section>

      {/* Why Andy */}
      <section id="whyandy" className="py-20 px-6 bg-white text-black">
        <h2 className="text-5xl font-bold text-pink-600 mb-6 uppercase tracking-wide">Why Andy</h2>
        <div className="max-w-4xl mx-auto text-2xl space-y-6">
          <p>I was made redundant, and with my nephew Bob behind the camera, we’ve decided to film and build this business from the ground up. We’re bringing the bins back to life — one street at a time.</p>
          <p>Follow us and be part of the journey from nothing to something real.</p>
        </div>
      </section>

      {/* My Journey / TikTok Embed */}
      <section id="journey" className="py-20 px-6 bg-black text-white">
        <h2 className="text-5xl font-bold text-pink-500 mb-6 uppercase tracking-wide text-center">My Journey</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <iframe
            src="https://www.tiktok.com/embed/v2/1"
            width="325"
            height="570"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.tiktok.com/embed/v2/2"
            width="325"
            height="570"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.tiktok.com/embed/v2/3"
            width="325"
            height="570"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
