
import './index.css';
import logo from './assets/logo.png';
import banner from './assets/banner.jpg';

function App() {
  return (
    <div className="bg-[#FFF8ED] text-black font-sans">
      <header className="text-center py-6 bg-[#FFF8ED] shadow-md">
        <img src={logo} alt="Wheelie Clean Andy Logo" className="mx-auto w-40 mb-4" />
        <h1 className="text-4xl font-extrabold text-[#FF7A00]">Wheelie Clean Andy</h1>
        <p className="text-lg mt-2">Bin cleaning with a smile!</p>
      </header>

      <section>
        <img src={banner} alt="Banner" className="w-full max-w-4xl mx-auto py-4 rounded-xl shadow-lg" />
      </section>

      <section className="py-10 px-4 text-center bg-[#F0EFEA]">
        <h2 className="text-3xl font-bold mb-6 text-[#FF7A00]">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: 'Wheelie Bin Cleaning', desc: 'We clean and disinfect your bins until they sparkle.' },
            { title: 'Eco-Friendly Products', desc: 'Safe for the environment, your pets, and your family.' },
            { title: 'Flexible Scheduling', desc: 'Weekly, bi-weekly or monthly visits – your choice.' },
          ].map((s, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 max-w-xs shadow-md border border-orange-300">
              <h3 className="text-xl font-bold text-[#FF7A00]">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#FF7A00] text-white text-center py-10">
        <h2 className="text-3xl font-bold">Ready to Book?</h2>
        <p className="mt-2 text-lg">Call or text Andy at <span className="font-bold underline">07583 847902</span></p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 bg-[#FFF8ED]">
        &copy; {new Date().getFullYear()} Wheelie Clean Andy · All rights reserved.
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447583847902?text=Hi%20Wheelie%20Clean%20Andy!%20I%27d%20like%20to%20book%20a%20bin%20clean."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.893-5.452 0-9.887 4.434-9.889 9.885-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.986zm11.387-5.464c-.074-.124-.272-.198-.57-.347...
          </svg>
          <span className="font-semibold">Book on WhatsApp</span>
        </div>
      </a>
    </div>
  );
}

export default App;
