
import React from 'react';

function App() {
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="flex justify-center py-4 space-x-8 text-xl font-bold uppercase">
          <a href="#services" className="hover:text-orange-500">What We Do</a>
          <a href="#benefits" className="hover:text-orange-500">Benefits</a>
          <button onClick={() => window.open('https://wa.me/447555178484', '_blank')} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Book Now
          </button>
          <a href="#why-andy" className="hover:text-orange-500">Why Andy</a>
          <a href="#my-journey" className="hover:text-orange-500">My Journey</a>
        </div>
      </nav>

      <header className="pt-24">
        <img src="/banner.png" alt="Wheelie Clean Andy Banner" className="w-full object-cover" />
      </header>

      <section id="services" className="p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">What We Do</h2>
        <p>We clean household wheelie bins using eco-friendly methods that are safe for your family and the environment. We remove smells, grime, insects, and bacteria so your bins stay fresh and clean all year round.</p>
      </section>

      <section id="benefits" className="p-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-left max-w-md mx-auto">
          <li>Eliminates foul odours</li>
          <li>Deters insects and pests</li>
          <li>Eco-friendly products</li>
          <li>Improves hygiene</li>
          <li>Professional, reliable service</li>
        </ul>
      </section>

      <section id="why-andy" className="p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Andy</h2>
        <p>After redundancy, I teamed up with my nephew Bob (and his camera!) to build this business from scratch. We're filming the journey — join us and see how far we go!</p>
      </section>

      <section id="my-journey" className="p-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">My Journey on TikTok</h2>
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@wheeliecleanandy" data-unique-id="wheeliecleanandy" style={{ maxWidth: '605px', minWidth: '325px' }}>
          <section>Loading TikTok...</section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </section>
    </div>
  );
}

export default App;
