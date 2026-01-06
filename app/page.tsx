import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="min-h-screen hero-gradient overflow-y-auto">
      {isAdmin && <PasskeyModal />}

      {/* Main Hero + Form Section - Make it full viewport height */}
      <div className="flex h-screen max-h-screen">
        {/* Hero Section - Left Side */}
        <section className="hidden lg:flex flex-1 flex-col justify-center px-12 xl:px-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 max-w-2xl">
            {/* Logo */}
            <div className="fade-in-up mb-12">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="CarePluse"
                className="h-12 w-fit"
              />
            </div>

            {/* Main Headline */}
            <h1 className="fade-in-delay-1 text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Your Health,{" "}
              <span className="gradient-text">Our Priority</span>
            </h1>

            <p className="fade-in-delay-2 text-xl text-dark-700 mb-12 leading-relaxed">
              Experience world-class healthcare with our team of expert physicians. 
              Book appointments seamlessly and manage your health journey with ease.
            </p>

            {/* Stats Grid */}
            <div className="fade-in-delay-3 grid grid-cols-3 gap-6 mb-8">
              <div className="stat-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">50K+</p>
                    <p className="text-sm text-dark-600">Patients</p>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-400">98%</p>
                    <p className="text-sm text-dark-600">Satisfaction</p>
                  </div>
                </div>
              </div>

              <div className="stat-card">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">24/7</p>
                    <p className="text-sm text-dark-600">Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="fade-in-delay-3 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark-700">Expert physicians across all specialties</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark-700">Instant appointment booking and management</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark-700">Secure and confidential health records</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section - Right Side */}
        <section className="flex-1 lg:max-w-xl xl:max-w-2xl flex items-center justify-center px-6 lg:px-12 relative">
          <div className="w-full max-w-[496px] glass-card p-8 lg:p-10 pulse-glow">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="CarePluse"
                className="h-10 w-fit mx-auto"
              />
            </div>

            <PatientForm />

            <div className="text-14-regular mt-8 flex justify-between items-center">
              <p className="text-dark-600">
                © 2024 CarePluse
              </p>
              <Link href="/?admin=true" className="text-green-500 hover:text-green-400 transition-colors font-medium">
                Admin
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* How It Works Section */}
      <section className="section-container bg-dark-200/50">
        <h2 className="section-title">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="section-subtitle">
          Get started with your healthcare journey in three simple steps
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="text-center">
            <div className="step-number mx-auto">1</div>
            <h3 className="text-2xl font-bold mb-3">Register</h3>
            <p className="text-dark-700">
              Create your account and complete your medical profile with our secure registration form
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="step-number mx-auto">2</div>
            <h3 className="text-2xl font-bold mb-3">Book Appointment</h3>
            <p className="text-dark-700">
              Choose your preferred physician and schedule an appointment at your convenience
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="step-number mx-auto">3</div>
            <h3 className="text-2xl font-bold mb-3">Get Care</h3>
            <p className="text-dark-700">
              Receive expert medical care and manage your health records all in one place
            </p>
          </div>
        </div>
      </section>

      {/* Our Doctors Section */}
      <section className="section-container">
        <h2 className="section-title">
          Meet Our <span className="gradient-text">Expert Physicians</span>
        </h2>
        <p className="section-subtitle">
          World-class healthcare professionals dedicated to your wellbeing
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Doctor 1 */}
          <div className="doctor-card text-center">
            <Image
              src="/assets/images/dr-green.png"
              width={120}
              height={120}
              alt="Dr. Green"
              className="rounded-full mx-auto mb-4 border-2 border-green-500/30"
            />
            <h3 className="text-xl font-bold mb-1">Dr. John Green</h3>
            <p className="text-green-400 text-sm mb-2">Cardiologist</p>
            <p className="text-dark-700 text-sm">15+ years experience</p>
          </div>

          {/* Doctor 2 */}
          <div className="doctor-card text-center">
            <Image
              src="/assets/images/dr-cameron.png"
              width={120}
              height={120}
              alt="Dr. Cameron"
              className="rounded-full mx-auto mb-4 border-2 border-blue-500/30"
            />
            <h3 className="text-xl font-bold mb-1">Dr. Leila Cameron</h3>
            <p className="text-blue-400 text-sm mb-2">Pediatrician</p>
            <p className="text-dark-700 text-sm">12+ years experience</p>
          </div>

          {/* Doctor 3 */}
          <div className="doctor-card text-center">
            <Image
              src="/assets/images/dr-livingston.png"
              width={120}
              height={120}
              alt="Dr. Livingston"
              className="rounded-full mx-auto mb-4 border-2 border-green-500/30"
            />
            <h3 className="text-xl font-bold mb-1">Dr. David Livingston</h3>
            <p className="text-green-400 text-sm mb-2">Neurologist</p>
            <p className="text-dark-700 text-sm">20+ years experience</p>
          </div>

          {/* Doctor 4 */}
          <div className="doctor-card text-center">
            <Image
              src="/assets/images/dr-peter.png"
              width={120}
              height={120}
              alt="Dr. Peter"
              className="rounded-full mx-auto mb-4 border-2 border-blue-500/30"
            />
            <h3 className="text-xl font-bold mb-1">Dr. Evan Peter</h3>
            <p className="text-blue-400 text-sm mb-2">Orthopedic</p>
            <p className="text-dark-700 text-sm">18+ years experience</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container bg-dark-200/50">
        <h2 className="section-title">
          Why Choose <span className="gradient-text">CarePluse</span>
        </h2>
        <p className="section-subtitle">
          Experience healthcare that puts you first with our comprehensive services
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="feature-icon mx-auto">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-dark-700">
              Your health data is encrypted and protected with industry-leading security standards
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
            <div className="feature-icon mx-auto">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
            <p className="text-dark-700">
              Book appointments anytime, anywhere with our round-the-clock online booking system
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
            <div className="feature-icon mx-auto">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Records</h3>
            <p className="text-dark-700">
              Access your complete medical history and test results from any device, anytime
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center">
            <div className="feature-icon mx-auto">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Team</h3>
            <p className="text-dark-700">
              Board-certified physicians with decades of combined experience across all specialties
            </p>
          </div>

          {/* Feature 5 */}
          <div className="text-center">
            <div className="feature-icon mx-auto">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Notifications</h3>
            <p className="text-dark-700">
              Receive SMS and email reminders for upcoming appointments and health updates
            </p>
          </div>

          {/* Feature 6 */}
          <div className="text-center">
            <div className="feature-icon mx-auto">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Service</h3>
            <p className="text-dark-700">
              Minimal wait times with efficient appointment scheduling and streamlined processes
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <h2 className="section-title">
          What Our <span className="gradient-text">Patients Say</span>
        </h2>
        <p className="section-subtitle">
          Real stories from real patients who trust us with their health
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-dark-700 mb-4">
              "CarePluse made booking my appointment so easy! The doctors are professional and caring. Highly recommend!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 font-bold">SJ</span>
              </div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-dark-600">Patient since 2023</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-dark-700 mb-4">
              "The digital health records feature is a game-changer. I can access all my medical history in one place!"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-500 font-bold">MC</span>
              </div>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-sm text-dark-600">Patient since 2022</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-dark-700 mb-4">
              "Outstanding service! The appointment reminders and 24/7 booking system make healthcare so convenient."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 font-bold">EP</span>
              </div>
              <div>
                <p className="font-semibold">Emily Parker</p>
                <p className="text-sm text-dark-600">Patient since 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-300 border-t border-dark-500 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="CarePluse"
              className="h-10 w-fit mb-4"
            />
            <p className="text-dark-700 text-sm">
              Your trusted healthcare partner, providing world-class medical services with compassion and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-dark-700 hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link href="/?admin=true" className="text-dark-700 hover:text-green-500 transition-colors">Admin</Link></li>
              <li><Link href="#" className="text-dark-700 hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-dark-700 hover:text-green-500 transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-dark-700">General Medicine</span></li>
              <li><span className="text-dark-700">Pediatrics</span></li>
              <li><span className="text-dark-700">Cardiology</span></li>
              <li><span className="text-dark-700">Neurology</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-dark-700">
              <li>📧 info@carepluse.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Health St, Medical City</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-dark-500 text-center text-sm text-dark-600">
          <p>© 2024 CarePluse. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

