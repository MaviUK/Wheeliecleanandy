// App.jsx
import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      <nav className="nav-bar">
        <a href="#services">What We Do</a>
        <a href="#benefits">Benefits</a>
        <button onClick={() => window.open('https://wa.me/447555178484', '_blank')}>Book Now</button>
        <a href="#why-andy">Why Andy</a>
        <a href="#my-journey">My Journey</a>
      </nav>

      <header>
        <img src="/banner.png" alt="Wheelie Clean Andy Banner" className="banner" />
      </header>

      <section id="services">
        <h2>What We Do</h2>
        <p>We clean household wheelie bins using eco-friendly methods that are safe for your family and the environment. We remove smells, grime, insects, and bacteria so your bins stay fresh and clean all year round.</p>
      </section>

      <section id="benefits">
        <h2>Benefits</h2>
        <ul>
          <li>Eliminates foul odours</li>
          <li>Deters insects and pests</li>
          <li>Eco-friendly products</li>
          <li>Improves hygiene</li>
          <li>Professional, reliable service</li>
        </ul>
      </section>

      <section id="why-andy">
        <h2>Why Andy</h2>
        <p>After being made redundant, I teamed up with my nephew Bob (and his camera!) to build something real — a local bin cleaning service from scratch. We're documenting the full journey — real hustle, no fluff. Join the adventure!</p>
      </section>

      <section id="my-journey">
        <h2>My Journey on TikTok</h2>
        <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@wheeliecleanandy" data-unique-id="wheeliecleanandy" style={{ maxWidth: '605px', minWidth: '325px' }}>
          <section>Loading TikTok...</section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </section>
    </div>
  );
}

export default App;
