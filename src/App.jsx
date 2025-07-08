import './index.css';
import logo from './assets/logo.png';
import banner from './assets/banner.jpg';
import BookingModal from './BookingModal';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#fffced] text-[#214b64] font-sans">
      <header className="bg-[#5cc9ea] py-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="w-16 h-auto" />
            <h1 className="text-3xl font-bold text-white">Wheelie Clean Andy</h1>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#de3d2b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600"
          >
            Book Now
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto py-10 px-4">
        <img src={banner} alt="Banner" className="rounded-xl w-full shadow-lg mb-8" />
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#214b64]">Professional Bin Cleaning</h2>
          <p className="text-lg text-[#214b64]">Fresh, fast and eco-friendly bin cleaning service you can rely on.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-[#214b64] mb-10">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Wheelie Bin Cleaning', desc: 'We clean and deodorize your bins until they’re fresh and hygienic.' },
              { title: 'Eco-Friendly Products', desc: 'We use safe, sustainable cleaning agents.' },
              { title: 'Scheduled or One-Off', desc: 'Flexible plans to suit your needs.' },
            ].map((s, idx) => (
              <div key={idx} className="bg-[#fdfdfd] rounded-xl p-6 border border-[#5cc9ea] shadow-sm hover:shadow-md transition">
                <h4 className="text-xl font-bold text-[#de3d2b] mb-2">{s.title}</h4>
                <p className="text-[#214b64] text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#5cc9ea] text-white text-center py-14">
        <h3 className="text-3xl font-bold mb-4">Let’s Get Your Bins Sparkling</h3>
        <p className="mb-6 text-lg">Serving Bangor and surrounding areas.</p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#de3d2b] hover:bg-red-600 px-6 py-3 rounded-full text-white font-bold shadow"
        >
          Book a Clean
        </button>
      </section>

      <footer className="bg-[#214b64] text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Wheelie Clean Andy. All rights reserved.
      </footer>

      {showModal && <BookingModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;