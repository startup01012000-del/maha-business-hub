"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Building, ShoppingCart, QrCode, ShieldCheck, ChevronRight } from 'lucide-react';

export default function EnterpriseDashboard() {
  const stats = [
    { label: "Registered Businesses", value: "10M+", icon: <Building className="w-6 h-6 text-yellow-500" /> },
    { label: "Active Users", value: "50M+", icon: <ShieldCheck className="w-6 h-6 text-teal-500" /> },
    { label: "Categories", value: "Unlimited", icon: <ChevronRight className="w-6 h-6 text-purple-500" /> },
  ];

  return (
    <div className="min-h-screen bg-[#021526] text-white font-sans selection:bg-teal-500">
      {/* Mor Pisara Navigation */}
      <nav className="bg-gradient-to-r from-[#008080] via-[#1E3A8A] to-[#6B21A8] p-4 sticky top-0 z-50 shadow-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-black italic tracking-tighter text-white flex items-center gap-2"
          >
            MAHA BUSINESS HUB <span className="text-[10px] bg-yellow-500 text-black px-2 py-0.5 rounded-full not-italic">ENTERPRISE</span>
          </motion.h1>
          <div className="hidden md:flex space-x-8 font-semibold uppercase text-sm tracking-widest">
            <a href="#" className="hover:text-yellow-400 transition">Marketplace</a>
            <a href="#" className="hover:text-yellow-400 transition">QR Ecosystem</a>
            <a href="#" className="hover:text-yellow-400 transition">Jobs</a>
            <a href="#" className="hover:text-yellow-400 transition">Property</a>
          </div>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold shadow-xl hover:bg-yellow-500 transition-all">SUPER ADMIN</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-4 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-yellow-400 to-purple-500 uppercase">
              Maharashtra's Largest <br/> Digital Ecosystem
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              High-Tech Enterprise solution for 10 Million+ Businesses.
            </p>
          </motion.div>

          {/* AI Search */}
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl p-3 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center bg-white/10 rounded-2xl px-4">
                <Search className="text-teal-400 w-6 h-6 mr-2" />
                <input type="text" placeholder="AI Search: Find any business..." className="bg-transparent w-full p-4 outline-none text-white text-lg" />
              </div>
              <button className="bg-teal-600 hover:bg-teal-500 px-10 py-4 rounded-2xl font-black text-lg transition-all">Explore</button>
            </div>
          </div>
        </div>
      </header>

      {/* Modules */}
      <main className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Marketplace", icon: <ShoppingCart />, desc: "0% Commission Direct Selling" },
          { title: "QR Ecosystem", icon: <QrCode />, desc: "Medical, Vehicle & Business QR" },
          { title: "Job Portal", icon: <Briefcase />, desc: "AI Matching Resume Builder" },
          { title: "Property Hub", icon: <Building />, desc: "Map-based Property Search" }
        ].map((mod, i) => (
          <div key={i} className="p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all cursor-pointer">
            <div className="text-teal-400 mb-6">{React.cloneElement(mod.icon as React.ReactElement, { size: 32 })}</div>
            <h4 className="text-xl font-bold mb-2">{mod.title}</h4>
            <p className="text-gray-500 text-sm">{mod.desc}</p>
          </div>
        ))}
      </main>

      <footer className="bg-black py-10 text-center border-t border-white/5">
        <p className="text-gray-600 italic">Empowering Maharashtra's Future.</p>
      </footer>
    </div>
  );
}
