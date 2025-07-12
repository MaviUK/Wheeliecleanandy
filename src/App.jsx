
import './index.css';
import banner from './assets/banner.jpg';

function App() {
  return (
    <div className="bg-[#FFF8ED] text-[#1E293B] font-sans min-h-screen">
      <header className="text-center pt-6 pb-2">
        <img src={banner} alt="Wheelie Clean Andy Banner" className="w-full max-w-3xl mx-auto rounded-lg shadow-lg" />
      </header>

      <section className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-[#FF7A00]">Professional Bin Cleaning</h1>
        <p className="text-lg mt-2 text-slate-700 max-w-md mx-auto">Fresh, fast and eco-friendly bin cleaning service you can rely on.</p>
        <a
          href="#booking"
          className="mt-6 inline-block bg-[#FF7A00] text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition"
        >
          Book Now
        </a>
      </section>

      <section className="bg-white text-center py-12" id="services">
        <h2 className="text-3xl font-bold text-[#1E293B]">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6 px-4">
          {[
            { title: 'Wheelie Bin Cleaning', desc: 'We clean and deodorize your bins until they’re fresh and hygienic.' },
            { title: 'Eco-Friendly Products', desc: 'We use safe, biodegradable products good for your home and the environment.' },
            { title: 'Flexible Scheduling', desc: 'Weekly, bi-weekly, or monthly – your choice, no drama.' },
          ].map((s, idx) => (
            <div key={idx} className="bg-[#FFF8ED] rounded-xl p-6 max-w-xs w-full shadow-md border border-orange-100">
              <h3 className="text-xl font-bold text-[#FF7A00]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#FFF8ED] text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Wheelie Clean Andy · All rights reserved.
      </footer>
    </div>
  );
}

export default App;
