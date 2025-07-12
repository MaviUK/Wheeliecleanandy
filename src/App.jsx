
import './index.css';
import banner from './assets/banner.jpg';

function App() {
  return (
    <div className="bg-[#FFF8ED] text-black font-sans">
      <header className="w-full">
        <img src={banner} alt="Wheelie Clean Andy Banner" className="w-full rounded-b-2xl shadow-lg" />
      </header>

      <section className="text-center py-10 bg-[#FFF8ED]">
        <h1 className="text-4xl font-extrabold text-[#1A365D]">Professional Bin Cleaning</h1>
        <p className="text-lg mt-2 text-[#1A365D]">Fresh, fast and eco-friendly bin cleaning service you can rely on.</p>
        <a href="#booking" className="inline-block mt-6 px-6 py-3 bg-[#FF7A00] text-white rounded-full font-semibold shadow hover:bg-orange-600 transition">
          Book a Clean
        </a>
      </section>

      <section className="py-10 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#1A365D]">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[{
            title: 'Wheelie Bin Cleaning',
            desc: 'We clean and deodorize your bins until they’re fresh and hygienic.'
          }].map((s, idx) => (
            <div key={idx} className="bg-[#FFF8ED] rounded-xl p-6 max-w-sm shadow border border-orange-300">
              <h3 className="text-xl font-bold text-[#FF0000]">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 bg-[#FFF8ED]">
        &copy; {new Date().getFullYear()} Wheelie Clean Andy · All rights reserved.
      </footer>
    </div>
  );
}

export default App;
