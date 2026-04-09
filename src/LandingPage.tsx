import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Menu, 
  X, 
  Stethoscope, 
  Baby, 
  Microscope, 
  ShieldCheck, 
  Activity,
  ChevronRight,
  Star
} from 'lucide-react';

// Define Types for our data
interface Service {
  title: string;
  icon: React.ReactNode;
  desc: string;
}

interface Testimonial {
  name: string;
  text: string;
  stars: number;
}

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const services: Service[] = [
    { title: "General Consultation", icon: <Stethoscope className="w-8 h-8" />, desc: "Comprehensive health assessments for all age groups." },
    { title: "Maternal & Child Health", icon: <Baby className="w-8 h-8" />, desc: "Specialized care for mothers and children in the Aba community." },
    { title: "Laboratory Services", icon: <Microscope className="w-8 h-8" />, desc: "Fast and accurate diagnostic testing using modern equipment." },
    { title: "Preventive Care", icon: <ShieldCheck className="w-8 h-8" />, desc: "Regular checkups and vaccinations to keep you healthy." },
    { title: "Minor Procedures", icon: <Activity className="w-8 h-8" />, desc: "Safe and hygienic minor surgical treatments." },
  ];

  const testimonials: Testimonial[] = [
    { name: "Chinedu O.", text: "The doctors made me feel truly cared for and listened to. Best clinic in Abia.", stars: 5 },
    { name: "Amaka J.", text: "Professional staff and a very clean environment. I highly recommend them.", stars: 5 },
    { name: "Blessing E.", text: "I didn't have to wait long — service was fast and efficient. Very impressed.", stars: 5 }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-700 tracking-tight leading-none">
                YOUR HEALTH <br/><span className="text-emerald-500 text-lg uppercase tracking-widest">And You Clinics</span>
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="hover:text-blue-600 font-medium text-slate-700">About</a>
              <a href="#services" className="hover:text-blue-600 font-medium text-slate-700">Services</a>
              <a href="#contact" className="hover:text-blue-600 font-medium text-slate-700">Contact</a>
              <a href="tel:+2348069300842" className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-semibold">
                <Phone size={18} /> Call Now
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
            <a href="#about" className="block font-medium">About</a>
            <a href="#services" className="block font-medium">Services</a>
            <a href="#contact" className="block font-medium">Contact</a>
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Book Appointment</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Trusted Healthcare in Aba
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Quality Healthcare <br/>
              <span className="text-blue-600">You Can Trust</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              Experience compassionate care, modern facilities, and a dedicated team of professionals focused on your wellbeing. Your Health Comes First — Always.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
                Book Appointment
              </button>
              <button className="border-2 border-slate-200 bg-white text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                <Phone size={20} /> Call Clinic
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Clinic Interior" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Patient-First Healthcare for the Aba Community</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At Your Health And You Clinics, we believe quality healthcare should be accessible to everyone. We are a patient-centered facility dedicated to providing affordable medical excellence.
              </p>
              <div className="space-y-4">
                {[
                  "Experienced medical professionals",
                  "Clean, safe, and welcoming environment",
                  "Fast and attentive service with zero long waits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">Specialists</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <h3 className="text-4xl font-bold text-emerald-500 mb-2">24/7</h3>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">Emergency</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center col-span-2">
                <h3 className="text-4xl font-bold text-slate-800 mb-2">5,000+</h3>
                <p className="text-slate-500 font-medium uppercase tracking-wider text-xs">Happy Patients in Aba</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Medical Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We provide a wide range of medical services designed to meet the needs of families and individuals in Abia State.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-2xl relative">
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(t.stars)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-slate-300 mb-6">"{t.text}"</p>
                <p className="font-bold text-emerald-400">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Our Clinic</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-slate-600">131 Caleb Street, Aba, 450101, Abia, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 h-fit">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Working Hours</h4>
                    <p className="text-slate-600">Mon – Sat: 8:00 AM – 8:00 PM</p>
                    <p className="text-slate-600">Emergency: 24/7 Available</p>
                  </div>
                </div>
                <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden mt-8 flex items-center justify-center text-slate-500">
                   [Google Map Placeholder]
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <select className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                  <option>Select Service</option>
                  {services.map(s => <option key={s.title}>{s.title}</option>)}
                </select>
                <textarea rows={4} placeholder="How can we help you?" className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Take control of your health today</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">Don't wait for symptoms to worsen. Our expert team is ready to provide the care you deserve right here in Aba.</p>
            <button className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition">
              Book Appointment Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="text-xl font-bold text-blue-700 block mb-4 uppercase tracking-tighter">Your Health And You</span>
              <p className="text-slate-500">Your health comes first — always. Quality healthcare you can trust in the heart of Aba.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-slate-500 space-y-2">
                <li><a href="#" className="hover:text-blue-600">Home</a></li>
                <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-600">Our Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <div className="flex bg-white rounded-lg border p-1">
                <input type="email" placeholder="Email" className="bg-transparent px-3 py-2 outline-none w-full" />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md"><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm border-t pt-8">© 2026 Your Health And You Clinics. All rights reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/08069300842" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all z-50 flex items-center gap-2 group"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-semibold whitespace-nowrap">Chat with us</span>
      </a>
    </div>
  );
};

export default LandingPage;