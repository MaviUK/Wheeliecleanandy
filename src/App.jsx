
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center">
      <header className="bg-green-800 text-white w-full py-6">
        <nav className="text-2xl flex justify-center gap-8 font-bold">
          <a href="#whatwedo">What We Do</a>
          <a href="#benefits">Benefits</a>
          <button
            onClick={() => window.open('https://wa.me/447555178484', '_blank')}
            className="bg-green-500 px-6 py-2 rounded-full text-white"
          >
            Book Now
          </button>
          <a href="#whyandy">Why Andy</a>
          <a href="#journey">My Journey</a>
        </nav>
      </header>

      <section id="whatwedo" className="py-20 px-4 max-w-3xl text-xl">
        <h2 className="text-4xl font-bold mb-4 text-green-700">What We Do</h2>
        <p>
          We clean household wheelie bins using eco-friendly methods that are safe for your family and the environment. We remove smells, grime, insects, and bacteria so your bins stay fresh and clean all year round.
        </p>
      </section>

      <section id="benefits" className="py-20 px-4 max-w-3xl text-xl bg-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Benefits</h2>
        <ul className="list-disc list-inside text-left">
          <li>Eliminates foul odours</li>
          <li>Deters insects and pests</li>
          <li>Improves hygiene and sanitation</li>
          <li>Better image and curb appeal</li>
          <li>Safe and biodegradable detergents</li>
        </ul>
      </section>

      <section id="whyandy" className="py-20 px-4 max-w-3xl text-xl">
        <h2 className="text-4xl font-bold mb-4 text-green-700">Why Andy</h2>
        <p>
          After being made redundant, I teamed up with my nephew Bob (and his camera!) to build something real — a local bin cleaning service from scratch. We're documenting the full journey — real hustle, no fluff. Join the adventure!
        </p>
      </section>

      <section id="journey" className="py-20 px-4 max-w-3xl text-xl bg-gray-100">
        <h2 className="text-4xl font-bold mb-8 text-green-700">My Journey on TikTok</h2>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@wheeliecleanandy"
          data-unique-id="wheeliecleanandy"
          data-embed-type="creator"
          style={{ maxWidth: '780px', minHeight: '400px' }}
        >
          <section>Loading TikTok...</section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </section>
    </div>
  );
}
