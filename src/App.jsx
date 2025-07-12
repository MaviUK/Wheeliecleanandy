
import './index.css';
import banner from './assets/banner.jpg';

function App() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      <header className="bg-white shadow-md">
        <img src={banner} alt="Banner" className="w-full max-h-80 object-cover rounded-b-lg" />
      </header>

      <section className="text-center py-10 px-4">
        <h1 className="text-4xl font-extrabold text-orange-600">Bin Cleaning with a Smile!</h1>
        <p className="mt-2 text-gray-700 text-lg max-w-xl mx-auto">
          Keeping your bins fresh, clean, and pest-free – fast and friendly service from Wheelie Clean Andy!
        </p>
        <a href="#booking" className="mt-6 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold transition-all">
          Book Now
        </a>
      </section>

      <section className="py-10 bg-white px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { title: "Green Bin", desc: "Eco-friendly cleaning for food and garden waste bins." },
            { title: "Black Bin", desc: "Deep cleans and odor removal for your general waste." },
            { title: "Blue Bin", desc: "Keep your recycling fresh and bug-free!" },
          ].map((s, i) => (
            <div key={i} className="bg-orange-100 p-6 rounded-xl max-w-xs shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-orange-700">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500 bg-orange-50">
        &copy; {new Date().getFullYear()} Wheelie Clean Andy — All rights reserved.
      </footer>
    </div>
  );
}

export default App;
