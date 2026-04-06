"use client";
import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-emerald-400 pb-20">
      {/* Navigation */}
      <nav className="p-6 border-b-4 border-slate-900 sticky top-0 bg-white z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 font-black text-xl tracking-tighter hover:text-emerald-500 transition-colors">
            <ArrowLeft className="w-6 h-6" />
            Back to Overview
          </a>
          <div className="bg-slate-900 text-white px-4 py-2 font-black text-xs uppercase tracking-widest border-2 border-slate-900">
            April Cohort Application
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6 bg-slate-50 border-b-4 border-slate-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.85]">
            Accept the <br/>
            <span className="bg-slate-900 text-emerald-400 px-4 inline-block">Challenge.</span>
          </h1>
          <p className="text-xl text-slate-600 font-bold leading-relaxed mb-8">
            Complete the form below to apply for the April Cohort. We limit each intake to 10 participants to ensure maximum focus and results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-2 font-black text-sm uppercase">
               <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 60-Day Execution
             </div>
             <div className="flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-2 font-black text-sm uppercase">
               <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Weekly Coaching
             </div>
             <div className="flex items-center gap-2 bg-white border-2 border-slate-900 px-4 py-2 font-black text-sm uppercase">
               <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Acafo Pro Access
             </div>
          </div>
        </div>
      </section>

      {/* Google Form Embed */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="border-8 border-slate-900 shadow-[16px_16px_0_0_#34d399] bg-white min-h-[1200px] relative overflow-hidden">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdbbhCQBGMZgYbqckePeAyWnxS9itilZOeQ-tomxsiKvMf5gg/viewform?embedded=true" 
            width="100%" 
            height="2447" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="Acafo Challenge Application"
            className="w-full min-h-[1200px]"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/* Footer Info */}
      <section className="mt-12 px-6 text-center">
         <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">
           All data is securely processed via Tally. Expect a response within 48 hours.
         </p>
      </section>
    </main>
  );
}
