const platforms = [
  { 
    name: "Apple Music", 
    url: "https://music.apple.com/us/artist/cafe-de-anatolia/1372074406", 
    icon: "/img/platforms/itunes.png",
    description: "Stream on Apple Music"
  },
  { 
    name: "Beatport", 
    url: "https://www.beatport.com/label/cafe-de-anatolia/65092", 
    icon: "/img/platforms/beatport.png",
    description: "Exclusive releases on Beatport"
  },
  { 
    name: "Spotify", 
    url: "https://open.spotify.com/artist/2sSSGlRMfz4ZEcw4rw0m0v", 
    icon: "/img/platforms/spotify.png",
    description: "Stream on Spotify"
  },
  { 
    name: "Amazon", 
    url: "https://www.amazon.com/s?k=cafe+de+anatolia&i=digital-music&ref=nb_sb_noss_2", 
    icon: "/img/platforms/amazon.png",
    description: "Buy on Amazon"
  },
  { 
    name: "Traxsource", 
    url: "https://www.traxsource.com/label/35200/cafe-de-anatolia", 
    icon: "/img/platforms/traxsource.png",
    description: "Download on Traxsource"
  },
  { 
    name: "JunoDownload", 
    url: "https://www.junodownload.com/labels/Cafe+De+Anatolia/", 
    icon: "/img/platforms/junodownload.png",
    description: "Download on JunoDownload"
  },
  { 
    name: "SoundCloud", 
    url: "https://soundcloud.com/cafedeanatolia", 
    icon: "/img/platforms/soundcloud.png",
    description: "Listen on SoundCloud"
  },
  { 
    name: "Facebook", 
    url: "https://www.facebook.com/CafeDeAnatolia/", 
    icon: "/img/platforms/facebook.png",
    description: "Follow on Facebook"
  },
  { 
    name: "Instagram", 
    url: "https://www.instagram.com/cafedeanatolia/", 
    icon: "/img/platforms/instagram.png",
    description: "Follow on Instagram"
  },
];

const youtubeChannels = [
  { 
    name: "Cafe De Anatolia OFFICIAL", 
    url: "https://www.youtube.com/channel/UC1Tr6S-XLBk1NzNX1jErWMg",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia ETHNO WORLD", 
    url: "https://www.youtube.com/channel/UCrJ9Cdr93XCbU_waM0gbBqQ",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia LOUNGE", 
    url: "https://www.youtube.com/channel/UCehwgzlM3jtgWJjkIUgyITw",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia CHILL", 
    url: "https://www.youtube.com/channel/UCnKq9RD9agkJ6Aztw9Sl_yg",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia SONGS", 
    url: "https://www.youtube.com/channel/UCbeBZM7pkb8UmzAz-Sy39og",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia MEDITATION & ASMR", 
    url: "https://www.youtube.com/channel/UC86l1841W0yFWt7pW9lHHuQ",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia CAMEL", 
    url: "https://www.youtube.com/channel/UCwzwODzBxzW_Cg1LrZWauyw",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia HOUSE", 
    url: "https://www.youtube.com/user/PROpermOo",
    icon: "/img/platforms/youtube.png"
  },
  { 
    name: "Cafe De Anatolia AODION", 
    url: "https://www.youtube.com/channel/UC0_H-4C7skGgytChmXCdqqQ",
    icon: "/img/platforms/youtube.png"
  },
];

export default function ReleasesPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gold">Releases</h1>

        {/* Music Platforms */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Find Our Releases On</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-gold group"
              >
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className="h-12 md:h-16 mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-gold font-medium">{platform.name}</span>
                <span className="text-sm text-gray-400 text-center mt-1">{platform.description}</span>
              </a>
            ))}
          </div>
        </section>

        {/* YouTube Channels */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-white">YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-white/10 hover:border-gold group"
              >
                <img
                  src={channel.icon}
                  alt={channel.name}
                  className="h-12 w-12 mr-4 opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div>
                  <h3 className="text-gold font-bold group-hover:text-white transition-colors">Cafe De Anatolia</h3>
                  <span className="text-sm text-gray-400">{channel.name}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
