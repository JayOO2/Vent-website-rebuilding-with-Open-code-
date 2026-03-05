import Link from "next/link";

const socialLinks = [
  { name: "Spotify", url: "https://open.spotify.com/artist/2sSSGlRMfz4ZEcw4rw0m0v" },
  { name: "Facebook", url: "https://www.facebook.com/CafeDeAnatolia/" },
  { name: "SoundCloud", url: "https://soundcloud.com/cafedeanatolia" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UC1Tr6S-XLBk1NzNX1jErWMg" },
  { name: "Instagram", url: "https://www.instagram.com/cafedeanatolia/" },
  { name: "Twitter", url: "https://twitter.com/cafedeanatolia" },
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

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Platform Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
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
                className="h-8 md:h-10 w-auto opacity-70 hover:opacity-100"
              />
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm text-gray-400 hover:text-gold transition-colors duration-200"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>All rights reserved © {new Date().getFullYear()} Cafe De Anatolia</p>
          <p className="mt-2 text-xs">
            Image provided by{" "}
            <a 
              href="https://de.wikipedia.org/wiki/Datei:Oman_2010_wahiba_sands_nomads.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              D7031tg
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
