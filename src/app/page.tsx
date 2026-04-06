"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, ChevronRight, Target, FileText, Layout, Presentation, Users, Clock, Zap, Flame } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-slate-900 selection:text-emerald-400">
      <HeroSection />
      <ProblemSection />
      <CoachSection />
      <SolutionSection />
      <WhatYouGetSection />
      <TestimonialSection />
      <WhoItsForSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-4 border-slate-900 md:hidden z-50 flex justify-center shadow-2xl">
        <a href="#apply" className="w-full max-w-sm flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 font-black tracking-wider hover:bg-slate-800 transition-colors shadow-[4px_4px_0_0_#34d399]">
          Accept the Challenge <ArrowRight className="w-5 h-5 text-emerald-400" />
        </a>
      </div>
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 pb-32 md:pt-40 md:pb-40 px-6 overflow-hidden bg-white border-b-4 border-slate-900 text-center flex flex-col items-center">
      {/* Background massive text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex -translate-y-[20%] justify-center opacity-[0.03] pointer-events-none z-0">
        <span className="text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter">60 DAYS. 60 DAYS.</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400 text-slate-900 text-xs font-black tracking-widest mb-10 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
          <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
          Cohort 01 • 10 Spots Only
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.9] mb-10">
          Land a Job in Korea in <br/>
          <span className="text-transparent inline-block pb-2 bg-clip-text bg-gradient-to-r from-slate-900 to-slate-900 border-b-8 border-emerald-400" style={{ WebkitTextStroke: '2px #0f172a', textShadow: '4px 4px 0px #34d399' }}>60 Days.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl font-bold tracking-wide leading-relaxed border-l-4 border-r-4 border-slate-900 px-6 bg-slate-50 py-6 mx-auto">
          No excuses. I've designed a rigorous 60-day execution program for foreigners serious about getting hired. I will be your personal coach, guiding you every single step of the way.
        </p>
        
        <div className="flex items-center justify-center gap-3 mb-10 bg-slate-900 text-white p-4 border-2 border-slate-900 shadow-[4px_4px_0_0_#34d399] w-max mx-auto">
          <span className="font-black text-xs tracking-widest text-emerald-400">Powered by</span>
          <span className="text-2xl font-black tracking-widest text-white">Acafo</span>
        </div>
        
        <div className="flex flex-col items-center gap-4 mt-4 w-full md:w-auto">
          <a href="#apply" className="w-full md:w-auto flex items-center justify-center gap-4 bg-emerald-400 text-slate-900 px-12 py-6 font-black tracking-widest text-2xl transition-all hover:translate-x-1 hover:translate-y-1 border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] hover:shadow-[4px_4px_0_0_#0f172a] uppercase">
            Accept the Challenge <ArrowRight className="w-8 h-8 text-slate-900" />
          </a>
          <CountdownBlock />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 bg-slate-50 px-6 border-b-4 border-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-4">
            The Hard Truth.
          </h2>
          <div className="w-32 h-4 bg-emerald-400 border-2 border-slate-900"></div>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6 mb-16">
          {[
            "Applying endlessly on Saramin and JobKorea and hearing absolutely nothing back.",
            "Missing the unwritten rules of what Korean recruiters actually expect in a resume.",
            "Having top-tier skills but failing to position them correctly for the local market."
          ].map((problem, i) => (
            <div key={i} className="flex items-center gap-6 p-6 md:p-8 bg-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] transform transition-transform hover:-translate-x-2">
              <div className="text-5xl md:text-6xl font-black text-slate-200">
                0{i + 1}
              </div>
              <p className="text-lg md:text-xl font-bold text-slate-800 leading-snug tracking-wide">{problem}</p>
            </div>
          ))}
        </div>
        
        <div className="p-8 md:p-12 bg-slate-900 border-4 border-slate-900 shadow-[12px_12px_0_0_#34d399] relative transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full border border-slate-900"></div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full border border-slate-900"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full border border-slate-900"></div>
          </div>
          <p className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter mt-4">
            Your skills <span className="text-slate-600 line-through decoration-red-500 decoration-4">are not the problem.</span><br />
            <span className="text-emerald-400 mt-2 block bg-slate-800 p-2 border-l-4 border-emerald-400">It's your misalignment.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function CoachSection() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white border-b-4 border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 w-full max-w-sm relative self-center">
          <div className="aspect-[3/4] border-4 border-slate-900 shadow-[12px_12px_0_0_#34d399] relative overflow-hidden bg-white">
            <Image 
              src="/profile 2.png" 
              alt="Program Coach" 
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-emerald-400 p-4 border-4 border-slate-900 text-slate-900 shadow-[8px_8px_0_0_#0f172a] text-center">
            <p className="font-black text-2xl mb-1">10+ Years</p>
            <p className="font-bold tracking-widest uppercase text-xs">In Korea</p>
          </div>
        </div>
        
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">
              The Story Behind This Challenge
            </h2>
            <p className="text-xl md:text-2xl font-bold text-emerald-400 tracking-wide italic">
              Why I’m here to stop your struggle.
            </p>
          </div>
          
          <div className="space-y-6 text-lg text-slate-300 font-medium leading-relaxed">
            <p>
              I’ve spent over 10 years in Korea as a student, job seeker, recruiter, office worker, model, and now entrepreneur, giving me a full understanding of how hiring really works here.
            </p>
            <p className="border-l-4 border-emerald-400 pl-4 text-white font-bold bg-slate-800/30 p-4 -ml-4 rounded-r-lg">
              When I first graduated in environmental science, I struggled for over a year to get my first job because my profile didn't align with what the local market was looking for.
            </p>
            <p>
              Everything changed when I shifted my approach and aligned my skills with actual market demand, not just my academic background, which led me to secure my first role in overseas sales.
            </p>
            <p className="py-4 text-white">
              I know exactly how it feels to struggle while looking for a job in Korea as a foreigner—the silence, the frustration, and the feeling that you're hitting a wall every day. That is why I built <span className="text-emerald-400 font-black tracking-wider uppercase">Acafo</span>. Since then, I’ve conducted 300+ sessions and analyzed 5,000+ job postings to refine the shortcut I wish I had when I started.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 border-t-2 border-slate-700 pt-8">
            <div className="border-2 border-slate-700 bg-slate-800 p-4 transform hover:-translate-y-1 transition-transform">
              <span className="block text-2xl font-black text-emerald-400">300+</span>
              <span className="text-xs uppercase tracking-widest font-bold mt-1 block">Sessions</span>
            </div>
            <div className="border-2 border-slate-700 bg-slate-800 p-4 transform hover:-translate-y-1 transition-transform">
              <span className="block text-2xl font-black text-emerald-400">5,000+</span>
              <span className="text-xs uppercase tracking-widest font-bold mt-1 block">Jobs Analyzed</span>
            </div>
            <div className="border-2 border-slate-700 bg-emerald-400 text-slate-900 p-4 transform md:col-span-1 col-span-2 shadow-[4px_4px_0_0_#0f172a] hover:shadow-[2px_2px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 transition-all">
              <span className="block text-lg font-black uppercase">Speaker</span>
              <span className="text-xs uppercase font-bold tracking-wider mt-1 block">Job Fairs & Unis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const weeks = [
    { wk: "Week 1", title: "Clarity & Direction", desc: "Extract your real skills and understand what you truly bring to the market.", outcome: "You know exactly what jobs you should target and why." },
    { wk: "Week 2", title: "Positioning & Strategy", desc: "Align your experience with market demand and define your job search strategy.", outcome: "You know how to present your value clearly to recruiters." },
    { wk: "Week 3", title: "Resume Creation", desc: "Build a strong, Korean-market-ready resume aligned with your target roles.", outcome: "You have a resume that reflects your real value." },
    { wk: "Week 4", title: "Resume Optimization", desc: "Analyze and improve your resume to increase your chances of passing recruiter screening.", outcome: "Your resume is polished and interview-ready." },
    { wk: "Week 5", title: "Job Matching & Applications", desc: "Apply using a focused, one-job-at-a-time system that removes overwhelm and increases consistency.", outcome: "You apply with clarity and confidence instead of guessing." },
    { wk: "Week 6–8", title: "Execution & Results", desc: "Continue applying, improve based on feedback, and refine your strategy with guidance.", outcome: "You start getting interviews and move closer to job offers." }
  ];

  return (
    <section className="py-24 px-6 relative bg-white border-b-4 border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="relative order-2 lg:order-1">
            <div className="border-4 border-slate-900 bg-white p-8 md:p-10 shadow-[12px_12px_0_0_#0f172a] relative flex flex-col font-mono font-bold text-slate-800 h-full">
                <div className="flex justify-between border-b-4 border-slate-900 pb-4 mb-6 text-lg tracking-wide uppercase">
                  <span className="text-slate-500">Timeline</span>
                  <span className="text-slate-900">Curriculum Snapshot</span>
                </div>
                <div className="space-y-8 flex-1 text-sm md:text-base">
                  {weeks.map((item, i) => (
                    <div key={i} className={`flex flex-col p-5 border-2 transition-all ${i === weeks.length - 1 ? 'bg-slate-900 border-slate-900 shadow-[4px_4px_0_0_#34d399]' : 'bg-slate-50 border-slate-200 hover:border-slate-900'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 font-black text-xs uppercase ${i === weeks.length - 1 ? 'bg-white text-slate-900' : 'bg-emerald-400 text-slate-900 shadow-[2px_2px_0_0_#0f172a]'}`}>
                          {item.wk}
                        </span>
                      </div>
                      <span className={`font-black text-lg ${i === weeks.length - 1 ? 'text-white' : 'text-slate-900'}`}>{item.title}</span>
                      <span className={`font-medium mt-1 mb-3 ${i === weeks.length - 1 ? 'text-slate-300' : 'text-slate-600'}`}>
                        {item.desc}
                      </span>
                      <div className={`mt-auto pt-3 border-t-2 border-dashed ${i === weeks.length - 1 ? 'border-slate-700' : 'border-slate-200'}`}>
                        <span className={`text-[10px] uppercase tracking-widest font-black block mb-1 ${i === weeks.length - 1 ? 'text-emerald-400' : 'text-slate-400'}`}>Outcome:</span>
                        <span className={`text-sm font-bold ${i === weeks.length - 1 ? 'text-white' : 'text-slate-900'}`}>{item.outcome}</span>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 lg:sticky lg:top-12">
            <div className="inline-block px-4 py-2 bg-slate-900 text-emerald-400 font-black tracking-widest text-sm mb-6 border-2 border-slate-900 shadow-[4px_4px_0_0_#34d399]">
              What happens week by week
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.85]">
              The 60-Day <br/>Process
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-2xl text-slate-900 font-black leading-tight">
                A structured path powered by Acafo to take you from confusion to interview-ready step by step.
              </p>
              <p className="text-lg text-slate-600 font-bold leading-relaxed border-l-4 border-emerald-400 pl-6 bg-slate-50 p-4 italic">
                &quot;This is not random effort. It is a structured system designed to move you forward every single week.&quot;
              </p>
            </div>
            
            <ul className="space-y-4 mb-12">
              {[
                "Targeted Market Alignment",
                "ATS-Ready Korean Resume",
                "Proven Application Funnel",
                "Recursive Interview Drills"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-900 font-black text-lg tracking-wide">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-900 text-emerald-400 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-6 border-t-8 border-slate-50 pt-10">
              <a href="#apply" className="w-full md:w-auto text-center bg-slate-900 text-emerald-400 px-10 py-5 font-black text-xl tracking-widest uppercase hover:bg-slate-800 transition-all shadow-[8px_8px_0_0_#34d399] border-2 border-slate-900 active:translate-x-1 active:translate-y-1 active:shadow-none">
                Claim Your Spot <ArrowRight className="inline-block ml-2 w-6 h-6 text-emerald-400" />
              </a>
              <div className="flex flex-col items-start">
                <div className="flex text-emerald-500 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Flame key={i} className="w-4 h-4 fill-emerald-400" />
                  ))}
                </div>
                <p className="text-sm font-black text-slate-900 uppercase tracking-widest">
                  Cohort 1 • 10 Max
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  const items = [
    { title: "Weekly Coaching & Accountability", value: "₩300,000", desc: "Stay on track with weekly guidance, action reviews, and direct support so you do not lose momentum or waste time guessing what to do next." },
    { title: "Job Strategy & Positioning Framework", value: "₩200,000", desc: "Learn how to target the right roles, position your strengths properly, and stop applying randomly. This gives you a much clearer path to the kinds of jobs you can actually win." },
    { title: "Korean Market Ready Resume Support", value: "₩150,000", desc: "Turn your experiences into recruiter-friendly value and build a resume aligned with what employers in Korea actually expect to see." },
    { title: "Full Acafo Pro Platform Access", value: "₩100,000", desc: "Get full access to Acafo as a Pro member, including the tools that help you extract your skills, build stronger resumes, audit your profile, and match with better-fit opportunities." },
    { title: "One Job at a Time Clarity System", value: "₩70,000", desc: "Reduce anxiety and overwhelm with a focused system that helps you look at one relevant job at a time, so you can make better decisions without feeling mentally overloaded." },
    { title: "Application Execution System", value: "₩80,000", desc: "Follow a practical process for applying with more intention, tracking your efforts, and improving your consistency so your search becomes organized instead of chaotic." },
    { title: "Interview Readiness Support", value: "₩220,000", desc: "Prepare to present yourself with more confidence, communicate your value clearly, and handle interviews in a way that fits local hiring expectations." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white px-6 border-b-4 border-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
            What You Get Inside The Challenge
          </h2>
          <div className="w-32 h-4 bg-emerald-400 border-2 border-slate-900 mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-300 font-bold leading-relaxed">
            A complete guided system designed to make your job search clearer, stronger, and faster.
          </p>
          <p className="text-lg text-slate-400 mt-4 leading-relaxed font-medium">
            This is not just a few calls. You get structure, tools, accountability, and full access to the Acafo Pro platform so you can move from confusion to interview readiness with confidence.
          </p>
        </div>
        
        <div className="border-4 border-slate-700 bg-slate-800 flex flex-col mb-12 shadow-[12px_12px_0_0_#34d399]">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between p-6 md:p-8 border-b-4 border-slate-700 hover:bg-slate-700/50 transition-colors gap-4 md:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                </div>
                <p className="text-slate-300 font-medium mt-3 md:ml-9 leading-relaxed">{item.desc}</p>
              </div>
              <div className="md:text-right font-black text-xl text-emerald-400 tracking-wider pt-1 shrink-0 md:ml-0 ml-9">
                {item.value}
              </div>
            </div>
          ))}
          
          <div className="p-6 md:p-12 bg-slate-900 border-t-8 border-emerald-400 relative">
            <div className="text-right">
              <p className="text-lg text-slate-400 font-bold tracking-widest mb-2 uppercase">Total Value</p>
              <p className="text-4xl md:text-5xl font-black text-slate-500 line-through decoration-red-500 decoration-4">₩1,120,000</p>
            </div>
            
            <div className="my-10 border-l-4 border-emerald-400 pl-6">
              <p className="text-xl md:text-2xl text-white font-medium leading-relaxed font-bold">
                You are getting coaching, structure, tools, and a full platform experience designed to help you move faster with less confusion and more confidence.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t-2 border-slate-700 border-dashed">
              <div>
                <p className="text-emerald-400 font-black text-xl tracking-widest mb-2 uppercase">Today</p>
                <div className="text-6xl md:text-7xl font-black tracking-tighter text-white">₩300,000</div>
                <p className="font-bold text-slate-400 mt-2">For the full 60-Day Job Offer Challenge</p>
              </div>
              
              <a href="#apply" className="w-full md:w-auto text-center bg-emerald-400 text-slate-900 px-10 py-5 font-black text-xl tracking-widest uppercase hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a] transition-all border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a]">
                Join Now <ArrowRight className="inline-block w-6 h-6 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const proofs = [
    { title: "Portfolio Audit Success", src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80", tag: "Feedback" },
    { title: "Direct Interview Offer", src: "https://images.unsplash.com/photo-1551288049-bbbda546697c?w=800&q=80", tag: "Result" },
    { title: "Market Strategy Shift", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", tag: "Strategy" }
  ];

  return (
    <section className="py-24 px-6 bg-emerald-400 border-b-4 border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.8] mb-8">
            Proof of <br/><span className="bg-slate-900 text-white px-2 mt-2 inline-block">Execution.</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="font-black text-slate-900 tracking-widest text-lg border-l-4 border-slate-900 pl-4 uppercase">
              No theory. <br/>Just real-world proof from the field.
            </p>
            <div className="hidden md:block w-32 h-4 bg-slate-900 border-2 border-slate-900"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {proofs.map((p, i) => (
              <div key={i} className="group relative bg-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] hover:shadow-[12px_12px_0_0_#0f172a] hover:-translate-x-1 hover:-translate-y-1 transition-all overflow-hidden aspect-[4/3] flex flex-col">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-slate-900 text-emerald-400 px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-slate-900">
                    {p.tag}
                  </span>
                </div>
                <div className="flex-1 relative bg-slate-100 p-4 pt-12 flex items-center justify-center border-b-4 border-slate-900">
                  {/* Since we don't have the real screenshots yet, I'll use placeholders that look like UI artifacts */}
                  <div className="w-full h-full border-4 border-slate-900/10 flex flex-col items-center justify-center gap-4 bg-slate-50/50 relative overflow-hidden group-hover:bg-white transition-colors">
                     <div className="absolute top-0 right-0 w-8 h-8 bg-slate-300 transform rotate-45 translate-x-4 -translate-y-4 border-2 border-slate-900"></div>
                     <Image 
                      src={p.src}
                      alt={p.title}
                      fill
                      className="object-cover opacity-80 mix-blend-multiply group-hover:opacity-100 group-hover:mix-blend-normal transition-all"
                    />
                  </div>
                </div>
                <div className="bg-white p-4 font-black text-lg text-slate-900 flex justify-between items-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {p.title}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
            
            {/* The "Your Result Here" Card */}
            <div className="relative bg-slate-900 border-4 border-slate-900 shadow-[8px_8px_0_0_#34d399] p-8 flex flex-col justify-center items-center text-center group overflow-hidden">
               <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Flame className="w-48 h-48 text-white fill-white" />
               </div>
               <h3 className="text-3xl font-black text-white mb-4 relative z-10 leading-none">Your Success <br/> Story Here</h3>
               <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm relative z-10">Application Opening Soon</p>
            </div>
          </div>
        </div>
      </section>
    );
}

