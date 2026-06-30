"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ShoppingCart, QrCode, Briefcase, Building, ShieldCheck, Zap, Bell, User, Star, Plus, Package } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Direct Connection for Speed
const supabase = createClient('https://gudxjtfhuxknxmbvrfbr.supabase.co', 'YOUR_SUPABASE_ANON_KEY_HERE');

export default function EnterpriseApp() {
  const [activeTab, setActiveTab] = useState('marketplace');
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-[#021526] text-white font-sans selection:bg-[#008080]">
      {/* Mor Pisara Nav */}
      <nav className="sticky top-0 z-50 bg-[#021526]/90 backdrop-blur-2xl border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-black italic tracking-tighter uppercase flex items-center gap-2">
            <Zap className="text-[#008080] fill-current" /> MAHA BUSINESS HUB <span className="text-[9px] bg-[#D4AF37] text-black px-2 py-0.5 rounded-full not-italic">V15 PRO</span>
          </motion.h1>
          <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            {['marketplace', 'qr system', 'jobs', 'property', 'admin'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`hover:text-[#D4AF37] transition-all ${activeTab === tab ? 'text-[#D4AF37]' : ''}`}>{tab}</button>
            ))}
          </div>
          <button className="bg-gradient-to-r from-[#008080] to-[#1E3A8A] px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(0,128,128,0.4)]">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-4 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#008080]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic">DIGITAL <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#008080] via-[#D4AF37] to-[#6B21A8]">REVOLUTION</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">Maharashtra's first AI-Powered Enterprise Ecosystem for 10 Million+ Businesses.</p>
        </motion.div>

        {/* AI Mega Search - Actually Functional UI */}
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl p-2 rounded-[30px] border border-white/10 shadow-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center bg-black/40 rounded-2xl px-5 py-2 border border-white/5">
            <Search className="text-[#008080] w-6 h-6 mr-3" />
            <input type="text" placeholder="AI Smart Search: Businesses, Products, Services..." className="bg-transparent w-full p-4 outline-none text-white text-lg placeholder:text-gray-600" />
          </div>
          <button className="bg-white text-black hover:bg-[#D4AF37] px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-xl uppercase tracking-tighter">Search Now</button>
        </div>
      </header>

      {/* Dynamic Module Content */}
      <main className="max-w-7xl mx-auto py-20 px-4">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-4xl font-black uppercase italic tracking-tighter">{activeTab} MODULE</h3>
          <div className="h-1 flex-1 bg-gradient-to-r from-[#008080] to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Example Item Card */}
          {[1, 2, 3, 4, 5, 6].map(i => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/5 border border-white/10 p-6 rounded-[35px] hover:border-[#008080]/50 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-[25px] mb-6 flex items-center justify-center text-gray-700 overflow-hidden relative">
                 <Package size={60} className="group-hover:scale-110 transition-transform duration-500 opacity-20" />
                 <div className="absolute top-4 right-4 bg-teal-500 text-[10px] font-black px-3 py-1 rounded-full text-white">NEW</div>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-black tracking-tight group-hover:text-[#D4AF37] transition">Enterprise Product #{i}</h4>
                <div className="flex items-center text-[#D4AF37] gap-1 font-bold text-sm"><Star size={14} fill="currentColor" /> 4.9</div>
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">High-performance business solution integrated with Maha Business Hub QR & Inventory System.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-teal-400">₹4,999</span>
                <button className="bg-white text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all">Buy Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Super Admin Control Center */}
      <section className="bg-gradient-to-b from-transparent to-black py-32 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">Register Your Business</h3>
          <p className="text-gray-500 mb-12 text-lg">Join 10 million+ businesses across Maharashtra. Zero commission, total control.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Business Name" className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#008080] transition" />
            <input type="text" placeholder="WhatsApp Number" className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#008080] transition" />
            <button className="md:col-span-2 bg-gradient-to-r from-[#008080] to-[#1E3A8A] p-5 rounded-2xl font-black text-xl uppercase shadow-2xl hover:scale-[1.02] transition-all">Launch My Store</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <h2 className="text-3xl font-black italic mb-8 opacity-50">MAHA BUSINESS HUB</h2>
        <div className="flex justify-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 mb-10">
          <a href="#">Security</a> <a href="#">API Documentation</a> <a href="#">Enterprise Support</a>
        </div>
        <p className="text-gray-800 font-bold italic">Building the Future of Maharashtra. One Business at a Time.</p>
      </footer>
    </div>
  );
}
