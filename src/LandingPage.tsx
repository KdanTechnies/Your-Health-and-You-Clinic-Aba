import React, { useState } from "react";
import type { FormEvent } from "react";
import {
  Phone,
  MapPin,
  Clock3,
  CheckCircle2,
  MessageCircle,
  Menu,
  X,
  Stethoscope,
  Baby,
  Microscope,
  ShieldCheck,
  Activity,
  Star,
  ArrowRight,
  HeartPulse,
  Mail,
  CalendarDays,
  Send,
  Loader2,
  CircleCheck,
} from "lucide-react";

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

interface BookingData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface BookingResponse {
  success: boolean;
  message: string;
}

/*
  FRONTEND-ONLY DEMO API
  This simulates a real POST request while the project has no backend yet.
  Later, replace simulateBookingAPI() with fetch("/api/bookings", ...).
*/
const simulateBookingAPI = async (
  bookingData: BookingData
): Promise<BookingResponse> => {
  console.log("Simulated booking API request:", bookingData);

  await new Promise((resolve) => setTimeout(resolve, 1200));

  return {
    success: true,
    message: "Your appointment request has been sent successfully, we will get back to you within 30-90 seconds.",
  };
};

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [booking, setBooking] = useState<BookingData>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isBooking, setIsBooking] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const services: Service[] = [
    {
      title: "General Consultation",
      icon: <Stethoscope className="h-7 w-7" />,
      desc: "Comprehensive health assessments and professional medical consultations for individuals and families.",
    },
    {
      title: "Maternal & Child Health",
      icon: <Baby className="h-7 w-7" />,
      desc: "Dedicated healthcare services supporting mothers, children, and families at every stage.",
    },
    {
      title: "Laboratory Services",
      icon: <Microscope className="h-7 w-7" />,
      desc: "Reliable diagnostic testing supported by modern laboratory equipment and professional staff.",
    },
    {
      title: "Preventive Care",
      icon: <ShieldCheck className="h-7 w-7" />,
      desc: "Routine checkups, health guidance, and preventive services designed around your wellbeing.",
    },
    {
      title: "Minor Procedures",
      icon: <Activity className="h-7 w-7" />,
      desc: "Professional minor treatments delivered in a clean, safe, and comfortable environment.",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Chinedu Oriaku Ogbafianu.",
      text: "Doctors are really good and cared for and listened to. The staff were professional from start to finish.",
      stars: 5,
    },
    {
      name: "Amarachi Emele",
      text: "Professional staff and a very clean environment. I highly recommend.",
      stars: 5,
    },
    {
      name: "Blessing E.",
      text: "I didn't have to wait long. The service was friendly, organized, and efficient.",
      stars: 5,
    },
  ];

  const handleBookingChange = (
    field: keyof BookingData,
    value: string
  ) => {
    setBooking((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsBooking(true);
    setBookingMessage("");
    setBookingSuccess(false);

    try {
      const response = await simulateBookingAPI(booking);

      if (response.success) {
        setBookingSuccess(true);
        setBookingMessage(
          "Booking sent successfully. We will get back to you shortly."
        );

        setBooking({
          name: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch {
      setBookingMessage(
        "Something went wrong. Please try again or call the clinic."
      );
    } finally {
      setIsBooking(false);
    }
  };

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = newsletterEmail.trim();

    if (!email) {
      setNewsletterSuccess(false);
      setNewsletterMessage("Please enter your email address.");
      return;
    }

    setNewsletterSuccess(true);
    setNewsletterMessage(
      "Sent successfully. We will get back to you."
    );
    setNewsletterEmail("");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Your Health And You Clinics home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-100">
              <HeartPulse className="h-6 w-6" />
            </div>

            <div className="leading-none">
              <span className="block text-lg font-extrabold tracking-tight text-slate-900">
                YOUR HEALTH
              </span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">
                And You Clinics
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="font-medium text-slate-600 transition hover:text-blue-600">
              About
            </a>
            <a href="#services" className="font-medium text-slate-600 transition hover:text-blue-600">
              Services
            </a>
            <a href="#contact" className="font-medium text-slate-600 transition hover:text-blue-600">
              Contact
            </a>

            <a
              href="tel:+2348069300842"
              className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              <Phone size={17} />
              Call Now
            </a>

            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-100 bg-white p-4 shadow-lg md:hidden">
            <div className="space-y-2">
              <a href="#about" onClick={closeMenu} className="block rounded-lg px-4 py-3 font-medium hover:bg-slate-50">
                About
              </a>
              <a href="#services" onClick={closeMenu} className="block rounded-lg px-4 py-3 font-medium hover:bg-slate-50">
                Services
              </a>
              <a href="#contact" onClick={closeMenu} className="block rounded-lg px-4 py-3 font-medium hover:bg-slate-50">
                Contact
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 block rounded-lg bg-blue-600 px-4 py-3 text-center font-bold text-white"
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="z-10 lg:w-1/2">
            

            <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 lg:text-6xl">
              Quality Healthcare
              <br />
              <span className="text-blue-600">You Can Trust</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600">
              Experience compassionate care, modern facilities, and a
              dedicated team of professionals focused on your wellbeing.
              Your health comes first always.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Schedule Appointment
                <ArrowRight size={20} />
              </a>

              <a
                href="tel:+2348069300842"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                <Phone size={20} />
                Call Clinic
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-emerald-500" />
                Professional staff
              </span>
              <span className="flex items-center gap-2">
                <CircleCheck className="h-4 w-4 text-emerald-500" />
                Modern facilities
              </span>
            </div>
          </div>

          {/* Medical video */}
          <div className="relative w-full lg:w-1/2">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-100/70 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
              <iframe
                className="h-[430px] w-full lg:h-[540px]"
                src="https://www.youtube.com/embed/tT3JwqEgOuw?autoplay=1&mute=1&loop=1&playlist=tT3JwqEgOuw&controls=0&playsinline=1&rel=0"
                title="Modern hospital medical equipment"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold">Modern Healthcare Environment</p>
                    <p className="text-sm text-slate-200">
                      Technology supporting quality patient care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                About our clinic
              </div>

              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
                Patient-first healthcare for the Aba community
              </h2>

              <p className="mb-7 text-lg leading-relaxed text-slate-600">
                At Your Health And You Clinics, we believe quality healthcare
                should be accessible, respectful, and centered around every
                patient. Our team is dedicated to delivering professional
                medical care in a welcoming environment.
              </p>

              <div className="space-y-4">
                {[
                  "Experienced medical professionals",
                  "Clean, safe, and welcoming environment",
                  "Fast and attentive service",
                  "Modern equipment and healthcare facilities",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="shrink-0 text-emerald-500" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-2 text-4xl font-extrabold text-blue-600">19+</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Specialists
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-2 text-4xl font-extrabold text-emerald-500">24/7</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Emergency
                </p>
              </div>

              <div className="col-span-2 rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <h3 className="mb-2 text-4xl font-extrabold text-slate-800">12,050+</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Patients Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What we provide
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
              Our Medical Services
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Professional healthcare services designed to meet the needs of
              individuals and families in Abia State.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-slate-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="overflow-hidden bg-slate-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
              Patient experiences
            </div>
            <h2 className="text-3xl font-extrabold lg:text-4xl">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-5 flex text-emerald-400">
                  {Array.from({ length: testimonial.stars }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>

                <p className="mb-7 text-lg leading-relaxed text-slate-300">
                  "{testimonial.text}"
                </p>

                <p className="font-bold text-emerald-400">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Booking */}
      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Get in touch
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 lg:text-4xl">
              Visit Our Clinic
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Need an appointment? Send a request and our team will get back to
              you within seconds.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Location */}
            <div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Location</h4>
                    <p className="mt-1 text-slate-600">
                      131 Caleb Street, Aba, 450101, Abia, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Clock3 />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Working Hours</h4>
                    <p className="mt-1 text-slate-600">
                      Mon - Sat: 8:00 AM - 8:00 PM
                    </p>
                    <p className="text-slate-600">
                      Emergency: 24/7 Available
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Phone</h4>
                    <a
                      href="tel:+2348069300842"
                      className="mt-1 block text-slate-600 hover:text-blue-600"
                    >
                      +234 806 930 0842
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  title="Your Health And You Clinics location"
                  src="https://www.google.com/maps?q=131%20Caleb%20Street,%20Aba,%20Abia,%20Nigeria&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <p className="mt-3 text-sm text-slate-400">
                Use the map controls to zoom, pan, and explore the area.
              </p>
            </div>

            {/* Booking Form */}
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm sm:p-8">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <CalendarDays />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Book an Appointment</h3>
                  <p className="text-sm text-slate-500">
                    Submit your request online.
                  </p>
                </div>
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={booking.name}
                    onChange={(e) => handleBookingChange("name", e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={booking.phone}
                    onChange={(e) => handleBookingChange("phone", e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <select
                  value={booking.service}
                  onChange={(e) => handleBookingChange("service", e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service.title} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </select>

                <textarea
                  rows={4}
                  placeholder="How can we help you? Describe your problem..."
                  value={booking.message}
                  onChange={(e) => handleBookingChange("message", e.target.value)}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                {bookingMessage && (
                  <div
                    className={`rounded-xl border p-4 text-sm font-semibold ${
                      bookingSuccess
                        ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                        : "border-red-100 bg-red-50 text-red-700"
                    }`}
                  >
                    {bookingMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isBooking}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isBooking ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Confirm Booking
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  Once booking is confirmed we will schedule an appointment with you.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-blue-600 px-6 py-16 text-center text-white shadow-2xl sm:px-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative z-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <HeartPulse />
            </div>

            <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
              Take control of your health today
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-blue-100">
              Our professional team is ready to provide the quality care you
              deserve right here in Aba.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 transition hover:bg-emerald-50"
            >
              Book Appointment Now
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 pb-8 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <span className="font-extrabold text-slate-900">
                  Your Health And You
                </span>
              </div>

              <p className="max-w-sm leading-relaxed text-slate-500">
                Your health comes first always. Quality healthcare you can
                trust in the heart of Aba.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-slate-900">Quick Links</h4>
              <ul className="space-y-3 text-slate-500">
                <li>
                  <a href="#home" className="hover:text-blue-600">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-600">About Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-600">Our Services</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-600">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-bold text-slate-900">Newsletter</h4>
              <p className="mb-4 text-sm text-slate-500">
                Receive occasional healthcare updates from our clinic.
              </p>

              <form onSubmit={handleNewsletter}>
                <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white p-1">
                  <Mail className="ml-3 mt-3 h-5 w-5 shrink-0 text-slate-400" />

                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      setNewsletterMessage("");
                      setNewsletterSuccess(false);
                    }}
                    placeholder="Your email address"
                    aria-label="Email address"
                    required
                    className="min-w-0 flex-1 bg-transparent px-3 py-2.5 outline-none"
                  />

                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                {newsletterMessage && (
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      newsletterSuccess
                        ? "text-emerald-600"
                        : "text-red-600"
                    }`}
                  >
                    {newsletterMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-400">
            © 2026 Your Health And You Clinics. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/2348069300842"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Your Health And You Clinics on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-emerald-500 p-4 text-white shadow-2xl transition hover:bg-emerald-600"
      >
        <MessageCircle size={27} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-all duration-500 group-hover:max-w-xs">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default LandingPage;
