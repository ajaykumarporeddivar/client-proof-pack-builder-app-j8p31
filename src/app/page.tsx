export const metadata = { title: 'Client Proof Pack Builder — Simplify Client Reporting', description: 'Streamline your client reporting with our intuitive proof pack builder' }

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <div className="rounded-full bg-zinc-900 p-2">
            <span className="text-zinc-100 font-bold">CPPB</span>
          </div>
          <span className="text-zinc-900 font-bold ml-2">Client Proof Pack Builder</span>
        </div>
        <div className="flex items-center">
          <a href="#features" className="text-zinc-600 hover:text-zinc-900 transition duration-200">Features</a>
          <a href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition duration-200 ml-4">Pricing</a>
          <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2 ml-4 hover:bg-zinc-700 transition duration-200">Open Dashboard →</a>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
      <div className="rounded-full bg-zinc-100 p-2 text-zinc-900 font-bold text-sm mb-4">AI-Powered SaaS</div>
      <h1 className="font-black text-5xl md:text-7xl tracking-tight leading-none">Simplify Client Reporting</h1>
      <p className="text-zinc-400 text-xl mt-4">Streamline your client reporting with our intuitive proof pack builder</p>
      <div className="flex items-center justify-center space-x-4 mt-8">
        <a href="/dashboard" className="bg-white text-zinc-900 font-bold rounded-xl px-8 py-4 shadow-lg hover:shadow-xl transition duration-200">Start Free Today →</a>
        <a href="/dashboard" className="border border-zinc-600 text-zinc-300 rounded-xl px-8 py-4 hover:bg-zinc-800 transition duration-200">See It Live →</a>
      </div>
      <div className="rounded-2xl bg-zinc-800/50 border border-zinc-700 p-6 max-w-3xl mx-auto mt-12">
        <div className="bg-zinc-700 p-2 rounded-md animate-pulse"></div>
        <div className="bg-indigo-500 p-2 rounded-md mt-4"></div>
        <div className="bg-emerald-500 p-2 rounded-md mt-4"></div>
        <div className="bg-zinc-700 p-2 rounded-md mt-4 animate-pulse"></div>
      </div>
    </section>
  )
}

