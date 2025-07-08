
import { Button } from "../components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WheelieCleanAndy() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="min-h-screen bg-[#fffef6] text-black font-sans">
      <header className="w-full bg-white shadow p-4 flex items-center justify-center">
        <Image
          src="/1000014358.jpg"
          alt="Wheelie Clean Andy Banner"
          width={800}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </header>

      <main className="max-w-4xl mx-auto p-6 text-center">
        <Image
          src="/1000014359.jpg"
          alt="Wheelie Clean Andy Logo"
          width={300}
          height={300}
          className="mx-auto my-8"
        />
        <h1 className="text-4xl font-bold mb-4">Liverpool's Premier Bin Cleaning Service</h1>
        <p className="text-lg mb-6">
          Professional, friendly, and spotless. Keeping Liverpool's bins fresh one spray at a time.
        </p>

        <Button
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-xl rounded-full"
          onClick={() => setShowBooking(true)}
        >
          Book via WhatsApp
        </Button>

        {showBooking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <a
              href="https://wa.me/447583847902"
              target="_blank"
              className="inline-block bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg"
              rel="noopener noreferrer"
            >
              Message Andy on WhatsApp
            </a>
          </motion.div>
        )}

        <section className="mt-16 text-left">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-3 text-lg">
            <li>✅ Regular & one-off bin cleaning</li>
            <li>✅ Domestic & commercial services</li>
            <li>✅ Eco-friendly detergents</li>
            <li>✅ Disinfect & deodorize included</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">What Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-4 rounded-xl shadow">
              "Brilliant job every time. Andy always shows up with a smile!" – Sarah T.
            </blockquote>
            <blockquote className="bg-white p-4 rounded-xl shadow">
              "Best bin cleaning service in Liverpool. Wouldn't use anyone else!" – James M.
            </blockquote>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">Service Area</h2>
          <p>We cover all of Liverpool and surrounding areas. Get in touch to check availability.</p>
        </section>
      </main>

      <footer className="text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Wheelie Clean Andy. All rights reserved.
      </footer>
    </div>
  );
}
