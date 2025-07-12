import './index.css';
import logo from './assets/logo.png';
import banner from './assets/banner.jpg';

function App() {
  return (
    <div className="bg-[#FFF8ED] text-black font-sans min-h-screen">
      <header className="text-center py-6 bg-[#FFF8ED] shadow-md">
        <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
      </header>
      <section className="text-center">
        <img src={banner} alt="Banner" className="w-full max-w-3xl mx-auto rounded-xl shadow-md" />
        <h1 className="text-4xl font-bold text-orange-500 mt-6">Professional Bin Cleaning</h1>
        <p className="text-lg mt-2 text-gray-700">Fresh, fast and eco-friendly bin cleaning you can rely on.</p>
        <a href="https://wa.me/447583847902?text=Hi%20Wheelie%20Clean%20Andy!%20I'd%20like%20to%20book%20a%20bin%20clean." target="_blank" className="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition">
          Book via WhatsApp
        </a>
      </section>
      <footer className="text-center py-4 text-sm text-gray-600 mt-10">
        © {new Date().getFullYear()} Wheelie Clean Andy
      </footer>
    </div>
  );
}

export default App;
