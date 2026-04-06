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
          April Cohort • 10 Spots Only
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.9] mb-10">
          Land a Job in Korea in <br />
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

          <a
            href="https://www.linkedin.com/in/cagossou/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-6 -left-6 bg-white p-3 border-4 border-slate-900 text-slate-900 shadow-[8px_8px_0_0_#3b82f6] flex items-center gap-2 hover:translate-x-1 hover:translate-y-1 transition-all group overflow-hidden"
          >
            <svg className="w-6 h-6 fill-[#0077b5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="font-black text-sm uppercase tracking-widest group-hover:underline">Official Profile</span>
          </a>
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
              The 60-Day <br />Challenge
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-2xl text-slate-900 font-black leading-tight">
                A structured path to take you from confusion to interview-ready step by step.
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
                  April Cohort • 10 Max
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

          <div className="p-8 md:p-12 bg-white border-8 border-slate-900 shadow-[16px_16px_0_0_#ef4444] relative z-10 mt-16 mb-16 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 transform rotate-45 translate-x-16 -translate-y-16 group-hover:bg-emerald-100 transition-all"></div>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="bg-red-500 text-white px-4 py-1 text-xs font-black uppercase tracking-widest border-2 border-slate-900 w-max mb-6">High Risk Alert</div>
                <h3 className="text-3xl font-black text-slate-900 leading-[0.9] mb-6">The High Cost <br /> of Waiting. </h3>
                <p className="text-lg text-slate-600 font-bold leading-relaxed border-l-4 border-red-500 pl-6">
                  Every month you wait and hear silence, you lose more than time. You lose <span className="text-slate-900">₩2,000,000+ in living costs</span> and the growing fear of losing your visa. Joining the challenge is not a cost—it is your stop-loss.
                </p>
              </div>
              <div className="w-full md:w-auto">
                <a href="/apply" className="w-full md:w-auto text-center block bg-slate-900 text-white px-8 py-5 font-black text-xl tracking-widest uppercase hover:bg-slate-800 transition-all shadow-[8px_8px_0_0_#ef4444] border-4 border-slate-900 active:translate-x-1 active:translate-y-1 active:shadow-none">
                  Stop the bleed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const proofs = [
    { title: "Official Job Offer Letter", src: "/proof-job-offer-letter.png", tag: "Final Offer" },
    { title: "Salary Negotiation in Progress", src: "/proof-salary-negotiation.png", tag: "Final Stage" },
    { title: "2 Interview Offers in 1 Week", src: "/proof-multi-interview-offers.png", tag: "Interviews" },
    { title: "Round 2 Interview Success", src: "/proof-round-2-success.png", tag: "Pipeline" },
    { title: "Immediate Start-Up Hiring", src: "/proof-start-up-hire.png", tag: "Hired Fast" },
    { title: "CV Success & Interview Prep", src: "/proof-cv-interview-ready.png", tag: "Execution" }
  ];

  return (
    <section className="py-24 px-6 bg-emerald-400 border-b-4 border-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-[7rem] font-black tracking-tighter text-slate-900 leading-[0.8] mb-8">
            Proof That <br /><span className="bg-slate-900 text-white px-2 mt-2 inline-block">It Works.</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="font-black text-slate-900 tracking-widest text-lg border-l-4 border-slate-900 pl-4 uppercase">
              No theory. <br />Just real-world proof from the field.
            </p>
            <div className="hidden md:block w-32 h-4 bg-slate-900 border-2 border-slate-900"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {proofs.map((p, i) => (
            <div key={i} className="group relative bg-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] transition-all overflow-hidden aspect-[4/5] flex flex-col p-4">
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}

          {/* The "Your Result Here" Card */}
          <div className="relative bg-slate-900 border-4 border-slate-900 shadow-[8px_8px_0_0_#34d399] p-8 flex flex-col justify-center items-center text-center group overflow-hidden aspect-[4/5]">
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Flame className="w-48 h-48 text-white fill-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 relative z-10 leading-none">Your Success <br /> Story Here</h3>
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

          <div className="w-full bg-slate-900 border-4 border-emerald-400 p-8 md:p-12 text-left mb-10 shadow-[12px_12px_0_0_#06b6d4] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <CheckCircle2 className="w-32 h-32 text-emerald-400" />
            </div>
            <div className="relative z-10">
              <div className="bg-emerald-400 text-slate-900 py-2 px-6 text-sm font-black uppercase tracking-widest border-2 border-slate-900 w-max mb-6">The Action-Taker's Safety Net</div>
              <h3 className="font-black text-4xl uppercase tracking-tighter text-white mb-6 leading-none">The No-Risk <br /> Guarantee.</h3>
              <p className="font-bold text-slate-300 leading-relaxed text-lg border-l-4 border-emerald-400 pl-6">
                If you attend all weekly calls, execute every assigned strategy, and do not land a single interview within the 60 days, <span className="text-white bg-slate-800 px-1 font-black underline decoration-emerald-400 decoration-4">I will continue coaching you for free</span> until you do. I take the risk, you put in the work.
              </p>
            </div>
          </div>

          <a href="/apply" className="w-full block text-center bg-emerald-400 text-slate-900 py-6 font-black text-3xl tracking-widest uppercase border-4 border-slate-900 shadow-[12px_12px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 active:shadow-none transition-all">
            Submit Application
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Do I need to speak fluent Korean to win?",
      a: "No. While TOPIK helps, many of our success stories come from candidates who target companies and roles where English/Native skills are the primary requirement. We don't just 'hope' you get hired; we strategically align your profile with roles where you have an unfair advantage over locals."
    },
    {
      q: "I'm still abroad. Can I attend the challenge from here?",
      a: "Absolutely. The Acafo Roadmap is conducted 100% online"
    },
    {
      q: "I don't have a visa yet. Is it too early for me?",
      a: "This is the best time to join. Searching for a job while your visa clock is ticking is high-stress and leads to mistakes. We provide the strategic guidance needed to navigate visa-related shifts in the Korean market so your application is legally and professionally sound."
    },
    {
      q: "Is this a recruiting agency? Do you provide the job for me?",
      a: "No. This is not a placement service. Recruiting agencies work for the companies; I work for YOU. I equip you with the unshakeable strategy, resume authority, and interview DOMINATION skills needed to take any role you want. That said, we do have a list of curated job openings specifically for foreigners that we can connect you to, and top alumni may receive direct internal referrals."
    },
    {
      q: "Is this just for developers and engineers?",
      a: "No. The mechanics of the recruiter psychology are universal. We have successfully applied this framework to marketing, operations, sales, and management roles across a variety of industries."
    },
    {
      q: "I am a student or recent graduate. Am I eligible?",
      a: "Yes, provided you are graduating from a university in Korea or meet the standard E7 visa eligibility requirements. We specialize in helping early-career professionals bypass the 'entry-level' trap by positioning their unique global value correctly."
    },
    {
      q: "What if the 60 days pass and I still don't have an interview?",
      a: "I take the risk, not you. If you execute every assigned task and attend every call but fail to secure a single interview, I will continue to coach you for free until you do. My goal is your result, not just your enrollment."
    },
    {
      q: "How do I secure my spot and pay?",
      a: "Once your application is approved after the /apply step, payments are handled securely via bank tranfer if in Korea and in USD via PayPal if abroad."
    }
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
          No excuses.<br />
          <span className="text-emerald-400" style={{ textShadow: '6px 6px 0px #0f172a' }}>Just offers.</span>
        </h2>
        <p className="text-2xl md:text-3xl text-slate-300 font-bold mb-16 tracking-wider">
          April Cohort is filling. Time is ticking.
        </p>

        <a href="#apply" className="inline-flex items-center justify-center gap-4 bg-white text-slate-900 px-12 py-8 font-black text-3xl tracking-widest uppercase border-4 border-slate-900 shadow-[12px_12px_0_0_#34d399] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#34d399] transition-all">
          Join April Cohort <ArrowRight className="w-10 h-10" />
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
    <div className="flex flex-col items-center mt-12 w-full max-w-lg mx-auto transform hover:scale-[1.02] transition-transform">
      <div className="bg-yellow-400 text-slate-900 px-6 py-3 font-black uppercase tracking-widest text-lg border-4 border-slate-900 border-b-0 w-max mx-auto shadow-[8px_0_0_0_#0f172a] relative z-20">
        April Cohort Begins: April 15th
      </div>
      <div className="flex w-full bg-slate-900 text-white border-4 border-slate-900 shadow-[12px_12px_0_0_#0f172a] divide-x-4 divide-slate-800">
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
