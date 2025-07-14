import React, { useState } from 'react'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [bins, setBins] = useState([{ type: '', quantity: 1, frequency: '' }])

  const addBin = () => {
    setBins([...bins, { type: '', quantity: 1, frequency: '' }])
  }

  const handleBinChange = (index, field, value) => {
    const updatedBins = [...bins]
    updatedBins[index][field] = value
    setBins(updatedBins)
  }

  return (
    <div className="text-center font-sans">
      {/* Menu + Sections here... (omitted for brevity) */}

      {/* Book Now Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Book a Bin Clean</h2>
              <button onClick={() => setShowModal(false)} className="text-black text-2xl">×</button>
            </div>

            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded text-black" />

              {bins.map((bin, index) => (
                <div key={index} className="flex flex-col space-y-2 border p-2 rounded">
                  <select
                    value={bin.type}
                    onChange={(e) => handleBinChange(index, 'type', e.target.value)}
                    className="p-2 border rounded text-black"
                  >
                    <option value="">Select Bin</option>
                    <option value="Black">Black</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                  </select>

                  <input
                    type="number"
                    min="1"
                    value={bin.quantity}
                    onChange={(e) => handleBinChange(index, 'quantity', e.target.value)}
                    className="p-2 border rounded text-black"
                    placeholder="Quantity"
                  />

                  <select
                    value={bin.frequency}
                    onChange={(e) => handleBinChange(index, 'frequency', e.target.value)}
                    className="p-2 border rounded text-black"
                  >
                    <option value="">Select Frequency</option>
                    <option value="One-off">One-off</option>
                    <option value="4 Weekly">4 Weekly</option>
                  </select>
                </div>
              ))}

              <button type="button" onClick={addBin} className="text-green-600 underline text-sm">
                + Add Another Bin
              </button>

              <input type="text" placeholder="Full Address" className="w-full p-2 border rounded text-black" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border rounded text-black" />

              <button type="button" className="w-full bg-green-500 text-black py-2 rounded hover:bg-green-600">
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
