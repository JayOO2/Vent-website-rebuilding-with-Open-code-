export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold">Our Story</h1>

        <div className="space-y-8">
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg"
              alt="Cafe De Anatolia"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-gold mb-4">Welcome to Cafe De Anatolia</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Cafe De Anatolia is a premier Record Label and Artists Management Agency that has been 
                at the forefront of the global music scene, producing the finest mixture of genres and 
                the highest quality of Chill Out, Ethno, Deep House, and Oriental Music.
              </p>
              <p>
                Founded with a vision to bridge Eastern and Western musical traditions, we have 
                cultivated a unique sound that resonates with audiences worldwide. Our commitment 
                to excellence has made us a leading name in the world music industry.
              </p>
              <p>
                We represent a diverse roster of talented artists from around the globe, providing 
                them with a platform to showcase their unique sounds and connect with music lovers 
                everywhere.
              </p>
            </div>
          </div>

          {/* Sublabels */}
          <div className="bg-white/5 rounded-lg p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-gold mb-4">Sublabels</h2>
            <div className="space-y-4">
              <a 
                href="https://cafe-de-anatolia.com/aodion"
                className="block p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10 hover:border-gold"
              >
                <h3 className="text-xl font-bold text-white">Aodion Records</h3>
                <p className="text-gray-400 text-sm">Our sublabel focusing on deeper, more experimental sounds</p>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-gold">100+</div>
              <div className="text-sm text-gray-400">Artists</div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-gold">500+</div>
              <div className="text-sm text-gray-400">Releases</div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-gold">1M+</div>
              <div className="text-sm text-gray-400">Monthly Listeners</div>
            </div>
            <div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
              <div className="text-3xl font-bold text-gold">50+</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
