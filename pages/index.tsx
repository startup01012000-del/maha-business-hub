import { useState, useEffect } from 'react'
import Head from 'next/head'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Head>
        <title>MAHA-BUSINESS-HUB | महाराष्ट्राचे डिजिटल मार्केटप्लेस</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Modern Header */}
      <header className="bg-blue-800 text-white p-4 shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black italic tracking-tighter">MAHA-BUSINESS-HUB</h1>
          <button className="bg-orange-500 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-orange-600 transition">नोंदणी करा</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-20 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">महाराष्ट्राचा आपला डिजिटल प्लॅटफॉर्म!</h2>
        <p className="text-xl mb-10 opacity-90 font-medium">बिझनेस डिरेक्टरी • मार्केटप्लेस • नोकरी • प्रॉपर्टी</p>
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 flex shadow-2xl overflow-hidden">
          <input type="text" placeholder="हॉटेल, डॉक्टर किंवा सेवा शोधा..." className="w-full p-4 text-gray-800 outline-none text-lg" />
          <button className="bg-orange-500 px-10 rounded-xl font-bold text-lg hover:bg-orange-600 transition">शोध घ्या</button>
        </div>
      </section>

      {/* Categories Grid */}
      <main className="max-w-7xl mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold mb-10 text-gray-800 border-l-8 border-orange-500 pl-4">प्रमुख विभाग</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {['Hotels', 'Medical', 'Auto/Taxi', 'Jobs', 'Marketplace', 'Real Estate'].map((item) => (
            <div key={item} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">📁</div>
              <p className="font-bold text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center border-t border-gray-800">
        <p className="text-lg font-medium text-white mb-2">MAHA-BUSINESS-HUB</p>
        <p>© 2026 सर्व हक्क राखीव. Made with ❤️ for Maharashtra.</p>
      </footer>
    </div>
  )
}
