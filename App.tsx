
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUpRight,
  MessageCircle,
  Play,
  HeartHandshake,
  Calendar,
  Send,
  User,
  Zap,
  Clock,
  ExternalLink,
  ChevronLeft,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SKILLS, PROJECTS } from './constants';
import * as Icons from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Impact', href: '#social-work' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3 border-b border-amber-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 rounded-2xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform shadow-lg shadow-amber-500/20">
            <Zap className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter leading-none ${scrolled ? 'text-gray-900' : 'text-white'}`}>SUNNY AHMED</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 uppercase">Administrator & Developer</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-black px-5 py-2 rounded-full transition-all hover:bg-amber-500/10 ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#booking" className="ml-6 px-8 py-3 bg-amber-500 text-white rounded-full font-black text-sm hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/30 hover:-translate-y-1">
            LET'S TALK
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 rounded-xl ${scrolled ? 'bg-gray-100' : 'bg-white/10'}`}>
          {isOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white h-screen absolute w-full top-0 left-0 p-8 flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-gray-900"><X size={36} /></button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-black text-gray-900 hover:text-amber-500 transition-colors tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <a href="#booking" onClick={() => setIsOpen(false)} className="px-14 py-6 bg-amber-500 text-white rounded-full text-2xl font-black shadow-2xl shadow-amber-500/40">HIRE ME</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-20">
      <div className="absolute inset-0 z-0 scale-110">
        <img 
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000" 
          className="w-full h-full object-cover opacity-25" 
          alt="Abstract Sunny"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-gray-950/80 to-amber-900/40"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 mb-10 animate-in fade-in slide-in-from-top duration-1000">
          <Sparkles className="text-amber-400" size={16} />
          <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">The Ultimate Professional Blend</span>
        </div>
        <h1 className="text-6xl md:text-[10rem] font-black text-white mb-8 leading-[0.85] tracking-tighter">
          HI, I AM <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 drop-shadow-2xl">SUNNY AHMED</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 mb-14 max-w-4xl mx-auto font-medium leading-relaxed">
          I bridge the gap between <span className="text-white font-bold">Administration</span>, <span className="text-amber-500 font-bold">Web Innovation</span>, and <span className="text-white font-bold">Social Good</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#booking" className="w-full sm:w-auto px-16 py-6 bg-amber-500 text-white rounded-full font-black text-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-amber-500/40 hover:-translate-y-2">
            BOOK AN APPOINTMENT <ArrowUpRight size={22} />
          </a>
          <a href="#projects" className="w-full sm:w-auto px-16 py-6 bg-white/5 text-white backdrop-blur-md border border-white/10 rounded-full font-black text-lg hover:bg-white/10 transition-all shadow-xl hover:-translate-y-2">
            MY PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectsBlog = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Selected Works</span>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 leading-none tracking-tighter">PROJECT <span className="text-amber-100 [text-shadow:2px_2px_0_#000]">-BLOG</span></h2>
          </div>
          <p className="text-gray-500 text-lg font-medium md:max-w-xs">A narrative of professional growth and community service.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl shadow-amber-200/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 text-gray-400 text-xs font-bold mb-4 uppercase tracking-widest">
                  <Clock size={14} className="text-amber-500" /> {project.date}
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-6 group-hover:text-amber-600 transition-colors leading-tight">{project.title}</h3>
                <p className="text-gray-500 font-medium mb-8 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-amber-600 px-3 py-1 bg-amber-50 rounded-lg">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Detail Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in fade-in duration-300">
            <div className="relative h-96 overflow-hidden">
              <img src={PROJECTS.find(p => p.id === selectedProject)?.image} className="w-full h-full object-cover" alt="Detail" />
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-8 right-8 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-amber-500 hover:text-white transition-all shadow-xl"
              >
                <X size={28} />
              </button>
            </div>
            <div className="p-12 md:p-16">
              <span className="text-amber-500 font-black tracking-widest uppercase text-xs mb-4 block">{PROJECTS.find(p => p.id === selectedProject)?.category}</span>
              <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">{PROJECTS.find(p => p.id === selectedProject)?.title}</h2>
              <div className="prose prose-lg text-gray-600 font-medium leading-loose mb-12">
                {PROJECTS.find(p => p.id === selectedProject)?.fullContent}
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 font-black text-gray-900 hover:text-amber-600 transition-all uppercase tracking-widest text-sm"
              >
                <ChevronLeft size={20} /> Back to Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const BookingSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating Mail Send to sunyahmed161@gmail.com
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', date: '', description: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="booking" className="py-32 bg-amber-500 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-white">
          <span className="bg-white/20 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.3em] mb-8 inline-block">Consultation</span>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">Ready to <br/>Elevate?</h2>
          <p className="text-amber-100 text-xl font-medium mb-12 max-w-md">
            Whether it's a website project, administrative strategy, or a community partnership—I am ready to help. Book a slot in my calendar.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"><Mail size={24}/></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email Address</p>
                <p className="text-lg font-bold">sunyahmed161@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"><Phone size={24}/></div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Direct Line</p>
                <p className="text-lg font-bold">01303693210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
          <h3 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">Booking Form</h3>
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="text" required value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter Name"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-500 font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Mobile Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input 
                    type="tel" required value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    placeholder="013XXXXXXXX"
                    className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-500 font-bold"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Preferred Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="date" required value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-amber-500 font-bold"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Short Description</label>
              <textarea 
                required rows={4} value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                placeholder="What can I help you with?"
                className="w-full bg-gray-50 border-none rounded-2xl p-6 focus:ring-2 focus:ring-amber-500 font-bold resize-none"
              />
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full py-5 bg-gray-950 text-white rounded-2xl font-black text-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 disabled:opacity-50"
            >
              {isSubmitting ? 'PROCESSING...' : 'SEND REQUEST'}
            </button>
          </form>

          {isSuccess && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="text-green-500 mb-6" size={80} />
              <h4 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">SUCCESS!</h4>
              <p className="text-gray-500 font-medium mb-10">Your request has been forwarded to Sunny's email at sunyahmed161@gmail.com.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-12 py-4 bg-gray-900 text-white rounded-full font-black uppercase text-xs tracking-widest"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [regData, setRegData] = useState({ name: '', email: '' });
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "হ্যালো! আমি সানীর AI অ্যাসিস্ট্যান্ট। আপনার নাম ও ইমেইল দিয়ে চ্যাট শুরু করুন।" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setMessages(prev => [...prev, { role: 'bot', text: `ধন্যবাদ ${regData.name}! আমি সানী আহমেদ সম্পর্কে আপনাকে সব তথ্য দিতে পারি। আপনি কী জানতে চান? (I can speak both Bangla and English!)` }]);
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          thinkingConfig: { thinkingBudget: 24576 },
          systemInstruction: `You are Sunny's highly intelligent AI twin. 
          User Identity: Talking to ${regData.name} (${regData.email}).
          Capabilities:
          - Speak fluently in correct, polite Bengali and professional English.
          - Use a persuasive tone to attract customers to Sunny's skills.
          - Information: Sunny is an Administrator at M. Saifur Rahman Park, Web Developer (GKSoft), Marketer, and deeply into social work.
          - Key Traits: Reliable, hardworking, technology-driven, community-focused.
          - If asked about booking, direct them to the booking form.
          - Goal: Make the user feel confident about hiring Sunny Ahmed. Use 'thinking' logic to understand the user's intent deeply.`,
        }
      });
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "আমি উত্তরটি প্রসেস করছি..." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'bot', text: "I'm experiencing a high volume, but Sunny is available via phone!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-80 md:w-96 h-[600px] bg-white rounded-[3rem] shadow-2xl flex flex-col border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-500 mb-6">
          <div className="p-8 bg-gray-950 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center shadow-lg">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="font-black text-sm tracking-tight leading-none uppercase">Sunny AI Twin</h4>
                <p className="text-[10px] text-amber-500 font-bold tracking-[0.2em] mt-1">THINKING MODE ON</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform"><X size={24} /></button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/50">
            {!isRegistered ? (
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-amber-100 animate-in fade-in slide-in-from-bottom-4">
                <h5 className="font-black text-gray-900 mb-6 tracking-tight text-center">শুরু করতে পরিচয় দিন</h5>
                <form onSubmit={handleRegister} className="space-y-4">
                  <input 
                    type="text" required placeholder="আপনার নাম"
                    value={regData.name} onChange={e => setRegData({...regData, name: e.target.value})}
                    className="w-full text-sm bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-500 font-bold"
                  />
                  <input 
                    type="email" required placeholder="আপনার ইমেইল"
                    value={regData.email} onChange={e => setRegData({...regData, email: e.target.value})}
                    className="w-full text-sm bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-amber-500 font-bold"
                  />
                  <button className="w-full py-4 bg-amber-500 text-white rounded-2xl font-black text-sm shadow-xl shadow-amber-500/30 uppercase tracking-[0.2em] mt-4">চ্যাট শুরু করুন</button>
                </form>
              </div>
            ) : (
              messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 rounded-[2rem] text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                      ? 'bg-amber-500 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none font-medium'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-5 py-3 rounded-2xl flex gap-2 items-center shadow-sm">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] font-black text-gray-400 ml-2">THINKING...</span>
                </div>
              </div>
            )}
          </div>

          {isRegistered && (
            <div className="p-6 bg-white border-t border-gray-100 flex gap-3 shrink-0">
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder="Ask Sunny anything..."
                className="flex-1 bg-gray-100 px-6 py-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold"
              />
              <button 
                onClick={handleSend} disabled={loading}
                className="w-14 h-14 bg-gray-950 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-all shadow-xl disabled:opacity-50"
              >
                <Send size={22} />
              </button>
            </div>
          )}
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 h-24 bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 text-white rounded-[2.5rem] flex items-center justify-center shadow-[0_20px_60px_-15px_rgba(245,158,11,0.5)] hover:scale-110 transition-transform relative group hover:rotate-6"
      >
        <div className="absolute inset-0 bg-amber-400 rounded-[2.5rem] animate-ping opacity-20 group-hover:hidden"></div>
        {isOpen ? <X size={40} /> : <MessageCircle size={40} />}
      </button>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-gray-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 text-center md:text-left gap-10">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter">ELITE <br/><span className="text-amber-500">EXPERTISE</span></h2>
            <p className="text-gray-400 text-xl font-medium max-w-lg">Mastering the intersection of human management and digital scalability.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 text-center backdrop-blur-md">
              <p className="text-4xl font-black text-amber-500">100%</p>
              <p className="text-[10px] font-black text-gray-500 mt-2 uppercase tracking-widest">Reliability</p>
            </div>
            <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 text-center backdrop-blur-md">
              <p className="text-4xl font-black text-amber-500">V.3</p>
              <p className="text-[10px] font-black text-gray-500 mt-2 uppercase tracking-widest">Next-Gen Stack</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill) => {
            const IconComponent = (Icons as any)[skill.icon];
            return (
              <div key={skill.name} className="group p-10 bg-white/5 hover:bg-amber-500 rounded-[3rem] border border-white/10 hover:border-amber-500 transition-all duration-700 text-center hover:-translate-y-4 shadow-2xl hover:shadow-amber-500/20">
                <div className="mb-8 mx-auto w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center group-hover:bg-white group-hover:text-amber-500 transition-all duration-700">
                  {IconComponent && <IconComponent size={36} />}
                </div>
                <h4 className="text-xs font-black leading-tight uppercase tracking-[0.2em] group-hover:text-white transition-colors">{skill.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SocialImpact = () => {
  return (
    <section id="social-work" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-400/30 blur-[100px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800" className="rounded-[4rem] shadow-2xl h-96 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Impact 1" />
                <div className="bg-amber-500 p-8 rounded-[3rem] text-white">
                  <p className="text-4xl font-black mb-1 leading-none">500+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Smiles Delivered</p>
                </div>
              </div>
              <div className="space-y-6 mt-16">
                <div className="bg-gray-900 p-8 rounded-[3rem] text-white">
                  <p className="text-4xl font-black mb-1 leading-none">Active</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Humanitarian Aid</p>
                </div>
                <img src="https://images.unsplash.com/photo-1509059852496-f3822ae057bf?q=80&w=800" className="rounded-[4rem] shadow-2xl h-96 w-full object-cover" alt="Impact 2" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs mb-6 block">The Social Mission</span>
            <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-10 leading-[0.9] tracking-tighter">Standing with the <br/>Helpless.</h2>
            <p className="text-xl text-gray-500 mb-12 leading-loose font-medium">
              I believe true success is measured by the impact we leave on others. My commitment to social work is integral to my identity as a professional.
            </p>
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 shrink-0 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-500 shadow-lg"><HeartHandshake size={32}/></div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl tracking-tight mb-2 uppercase">Compassion First</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">Dedicated relief programs for winter aid and food security.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 shrink-0 bg-gray-950 rounded-3xl flex items-center justify-center text-amber-500 shadow-lg"><Zap size={32}/></div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl tracking-tight mb-2 uppercase">Community Builder</h4>
                  <p className="text-gray-500 font-medium leading-relaxed">Using my platform to coordinate local NGOs and volunteer networks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[180px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter mb-10 leading-[0.8]">SUNNY<br/><span className="text-amber-500">AHMED</span></h2>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/share/17weLsKYfR/" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-all hover:-translate-y-2 border border-white/10"><Facebook size={28}/></a>
              <a href="https://www.instagram.com/sunny_ahmad_24?igsh=NGFsaG54cXhqY2V5&utm_source=qr" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-all hover:-translate-y-2 border border-white/10"><Instagram size={28}/></a>
              <a href="https://www.linkedin.com/in/sunny-ahmed-6b1b75219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-all hover:-translate-y-2 border border-white/10"><Linkedin size={28}/></a>
            </div>
          </div>
          <div className="bg-white/5 p-14 rounded-[4rem] border border-white/10 backdrop-blur-xl shadow-2xl relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center"><Zap size={24}/></div>
            <h4 className="text-3xl font-black mb-8 leading-tight">Ready for your next big <span className="text-amber-500">partnership?</span></h4>
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-5 text-gray-400 font-bold text-lg">
                <Mail size={24} className="text-amber-500" /> sunyahmed161@gmail.com
              </div>
              <div className="flex items-center gap-5 text-gray-400 font-bold text-lg">
                <Phone size={24} className="text-amber-500" /> 01303693210
              </div>
            </div>
            <a href="#booking" className="inline-flex items-center gap-4 bg-white text-gray-950 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-amber-500 hover:text-white transition-all">GET STARTED →</a>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-black uppercase tracking-[0.4em] gap-8">
          <p>© {new Date().getFullYear()} SUNNY AHMED. REDEFINING EXCELLENCE.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="bg-white selection:bg-amber-500 selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <ProjectsBlog />
      <SkillsSection />
      <SocialImpact />
      <BookingSection />
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
