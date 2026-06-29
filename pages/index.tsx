import Head from 'next/head'

export default function Home() {
  const categories = [
    { name: 'Hotels', icon: '🏨' }, { name: 'Medical', icon: '🏥' },
    { name: 'Auto/Taxi', icon: '🚖' }, { name: 'Jobs', icon: '💼' },
    { name: 'Real Estate', icon: '🏠' }, { name: 'Marketplace', icon: '🛒' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Head>
        <title>MAHA-BUSINESS-HUB | महाराष्ट्राचे डिजिटल मार्केटप्लेस</title>
      </Head>

      {/* Header */}
      <header className="bg-blue-700 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">MAHA-BUSINESS-HUB</h1>
          <button className="bg-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">Register Business</button>
        </div>
      </header>

      {/* Hero & Search */}
      <section className="bg-blue-600 py-16 px-4 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">महाराष्ट्रातील प्रत्येक व्यवसाय आता ऑनलाईन!</h2>
        <div className="max-w-2xl mx-auto flex shadow-2xl rounded-lg overflow-hidden">
          <input type="text" placeholder="व्यवसाय किंवा सेवा शोधा... (उदा. हॉटेल, डॉक्टर)" className="w-full p-4 text-gray-800 outline-none" />
          <button className="bg-orange-500 px-8 font-bold hover:bg-orange-600">Search</button>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h3 className="text-2xl font-bold mb-8 border-b-2 border-orange-500 inline-block">प्रमुख विभाग (Categories)</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer text-center group border border-gray-100">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <p className="font-bold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* Feature Sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-2">Marketplace</h4>
            <p className="mb-4 opacity-90">तुमची उत्पादने थेट हजारो ग्राहकांना विका.</p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-bold">Explore Store</button>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-2xl text-white">
            <h4 className="text-2xl font-bold mb-2">QR Ecosystem</h4>
            <p className="mb-4 opacity-90">दुकानासाठी हाय-टेक स्मार्ट QR कोड मिळवा.</p>
            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-bold">Get My QR</button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-10 px-4 text-center mt-20">
        <p className="mb-2">© 2026 MAHA-BUSINESS-HUB. All Rights Reserved.</p>
        <p className="text-sm">Made for local businesses of Maharashtra.</p>
      </footer>
    </div>
  )
}
