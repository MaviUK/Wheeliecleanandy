import React from "react";

export default function App() {
  return (
    <div className="relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 text-white py-4">
        <ul className="flex justify-center items-center space-x-10 text-xl font-bold">
          <li><a href="#services">What We Do</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li>
            <a
              href="https://wa.me/447555178484"
              className="bg-green-500 text-black px-6 py-2 rounded-full shadow-lg hover:bg-green-600"
            >
              Book Now
            </a>
          </li>
          <li><a href="#whyandy">Why Andy</a></li>
          <li><a href="#journey">My Journey</a></li>
        </ul>
      </nav>

      {/* Hero Banner */}
      <div className="pt-24">
        <img src="/banner.jpg" alt="Banner" className="w-full h-screen object-cover" />
      </div>

      {/* What We Do */}
      <section id="services" className="py-20 px-6 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-6">What We Do</h2>
        <p className="text-xl max-w-3xl mx-auto">
          We clean household wheelie bins in an eco-friendly, hygienic way — removing smells, grime, pests, and bacteria.
        </p>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 px-6 bg-gray-100 text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Benefits</h2>
        <ul className="text-xl max-w-3xl mx-auto space-y-4 list-disc list-inside text-left">
          <li>Eliminates foul odours</li>
          <li>Deters insects and pests</li>
          <li>Eco-friendly products</li>
          <li>Improves hygiene</li>
          <li>Professional, reliable service</li>
        </ul>
      </section>

      {/* Why Andy */}
      <section id="whyandy" className="py-20 px-6 bg-white text-black text-center">
        <h2 className="text-4xl font-bold mb-6">Why Andy</h2>
        <p className="text-xl max-w-3xl mx-auto">
          After redundancy, I teamed up with my nephew Bob (and his camera) to build this business from scratch. We're filming the journey — join us and see how far we go!
        </p>
      </section>

      {/* My Journey (TikTok) */}
      <section id="journey" className="py-20 px-6 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-500">My Journey on TikTok</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <iframe src="https://www.tiktok.com/embed/v2/1" width="325" height="580" allow="autoplay" title="TikTok 1"></iframe>
          <iframe src="https://www.tiktok.com/embed/v2/2" width="325" height="580" allow="autoplay" title="TikTok 2"></iframe>
          <iframe src="https://www.tiktok.com/embed/v2/3" width="325" height="580" allow="autoplay" title="TikTok 3"></iframe>
        </div>
      </section>
    </div>
  );
}
