import Link from "next/link";

const socialLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/2sSSGlRMfz4ZEcw4rw0m0v", icon: "🎵" },
  { name: "Facebook", url: "https://www.facebook.com/CafeDeAnatolia/", icon: "📘" },
  { name: "SoundCloud", url: "https://soundcloud.com/cafedeanatolia", icon: "☁️" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UC1Tr6S-XLBk1NzNX1jErWMg", icon: "📺" },
  { name: "Instagram", url: "https://www.instagram.com/cafedeanatolia/", icon: "📷" },
  { name: "Twitter", url: "https://twitter.com/cafedeanatolia", icon: "🐦" },
];

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/artist/2sSSGlRMfz4ZEcw4rw0m0v", icon: "/img/platforms/spotify.png" },
  { name: "Apple Music", url: "https://music.apple.com/ca/album/best-of-cafe-de-anatolia/1350689388", icon: "/img/platforms/itunes.png" },
  { name: "Beatport", url: "https://www.beatport.com/label/cafe-de-anatolia/65092/releases", icon: "/img/platforms/beatport.png" },
  { name: "Traxsource", url: "https://www.traxsource.com/label/35200/cafe-de-anatolia", icon: "/img/platforms/traxsource.png" },
  { name: "JunoDownload", url: "https://www.junodownload.com/labels/Cafe+De+Anatolia/", icon: "/img/platforms/junodownload.png" },
  { name: "Amazon", url: "https://www.amazon.com/Best-Cafe-Anatolia-Various-artists/dp/B079XX75YD", icon: "/img/platforms/amazon.png" },
  { name: "Deezer", url: "https://www.deezer.com/en/artist/14705919", icon: "/img/platforms/deezer.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="https://cafe-de-anatolia.com/img/logo.png" 
              alt="Cafe De Anatolia" 
              className="w-64 md:w-80 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gold tracking-wider">
            Feel the Touch of the Orient
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Cafe De Anatolia is a Record Label and Artists Management Agency producing the best mixture of genres & the highest quality of Chill Out, Ethno, Deep House & Oriental Music.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="text-sm">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-primary/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gold">Find Our Music On</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <img 
                  src={platform.icon} 
                  alt={platform.name}
                  className="h-12 md:h-16 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/releases"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-all duration-300 border border-white/10 hover:border-gold"
            >
              <h3 className="text-2xl font-bold mb-2 text-gold group-hover:text-white">Releases</h3>
              <p className="text-gray-400">Explore our latest music releases</p>
            </Link>
            
            <Link 
              href="/artists"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-all duration-300 border border-white/10 hover:border-gold"
            >
              <h3 className="text-2xl font-bold mb-2 text-gold group-hover:text-white">Artists</h3>
              <p className="text-gray-400">Meet our talented artists</p>
            </Link>
            
            <Link 
              href="/events"
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-lg text-center transition-all duration-300 border border-white/10 hover:border-gold"
            >
              <h3 className="text-2xl font-bold mb-2 text-gold group-hover:text-white">Events</h3>
              <p className="text-gray-400">Check upcoming events & buy tickets</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
