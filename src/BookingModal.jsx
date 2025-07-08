import { useState } from 'react';

function BookingModal({ onClose }) {
  const [name, setName] = useState('');
  const [bins, setBins] = useState([{ type: 'Green', count: 1 }]);
  const [frequency, setFrequency] = useState('One-off');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleAddBin = () => {
    setBins([...bins, { type: 'Green', count: 1 }]);
  };

  const handleBinChange = (index, field, value) => {
    const newBins = [...bins];
    newBins[index][field] = field === 'count' ? parseInt(value) : value;
    setBins(newBins);
  };

  const handleSend = () => {
    const binDetails = bins.map(b => `${b.type} x${b.count}`).join(', ');
    const message = `Hi Wheelie Clean Andy! I'd like to book a bin clean.

Name: ${name}
Bins: ${binDetails}
Frequency: ${frequency}
Address: ${address}
Email: ${email}`;

    const phone = "447583847902";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Book a Bin Clean</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
        </div>
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 mb-2 border rounded" />

        {bins.map((bin, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <select
              value={bin.type}
              onChange={e => handleBinChange(idx, 'type', e.target.value)}
              className="w-2/3 p-2 border rounded"
            >
              <option>Green</option>
              <option>Black</option>
              <option>Blue</option>
            </select>
            <input
              type="number"
              min="1"
              value={bin.count}
              onChange={e => handleBinChange(idx, 'count', e.target.value)}
              className="w-1/3 p-2 border rounded"
            />
          </div>
        ))}

        <button onClick={handleAddBin} className="text-green-600 text-sm mb-2">+ Add Another Bin</button>

        <select value={frequency} onChange={e => setFrequency(e.target.value)} className="w-full p-2 mb-2 border rounded">
          <option>One-off</option>
          <option>Monthly</option>
          <option>Bi-weekly</option>
        </select>
        <input type="text" placeholder="Full Address" value={address} onChange={e => setAddress(e.target.value)} className="w-full p-2 mb-2 border rounded" />
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
        <button onClick={handleSend} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full">
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
}

export default BookingModal;