import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/footworklogo.png"
                alt="Footwork Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-slate-800 font-bold text-xl">
                Footwork
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center pt-20">
        <div className="flex flex-col items-start max-w-md p-7 mt-20">
          <Image
            src="/footworklogo.png"
            alt="Footwork Logo"
            width={80}
            height={80}
            className="mb-6 rounded-2xl shadow-md"
          />
          <h1 className="text-slate-800 font-bold text-4xl leading-tight tracking-tight">
            <div>Footwork: Train</div>
            <div>Soccer Better</div>
          </h1>
          <p className="text-slate-500 font-medium text-lg mt-4">
            Helping 1,200+ players in America and Europe train soccer smarter and better.
          </p>
          <div className="mt-6">
            <a 
              href="https://apps.apple.com/us/app/footwork-train-soccer-better/id6751991495"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105 cursor-pointer inline-block mr-4"
            >
              <Image
                src="/applestorebutton.svg"
                alt="Download on the App Store"
                width={200}
                height={60}
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=app.getfootwork.mobile&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105 cursor-pointer inline-block"
            >
              <Image
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
              />
            </a>
          </div>
        </div>
      </div>
      
      {/* Preview Images Section */}
      <div className="w-full mt-16">
        <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory pl-16 md:pl-32" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-8 pb-4 pr-16" style={{ width: 'max-content' }}>
            <div className="flex-shrink-0 snap-center">
              <Image
                src="/preview1.png"
                alt="App Preview 1"
                width={250}
                height={500}
                className="rounded-2xl border border-slate-200"
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <Image
                src="/preview2.png"
                alt="App Preview 2"
                width={250}
                height={500}
                className="rounded-2xl border border-slate-200"
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <Image
                src="/preview3.png"
                alt="App Preview 3"
                width={250}
                height={500}
                className="rounded-2xl border border-slate-200"
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <Image
                src="/preview4.png"
                alt="App Preview 4"
                width={250}
                height={500}
                className="rounded-2xl border border-slate-200"
              />
            </div>
            <div className="flex-shrink-0 snap-center">
              <Image
                src="/preview5.png"
                alt="App Preview 5"
                width={250}
                height={500}
                className="rounded-2xl border border-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Footwork Section */}
      <section className="w-full mt-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Why Choose Footwork for Soccer Training?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Personalized Training Plans</h3>
                  <p className="text-slate-500 font-medium">Choose your training plan level and get custom soccer training sessions designed for your goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Curated Drill Collection</h3>
                  <p className="text-slate-500 font-medium">Access our curated collection of soccer drills and exercises for all skill levels.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Progress Tracking</h3>
                  <p className="text-slate-500 font-medium">Track your training streak and monitor your soccer development progress.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">100% Free Forever</h3>
                  <p className="text-slate-500 font-medium">Our app is completely free and always will be - no hidden costs or subscriptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TikTok Section */}
      <section className="w-full mt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Follow Our TikTok!
          </h2>
          <p className="text-slate-500 font-medium text-lg mb-8">
            Get soccer training tips, drills, and motivation on our TikTok channel
          </p>
          <a 
            href="https://www.tiktok.com/@footworkapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-transform duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span>Follow @footworkapp</span>
          </a>
        </div>
      </section>
      
      {/* Bottom margin */}
      <div className="h-32"></div>
    </div>
  );
}