function WhoItsForSection() {
  return (
    <section className="py-24 px-6 relative bg-white border-b-4 border-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-16 text-center leading-none">
          Are You In?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-slate-900 text-white p-8 md:p-12 border-4 border-slate-900 shadow-[12px_12px_0_0_#34d399]">
            <div className="bg-emerald-400 text-slate-900 inline-block px-6 py-3 font-black text-xl tracking-widest uppercase mb-10">
              Accepted Profiles
            </div>
            <ul className="space-y-6">
              {[
                "Obsessed with getting hired",
                "Ready to execute weekly tasks",
                "Willing to be coached hard",
                "Committed to the 60 days"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-black text-lg md:text-xl tracking-wide">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-slate-50 text-slate-900 p-8 md:p-12 border-4 border-slate-900 opacity-75 sepia-[.2]">
            <div className="bg-slate-300 text-slate-900 inline-block px-6 py-3 font-black text-xl tracking-widest uppercase mb-10">
              Do Not Apply If
            </div>
            <ul className="space-y-6">
              {[
                "Looking for magic shortcuts",
                "Have excuses every week",
                "Passive learner (watcher)",
                "Not dead-serious about the market"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-black text-lg md:text-xl text-slate-500 tracking-wide line-through decoration-slate-400 decoration-4">
                  <XCircle className="w-8 h-8 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="apply" className="py-32 px-6 bg-slate-100 relative border-b-4 border-slate-900">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <div className="border-8 border-slate-900 bg-white p-8 md:p-16 max-w-2xl w-full shadow-[24px_24px_0_0_#3b82f6] relative">
          {/* Badge */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-max bg-slate-900 text-emerald-400 px-8 py-3 border-4 border-slate-900 text-lg font-black tracking-widest uppercase shadow-[6px_6px_0_0_#0f172a]">
            10 Spots Maximum
          </div>
          
          <div className="text-center mb-10 mt-8">
            <h2 className="text-2xl font-black text-slate-500 tracking-widest uppercase mb-4">
              The 60-Day Commitment
            </h2>
            <div className="text-7xl md:text-8xl font-black text-slate-900 tracking-tighter">
              ₩300K
            </div>
          </div>
          
          <div className="space-y-6 mb-12 border-t-8 border-slate-100 pt-10">
            <div className="flex items-center gap-4 font-black text-xl text-slate-900 leading-tight">
              <div className="bg-emerald-400 p-2 border-2 border-slate-900"><Zap className="w-6 h-6 text-slate-900 fill-slate-900" /></div>
              Full 60-day battle plan
            </div>
            <div className="flex items-center gap-4 font-black text-xl text-slate-900 leading-tight">
              <div className="bg-emerald-400 p-2 border-2 border-slate-900"><Users className="w-6 h-6 text-slate-900" /></div>
              Weekly coaching & drills
            </div>
            <div className="flex items-center gap-4 font-black text-xl text-slate-900 bg-slate-900 text-white p-4 border-4 border-slate-900 transform hover:scale-[1.02] transition-transform">
              <Target className="w-8 h-8 text-emerald-400" /> 
              <div>
                <div className="text-emerald-400 text-sm tracking-widest uppercase mb-1">Bonus included</div>
                1:1 strategy session
              </div>
            </div>
          </div>

          <div className="w-full bg-white border-4 border-slate-900 p-6 md:p-8 text-left mb-10 shadow-[8px_8px_0_0_#0f172a]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-emerald-400 text-slate-900 py-1 px-3 text-xs font-black uppercase tracking-widest border-2 border-slate-900">Guarantee</div>
              <h3 className="font-black text-xl uppercase tracking-widest text-slate-900 flex-1">The Action-Taker's Safety Net</h3>
            </div>
            <p className="font-bold text-slate-500 leading-relaxed text-sm md:text-base border-l-4 border-red-500 pl-4 mt-4">
              If you attend all weekly calls, execute every assigned strategy, and do not land a single interview within the 60 days, <span className="text-slate-900 bg-emerald-400 px-1 font-black shadow-[2px_2px_0_0_#0f172a]">I will continue coaching you for free</span> until you do. I take the risk, you put in the work.
            </p>
          </div>
          
          <button className="w-full bg-emerald-400 text-slate-900 py-6 font-black text-2xl tracking-widest uppercase border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a] transition-all">
            Submit Application
          </button>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Do I need to speak fluent Korean to join?", a: "No, but you need to be realistic. We optimize your profile for the language skills you DO have, targeting global companies or roles that specifically require English or native language skills. If you have TOPIK, we leverage it aggressively." },
    { q: "What if I don't get a job in 60 days?", a: "The goal is to build an unshakeable system. While we cannot guarantee a job (you have to put in the work and pass the interviews), you will leave with a perfect resume, a targeted application funnel, and interview readiness that puts you in the top 1% of foreign applicants." },
    { q: "How much time do I need to commit each week?", a: "Expect to spend at least 3-5 hours a week outside of our calls. This is an execution challenge—you will be rebuilding your resume, mapping the market, and mock interviewing. If you don't have the time to execute, do not apply." },
    { q: "Is this just for tech or engineers?", a: "No. The Acafo system and our positioning strategy work for marketing, sales, operational, and graduate roles. The mechanics of bypassing the local ATS and triggering recruiters are universal." },
    { q: "When do the weekly calls happen?", a: "Calls are scheduled based on the cohort's availability, usually on weekends or weekday evenings (KST) to accommodate people currently working or studying." }
  ];

  return (
    <section className="py-24 px-6 bg-white border-b-4 border-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-16 text-center leading-none">
          Common Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-4 border-slate-900 p-6 md:p-8 bg-slate-50 hover:bg-white transition-colors shadow-[8px_8px_0_0_#0f172a]">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex gap-4 items-start">
                <span className="text-emerald-400 shrink-0">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-lg text-slate-700 font-bold leading-relaxed ml-8 md:ml-10 border-l-4 border-slate-300 pl-4">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-32 px-6 bg-slate-900 text-center overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 flex items-center justify-center">
        <Flame className="w-[120vw] h-[120vw] text-emerald-400" />
      </div>
      <div className="relative z-10">
        <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-white mb-8 leading-[0.9]">
          No excuses.<br/>
          <span className="text-emerald-400" style={{ textShadow: '6px 6px 0px #0f172a' }}>Just offers.</span>
        </h2>
        <p className="text-2xl md:text-3xl text-slate-300 font-bold mb-16 tracking-wider">
          Cohort 01 is filling. Time is ticking.
        </p>
        
        <a href="#apply" className="inline-flex items-center justify-center gap-4 bg-white text-slate-900 px-12 py-8 font-black text-3xl tracking-widest uppercase border-4 border-slate-900 shadow-[12px_12px_0_0_#34d399] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#34d399] transition-all">
          Join Cohort 01 <ArrowRight className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
}

function CountdownBlock() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-04-15T09:00:00+09:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="h-24 mt-4 w-full opacity-0"></div>; // Prevent layout shift

  return (
    <div className="flex flex-col items-center mt-6 w-full max-w-lg mx-auto">
      <div className="bg-emerald-400 text-slate-900 px-4 py-2 font-black uppercase tracking-widest text-sm border-2 border-slate-900 border-b-0 w-max mx-auto shadow-[4px_0_0_0_#0f172a]">
        Cohort 01 Begins: April 15th
      </div>
      <div className="flex w-full bg-slate-900 text-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] divide-x-2 divide-slate-700">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds }
        ].map((block, i) => (
          <div key={i} className="flex-1 p-3 md:p-4 flex flex-col items-center justify-center">
            <span className="text-3xl md:text-5xl font-black font-mono tracking-tighter text-emerald-400">
              {block.value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-slate-400 mt-1">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
