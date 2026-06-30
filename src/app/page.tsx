"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ShoppingCart, QrCode, Briefcase, Building, ShieldCheck, ChevronRight, Menu, User } from 'lucide-react';

export default function MahaBusinessHub() {
  const [activeTab, setActiveTab] = useState('Directory');

  return (
    <div className="min-h-screen bg-[#021526] text-white font-sans selection:bg-teal-500">
      {/* Mor Pisara Gradient Nav */}
      <nav className="bg-gradient-to-r from-[#008080] via-[#1E3A8A] to-[#6B21A8] p-4 sticky top-0 z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter flex items-center gap-2">
            MAHA BUSINESS HUB <span className="text-[10px] bg-[#D4AF37] text-black px-2 py-0.5 rounded-full not-italic font-bold">PRO</span>
          </h1>
          <div className="hidden lg:flex space-x-8 font-bold uppercase text-xs tracking-[0.2em]">
            <button onClick={() => setActiveTab('Marketplace')} className="hover:text-[#D4AF37] transition">Marketplace</button>
            <button onClick={() => setActiveTab('QR')} className="hover:text-[#D4AF37] transition">QR System</button>
            <button onClick={() => setActiveTab('Jobs')} className="hover:text-[#D4AF37] transition">Jobs</button>
            <button onClick={() => setActiveTab('Property')} className="hover:text-[#D4AF37] transition">Property</button>
          </div>
          <div className="flex gap-4">
            <button className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"><User className="w-5 h-5" /></button>
            <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-full font-black text-sm shadow-xl hover:scale-105 transition-all uppercase">Super Admin</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-40 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-[#D4AF37] to-purple-500 uppercase italic">
            Maharashtra's <br/> Digital Empire
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light tracking-wide">
            The world's first AI-Powered Enterprise Ecosystem for 10 Crore+ Citizens.
          </p>
        </motion.div>

        {/* AI Mega Search */}
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl p-4 rounded-[35px] border border-white/20 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center bg-black/40 rounded-2xl px-5 border border-white/5">
              <Search className="text-teal-400 w-6 h-6 mr-3" />
              <input type="text" placeholder="AI Search: Find products, services or businesses..." className="bg-transparent w-full p-5 outline-none text-white text-lg placeholder:text-gray-600" />
            </div>
            <div className="md:w-1/4 flex items-center bg-black/40 rounded-2xl px-5 border border-white/5">
              <MapPin className="text-[#D4AF37] w-6 h-6 mr-3" />
              <select className="bg-transparent w-full p-5 outline-none text-white appearance-none text-lg">
                <option className="bg-black">All Maharashtra</option>
                <option className="bg-black">Pune</option>
                <option className="bg-black">Mumbai</option>
              </select>
            </div>
            <button className="bg-gradient-to-r from-teal-600 to-blue-700 hover:from-teal-500 hover:to-blue-600 px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-lg active:scale-95 uppercase">Explore</button>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto -mt-20 relative z-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Total Businesses", val: "10M+", col: "text-teal-400" },
          { label: "Daily Transactions", val: "₹500Cr+", col: "text-[#D4AF37]" },
          { label: "Active Users", val: "50M+", col: "text-purple-400" }
        ].map((s, i) => (
          <div key={i} className="bg-[#0A1F30] p-10 rounded-[40px] border border-white/10 text-center shadow-2xl">
            <div className={`text-5xl font-black mb-2 ${s.col}`}>{s.val}</div>
            <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">{s.label}</div>
          </div>
        ))}
      </section>

      {/* High-Tech Modules */}
      <main className="max-w-7xl mx-auto py-32 px-4">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-4xl font-black uppercase italic tracking-tighter">Enterprise Modules</h3>
          <div className="hidden md:block h-px flex-1 mx-10 bg-white/10"></div>
          <span className="text-[#D4AF37] font-black uppercase text-sm tracking-widest">Next-Gen Tech</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { t: "Marketplace", i: <ShoppingCart />, d: "Advanced Seller Panel & 0% Commission Store." },
            { t: "QR Ecosystem", i: <QrCode />, d: "Smart Vehicle, Medical & Business QR Solutions." },
            { t: "Job Portal", i: <Briefcase />, d: "AI-Powered Job Matching & Resume Builder." },
            { t: "Property Hub", i: <Building />, d: "Interactive Map-Based Real Estate Search." }
          ].map((m, idx) => (
            <motion.div key={idx} whileHover={{ y: -15 }} className="bg-gradient-to-br from-white/10 to-transparent p-10 rounded-[50px] border border-white/10 hover:border-teal-500/50 transition-all cursor-pointer group">
              <div className="bg-teal-500/20 p-6 rounded-3xl w-fit mb-8 text-teal-400 group-hover:scale-110 transition-transform">
                {React.cloneElement(m.i as React.ReactElement, { size: 35 })}
              </div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-teal-400 transition italic uppercase">{m.t}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{m.d}</p>
              <div className="mt-8 flex items-center text-[#D4AF37] font-black text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                OPEN MODULE <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-xl py-20 px-4 border-t border-white/10 text-center">
        <h2 className="text-4xl font-black mb-10 italic">MAHA BUSINESS HUB</h2>
        <div className="flex flex-wrap justify-center gap-12 text-gray-500 font-black uppercase text-xs tracking-widest mb-12">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Security</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
        <p className="text-gray-700 font-bold italic">Building the Future of Maharashtra, Together.</p>
      </footer>
    </div>
  );
}