function SocialProofBar() {
  return (
    <div className="bg-zinc-800/30 border-y border-zinc-700/50 py-8 flex items-center justify-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="font-black text-white text-3xl">10,000+</span>
        <span className="text-zinc-400 text-sm">Users</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-black text-white text-3xl">99.9%</span>
        <span className="text-zinc-400 text-sm">Uptime</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-black text-white text-3xl">$50M+</span>
        <span className="text-zinc-400 text-sm">Processed</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="font-black text-white text-3xl">4.9★</span>
        <span className="text-zinc-400 text-sm">Rating</span>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center">Everything you need to simplify client reporting</h2>
      <p className="text-zinc-500 mt-3 text-center max-w-2xl mx-auto">Streamline your client reporting with our intuitive proof pack builder</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition duration-200">
          <div className="bg-indigo-100 p-3 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m6 2h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 7h6v12H9V7z" />
            </svg>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Automated Proof Pack Creation</h3>
          <p className="text-zinc-600">Create client-ready proof packs in minutes, not hours</p>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition duration-200">
          <div className="bg-indigo-100 p-3 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m6 2h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 7h6v12H9V7z" />
            </svg>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Centralized Campaign Result Tracking</h3>
          <p className="text-zinc-600">Track all your campaign results in one place</p>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 hover:shadow-md transition duration-200">
          <div className="bg-indigo-100 p-3 rounded-xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m6 2h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 7h6v12H9V7z" />
            </svg>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Customizable Proof Pack Templates</h3>
          <p className="text-zinc-600">Create custom proof pack templates to fit your agency's brand</p>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="bg-zinc-50 py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center">How Client Proof Pack Builder works</h2>
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4 mt-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-indigo-100 p-3 rounded-xl">
            <span className="text-indigo-500 font-bold text-3xl">1</span>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Connect your data sources</h3>
          <p className="text-zinc-600">Connect your data sources, such as Google Analytics, Facebook Ads, and more</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-indigo-100 p-3 rounded-xl">
            <span className="text-indigo-500 font-bold text-3xl">2</span>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Create your proof pack</h3>
          <p className="text-zinc-600">Create your proof pack using our intuitive drag-and-drop editor</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="bg-indigo-100 p-3 rounded-xl">
            <span className="text-indigo-500 font-bold text-3xl">3</span>
          </div>
          <h3 className="text-zinc-900 font-bold mb-2">Share with your clients</h3>
          <p className="text-zinc-600">Share your proof pack with your clients and showcase your results</p>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="bg-white py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center">Simple, transparent pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
          <h3 className="text-zinc-900 font-bold mb-2">Free</h3>
          <p className="text-zinc-600 mb-4">$0/mo</p>
          <ul className="list-disc space-y-2">
            <li>1 workspace</li>
            <li>1 user</li>
            <li>Limited features</li>
          </ul>
          <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2 mt-4 hover:bg-zinc-700 transition duration-200">Get Started</a>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6 scale-105">
          <h3 className="text-zinc-900 font-bold mb-2"></h3>
          <p className="text-zinc-600 mb-4">$49/mo</p>
          <ul className="list-disc space-y-2">
            <li>Unlimited workspaces</li>
            <li>Unlimited users</li>
            <li>Full features</li>
          </ul>
          <a href="/dashboard" className="bg-zinc-900 text-white rounded-lg px-4 py-2 mt-4 hover:bg-zinc-700 transition duration-200">Subscribe</a>
        </div>
        <div className="bg-zinc-50 rounded-2xl border border-zinc-100 p-6">
          <h3 className="text-zinc-900 font-bold mb-2">Enterprise</h3>
          <p className="text-zinc-600 mb-4">Custom pricing</p>
          <ul className="list-disc space-y-2">
            <li>Everything in Pro</li>
            <li>SLA and support</li>
            <li>Custom features</li>
          </ul>
          <a href="/contact" className="bg-zinc-900 text-white rounded-lg px-4 py-2 mt-4 hover:bg-zinc-700 transition duration-200">Contact Us</a>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-zinc-50 py-24 px-6">
      <h2 className="text-zinc-900 font-black text-4xl text-center">What our customers say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-2xl border border-zinc-100 p-6">
          <p className="text-zinc-600 mb-4">Client Proof Pack Builder has been a game-changer for our agency. We can now create beautiful proof packs in minutes, not hours.</p>
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-bold">Emily Lee</span>
            <span className="text-zinc-600">Account Manager at XYZ Agency</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-6">
          <p className="text-zinc-600 mb-4">I was blown away by the ease of use and the quality of the proof packs. Client Proof Pack Builder has saved us so much time and effort.</p>
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-bold">Ryan Kim</span>
            <span className="text-zinc-600">Founder at ABC Agency</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-zinc-100 p-6">
          <p className="text-zinc-600 mb-4">The support team at Client Proof Pack Builder is top-notch. They helped us get set up and running in no time.</p>
          <div className="flex items-center space-x-2">
            <span className="text-zinc-900 font-bold">Alex Chen</span>
            <span className="text-zinc-600">Digital Agency Owner at DEF Agency</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6 text-center">
      <h2 className="font-black text-5xl md:text-7xl tracking-tight leading-none">Launch Your Dashboard →</h2>
      <p className="text-zinc-400 text-xl mt-4">Get started with Client Proof Pack Builder today and simplify your client reporting</p>
      <a href="/dashboard" className="bg-white text-indigo-900 font-bold rounded-lg px-4 py-2 mt-4 hover:bg-indigo-100 transition duration-200">Launch Dashboard →</a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="rounded-full bg-zinc-100 p-2">
            <span className="text-zinc-900 font-bold">CPPB</span>
          </div>
          <span className="text-zinc-900 font-bold ml-2">Client Proof Pack Builder</span>
          <span className="text-zinc-400 text-sm ml-2">Built with NEXUS OS</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#features" className="text-zinc-400 hover:text-zinc-100 transition duration-200">Features</a>
          <a href="#pricing" className="text-zinc-400 hover:text-zinc-100 transition duration-200">Pricing</a>
          <a href="/dashboard" className="text-zinc-400 hover:text-zinc-100 transition duration-200">Dashboard</a>
        </div>
      </div>
      <div className="text-zinc-400 text-sm text-center mt-4">
        &copy; 2025 Client Proof Pack Builder. All rights reserved.
      </div>
    </footer>
  )
}

function Page() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SocialProofBar />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default Page