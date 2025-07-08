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
    </div>
  );
}

export default App;
