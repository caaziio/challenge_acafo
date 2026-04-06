import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, XCircle, ChevronRight, Target, FileText, Layout, Presentation, Users, Clock, Zap, Flame } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-slate-900 selection:text-emerald-400">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <TestimonialSection />
      <WhoItsForSection />
      <PricingSection />
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
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 overflow-hidden bg-white border-b-4 border-slate-900">
      {/* Background massive text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex -translate-y-[40%] opacity-[0.03] pointer-events-none z-0">
        <span className="text-[20vw] font-black whitespace-nowrap leading-none tracking-tighter">Challenge. Challenge.</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400 text-slate-900 text-xs font-black tracking-widest mb-8 border-2 border-slate-900 shadow-[4px_4px_0_0_#0f172a]">
            <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
            Cohort 01 • 10 Spots Only
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
            Land a Job in Korea in <br/>
            <span className="text-transparent inline-block pb-2 bg-clip-text bg-gradient-to-r from-slate-900 to-slate-900 border-b-8 border-emerald-400" style={{ WebkitTextStroke: '2px #0f172a', textShadow: '4px 4px 0px #34d399' }}>60 Days.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-xl font-bold tracking-wide leading-relaxed border-l-4 border-slate-900 pl-6 bg-slate-50 p-4">
            No excuses. I've designed a rigorous 60-day execution program for foreigners serious about getting hired. I will be your personal coach, guiding you every single step of the way.
          </p>
          
          <div className="flex items-center gap-3 mb-10 max-w-xl bg-slate-900 text-white p-3 border-2 border-slate-900 shadow-[4px_4px_0_0_#34d399] w-max">
            <span className="font-black text-xs tracking-widest text-emerald-400">Powered by</span>
            <span className="text-xl font-black tracking-widest text-white">Acafo</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a href="#apply" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 font-black tracking-widest text-lg transition-all hover:-translate-y-1 border-2 border-slate-900 shadow-[6px_6px_0_0_#34d399] hover:shadow-[2px_2px_0_0_#34d399]">
              Accept the Challenge <Flame className="w-6 h-6 text-emerald-400 fill-emerald-400" />
            </a>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md md:max-w-none relative mt-10 md:mt-0">
          <div className="aspect-[4/5] overflow-hidden relative border-4 border-slate-900 shadow-[12px_12px_0_0_#0f172a] bg-slate-100 p-2">
            <div className="w-full h-full relative border border-slate-200 bg-white">
              <Image 
                src="/profile.png" 
                alt="Program Coach" 
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 bg-white p-4 border-4 border-slate-900 shadow-[8px_8px_0_0_#34d399] z-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-400 flex items-center justify-center border-2 border-slate-900"><Zap className="w-6 h-6 text-slate-900 fill-slate-900" /></div>
            <div>
              <p className="text-base font-black text-slate-900 tracking-wider">Mission Focused</p>
              <p className="text-xs text-slate-500 font-bold tracking-widest">Zero distractions</p>
            </div>
          </div>
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

function SolutionSection() {
  return (
    <section className="py-24 px-6 relative bg-white border-b-4 border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="border-4 border-slate-900 bg-white p-8 md:p-10 shadow-[12px_12px_0_0_#0f172a] relative flex flex-col font-mono font-bold text-slate-800">
                <div className="flex justify-between border-b-4 border-slate-900 pb-4 mb-6 text-lg tracking-wide uppercase">
                  <span className="text-slate-500">Week</span>
                  <span className="text-slate-900">Curriculum Snapshot</span>
                </div>
                <div className="space-y-6 flex-1 text-sm md:text-base">
                  <div className="flex flex-col p-4 bg-slate-50 border-2 border-slate-200 hover:border-slate-900 transition-colors">
                    <span className="bg-emerald-400 text-slate-900 px-3 py-1 font-black shadow-[2px_2px_0_0_#0f172a] self-start mb-2 uppercase">Wk 1-2</span>
                    <span className="font-black text-lg">Acafo System & Strategy</span>
                    <span className="text-slate-600 font-medium mt-1">I'll personally review your profile and match it against the Acafo system to uncover the exact role you're perfectly positioned for in Korea.</span>
                  </div>
                  <div className="flex flex-col p-4 bg-slate-50 border-2 border-slate-200 hover:border-slate-900 transition-colors">
                    <span className="bg-emerald-400 text-slate-900 px-3 py-1 font-black shadow-[2px_2px_0_0_#0f172a] self-start mb-2 uppercase">Wk 3-4</span>
                    <span className="font-black text-lg">Korean ATS-Proof Resume</span>
                    <span className="text-slate-600 font-medium mt-1">We strip the fluff. Together, we'll rebuild your CV into the aggressive, impact-driven format required locally.</span>
                  </div>
                  <div className="flex flex-col p-4 bg-slate-50 border-2 border-slate-200 hover:border-slate-900 transition-colors">
                    <span className="bg-emerald-400 text-slate-900 px-3 py-1 font-black shadow-[2px_2px_0_0_#0f172a] self-start mb-2 uppercase">Wk 5-6</span>
                    <span className="font-black text-lg">Application Funnel Tactics</span>
                    <span className="text-slate-600 font-medium mt-1">No more blind applying. We install a rigid, numbers-driven system to track your pipeline and enforce weekly momentum.</span>
                  </div>
                  <div className="flex flex-col p-4 bg-slate-900 border-2 border-slate-900 transform scale-[1.02] shadow-[4px_4px_0_0_#34d399]">
                    <span className="bg-white text-slate-900 px-3 py-1 font-black self-start mb-2 uppercase">Wk 7-8</span>
                    <span className="font-black text-lg text-white">Interview Domination</span>
                    <span className="text-slate-300 font-medium mt-1">I will grill you on behavioral and technical questions recursively until you can respond to recruiters with unshakeable confidence.</span>
                  </div>
                </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-slate-900 text-emerald-400 font-black tracking-widest text-sm mb-6 border-2 border-slate-900 shadow-[4px_4px_0_0_#34d399]">
              The Bootcamp Blueprint
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-none">
              The 60-Day <br/>Challenge
            </h2>
            <p className="text-xl text-slate-700 font-bold mb-10 leading-relaxed border-l-4 border-emerald-400 pl-6 space-y-2">
              This isn't just a passive course. <br/>
              <span className="text-slate-900">This is my personal commitment to you.</span> <br/>
              I will guide you through a rigid roadmap, ensuring you put in the reps required to get hired.
            </p>
            
            <ul className="space-y-6">
              {[
                "Intensive weekly coaching",
                "No-nonsense action plan",
                "Aggressive accountability",
                "Become 100% interview ready"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-900 font-black text-lg tracking-wide">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-900 text-emerald-400 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  const items = [
    { title: "Positioning Strategy", desc: "Find your unfair advantage and angle your background explicitly for Korean ATS and hiring managers." },
    { title: "Local CV Optimization", desc: "Strip the fluff. Rebuild your resume into the aggressive, impact-driven format required locally." },
    { title: "The Application System", desc: "Install a rigid, numbers-driven system to track your pipeline and enforce weekly momentum." },
    { title: "Interview Drills", desc: "Mock interviews tearing down your weak points. Answer behavioral and technicals flawlessly." }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white px-6 border-b-4 border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none">
              The Arsenal.
            </h2>
            <div className="w-32 h-4 bg-emerald-400 border-2 border-slate-900"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-slate-800 p-8 md:p-10 border-4 border-slate-700 hover:border-emerald-400 relative overflow-hidden group transition-all">
              <div className="absolute -right-4 -top-8 text-[10rem] font-black opacity-10 text-slate-50 group-hover:text-emerald-400 transition-colors leading-none pointer-events-none">0{i+1}</div>
              <h3 className="text-3xl font-black mb-4 text-emerald-400 relative z-10 w-3/4">{item.title}</h3>
              <p className="text-slate-300 font-bold text-lg leading-relaxed relative z-10 tracking-wide">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    { name: "Michael R.", role: "Tech", quote: "I finally understood the structural difference in resume expectations. Completely changed the game." },
    { name: "Sarah T.", role: "Marketing", quote: "3 interviews in 2 weeks after months of silence. The weekly accountability forced me to execute." },
    { name: "David K.", role: "Graduate", quote: "I had the skills, no strategy. This gave me the exact blueprint I needed to finally stand out." }
  ];

  return (
    <section className="py-24 px-6 bg-emerald-400 border-b-4 border-slate-900 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-6">
              Proof of <br/><span className="bg-slate-900 text-white px-2 mt-2 inline-block">Execution.</span>
            </h2>
            <p className="font-bold text-slate-900 tracking-widest text-lg border-l-4 border-slate-900 pl-4">Real results from participants who put in the work.</p>
          </div>
          <div className="lg:w-2/3 grid gap-8 w-full">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 md:p-10 border-4 border-slate-900 shadow-[12px_12px_0_0_#0f172a] transform transition-transform hover:-translate-y-2">
                <p className="text-2xl md:text-3xl font-black text-slate-900 mb-8 leading-tight tracking-tight">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-6 border-t-4 border-slate-100 pt-6">
                  <div className="w-16 h-16 bg-slate-900 text-white text-2xl font-black flex items-center justify-center border-2 border-slate-900 uppercase">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-xl text-slate-900 uppercase">{t.name}</p>
                    <p className="text-sm text-slate-500 font-bold tracking-widest bg-slate-100 inline-block px-2 py-1 mt-1 uppercase">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
          
          <button className="w-full bg-emerald-400 text-slate-900 py-6 font-black text-2xl tracking-widest uppercase border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a] transition-all">
            Submit Application
          </button>
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
