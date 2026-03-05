interface Product {
  id: number;
  name: string;
  artist: string;
  price: string;
  image: string;
  store: string;
  url: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Best of Cafe De Anatolia",
    artist: "Various Artists",
    price: "$9.99",
    image: "https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg",
    store: "Amazon",
    url: "https://www.amazon.com/Best-Cafe-Anatolia-Various-artists/dp/B079XX75YD",
  },
  {
    id: 2,
    name: "Oriental Dreams",
    artist: "Billy Esteban",
    price: "$12.99",
    image: "https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg",
    store: "Beatport",
    url: "https://www.beatport.com/label/cafe-de-anatolia/65092",
  },
  {
    id: 3,
    name: "Chill Out Vol. 5",
    artist: "Various Artists",
    price: "$14.99",
    image: "https://cafe-de-anatolia.com/img/uploads/724102938_ae26c1a725b98fa3f71d7ccd9d34bf1d01bc20c5.jpg",
    store: "Traxsource",
    url: "https://www.traxsource.com/label/35200/cafe-de-anatolia",
  },
  {
    id: 4,
    name: "Ethno House Collection",
    artist: "Dj Nil",
    price: "$8.99",
    image: "https://cafe-de-anatolia.com/img/uploads/276685172_2.jpg",
    store: "JunoDownload",
    url: "https://www.junodownload.com/labels/Cafe+De+Anatolia/",
  },
  {
    id: 5,
    name: "Meditation & ASMR",
    artist: "Various Artists",
    price: "$11.99",
    image: "https://cafe-de-anatolia.com/img/uploads/433579432_6.jpg",
    store: "Apple Music",
    url: "https://music.apple.com/ca/album/best-of-cafe-de-anatolia/1350689388",
  },
  {
    id: 6,
    name: "Summer Vibes 2026",
    artist: "Nikko Sunset",
    price: "$9.99",
    image: "https://cafe-de-anatolia.com/img/uploads/238127530_7.jpg",
    store: "Spotify",
    url: "https://open.spotify.com/artist/2sSSGlRMfz4ZEcw4rw0m0v",
  },
];

const externalStores = [
  { name: "Official Shop", url: "http://shop.cafe-de-anatolia.com/", icon: "🛒" },
  { name: "Beatport", url: "https://www.beatport.com/label/cafe-de-anatolia/65092/releases", icon: "🎵" },
  { name: "Traxsource", url: "https://www.traxsource.com/label/35200/cafe-de-anatolia", icon: "💿" },
  { name: "JunoDownload", url: "https://www.junodownload.com/labels/Cafe+De+Anatolia/", icon: "📀" },
  { name: "Amazon", url: "https://www.amazon.com/s?k=cafe+de+anatolia", icon: "📦" },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gold">E-Shop</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Browse our music releases and merchandise from our partner stores
        </p>

        {/* External Store Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Partner Stores</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {externalStores.map((store) => (
              <a
                key={store.name}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/10 hover:border-gold"
              >
                <span className="text-2xl">{store.icon}</span>
                <span className="font-medium">{store.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Featured Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/10"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-gold uppercase tracking-wider">{product.store}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{product.name}</h3>
                  <p className="text-gray-400 text-sm">{product.artist}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-gold">{product.price}</span>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gold text-primary font-semibold rounded-md hover:bg-white transition-colors"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Merchandise</h2>
          <div className="bg-white/5 rounded-lg p-8 border border-white/10 text-center">
            <p className="text-gray-400 mb-4">
              Check out our official merchandise including t-shirts, hoodies, and accessories
            </p>
            <a
              href="http://shop.cafe-de-anatolia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gold text-primary font-bold rounded-md hover:bg-white transition-colors"
            >
              Visit Merch Store
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
