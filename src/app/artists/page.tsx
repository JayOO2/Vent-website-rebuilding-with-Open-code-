"use client";

import { useState, useEffect } from "react";

interface Artist {
  id: number;
  name: string;
  image: string;
}

const defaultArtists = [
  { id: 1, name: "Billy Esteban", image: "https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg" },
  { id: 2, name: "Nickarth/Rialians On Earth", image: "https://cafe-de-anatolia.com/img/uploads/724102938_ae26c1a725b98fa3f71d7ccd9d34bf1d01bc20c5.jpg" },
  { id: 3, name: "Dj Nil", image: "https://cafe-de-anatolia.com/img/uploads/276685172_2.jpg" },
  { id: 4, name: "Ferhat Sonsöz", image: "https://cafe-de-anatolia.com/img/uploads/433579432_6.jpg" },
  { id: 5, name: "Nikko Sunset", image: "https://cafe-de-anatolia.com/img/uploads/238127530_7.jpg" },
  { id: 6, name: "Belonoga", image: "https://cafe-de-anatolia.com/img/uploads/211015865_10.jpg" },
  { id: 7, name: "Laroz Camel Rider (Haim)", image: "https://cafe-de-anatolia.com/img/uploads/641848717_5.jpg" },
  { id: 8, name: "Mozkai", image: "https://cafe-de-anatolia.com/img/uploads/672889992_mozkai.jpg" },
  { id: 9, name: "Maido Project", image: "https://cafe-de-anatolia.com/img/uploads/409010119_15401099_1367901859909227_3821608120692987165_n.jpg" },
  { id: 10, name: "David & Diane Arkenstone", image: "https://cafe-de-anatolia.com/img/uploads/504495700_david and diane arkenstone.jpg" },
  { id: 11, name: "Michael E", image: "https://cafe-de-anatolia.com/img/uploads/146616168_michaele.jpg" },
  { id: 12, name: "Dj Brahms", image: "https://cafe-de-anatolia.com/img/uploads/859744410_27721025_10208839307179931_1430100179_n.jpg" },
  { id: 13, name: "Nasser Shibani", image: "https://cafe-de-anatolia.com/img/uploads/396527598_19665573_10158943957030542_4886876026760142688_n.jpg" },
  { id: 14, name: "Il Santo", image: "https://cafe-de-anatolia.com/img/uploads/917973279_il santo.jpg" },
  { id: 15, name: "Jasmon", image: "https://cafe-de-anatolia.com/img/uploads/353750719_12729278_1654827814767972_5956070997278266853_n.jpg" },
  { id: 16, name: "ThroDef", image: "https://cafe-de-anatolia.com/img/uploads/670349142_thro def.jpg" },
  { id: 17, name: "Dj Maretimo", image: "https://cafe-de-anatolia.com/img/uploads/220552874_dj maretimo.jpg" },
  { id: 18, name: "Oliver Petkovski", image: "https://cafe-de-anatolia.com/img/uploads/601328477_oliver petkovski.jpg" },
  { id: 19, name: "Pep Llado", image: "https://cafe-de-anatolia.com/img/uploads/916221111_pep-llado.jpg" },
  { id: 20, name: "7even (GR)", image: "https://cafe-de-anatolia.com/img/uploads/375142867_seven.jpg" },
  { id: 21, name: "Dj KhaiKhan", image: "https://cafe-de-anatolia.com/img/uploads/953654408_avatars-000097785513-0w19vv-t500x500.jpg" },
  { id: 22, name: "Dejan Vizant", image: "https://cafe-de-anatolia.com/img/uploads/590474572_dejan vizant.jpg" },
  { id: 23, name: "Dzika", image: "https://cafe-de-anatolia.com/img/uploads/177784432_dzika.jpg" },
  { id: 24, name: "Lemongrass", image: "https://cafe-de-anatolia.com/img/uploads/951859941_lemongrass.jpg" },
  { id: 25, name: "Berkhan Baser", image: "https://cafe-de-anatolia.com/img/uploads/412454486_4.jpg" },
  { id: 26, name: "Yulia Niko", image: "https://cafe-de-anatolia.com/img/uploads/141687782_niko.jpg" },
  { id: 27, name: "Omar Gharbi", image: "https://cafe-de-anatolia.com/img/uploads/276319665_omar.jpg" },
  { id: 28, name: "Project Blue Sun", image: "https://cafe-de-anatolia.com/img/uploads/342606192_project blue sun.jpg" },
  { id: 29, name: "Manuel Defil", image: "https://cafe-de-anatolia.com/img/uploads/767003321_manuel defil.jpg" },
  { id: 30, name: "Mario Dreamers Inc", image: "https://cafe-de-anatolia.com/img/uploads/296546978_b6d1-9834-49bd-95a8-19845fb182d6.jpg" },
  { id: 31, name: "Dj Professor", image: "https://cafe-de-anatolia.com/img/uploads/557391669_119757892_686353802232891_4192961210306849386_n.jpg" },
  { id: 32, name: "Stan Kolev", image: "https://cafe-de-anatolia.com/img/uploads/479503715_stan kolev.jpg" },
  { id: 33, name: "Andre Rizo", image: "https://cafe-de-anatolia.com/img/uploads/774996635_40389349_2155833797822595_1008162479458484224_n.jpg" },
  { id: 34, name: "Elias Fassos", image: "https://cafe-de-anatolia.com/img/uploads/488485195_eliass fassos.jpg" },
  { id: 35, name: "Kerem Gell", image: "https://cafe-de-anatolia.com/img/uploads/204479772_kerem gell.jpg" },
  { id: 36, name: "Michel Le Fleur", image: "https://cafe-de-anatolia.com/img/uploads/162117324_40446988_2095712423773930_5211698709229731840_n.jpg" },
  { id: 37, name: "Ali Baba", image: "https://cafe-de-anatolia.com/img/uploads/464515347_ali baba.jpg" },
  { id: 38, name: "Maidoproject", image: "https://cafe-de-anatolia.com/img/uploads/324090758_maidoproject.jpg" },
  { id: 39, name: "Fabrizio Parisi", image: "https://cafe-de-anatolia.com/img/uploads/720794134_fabrizio parisi.jpg" },
  { id: 40, name: "Tebra", image: "https://cafe-de-anatolia.com/img/uploads/324778790_tebra.jpg" },
  { id: 41, name: "Dj Mascota D", image: "https://cafe-de-anatolia.com/img/uploads/636579580_mascota d.jpg" },
  { id: 42, name: "Dimka", image: "https://cafe-de-anatolia.com/img/uploads/763030431_dimka.jpg" },
  { id: 43, name: "Calavera Manya", image: "https://cafe-de-anatolia.com/img/uploads/235351749_calavera manya.png" },
  { id: 44, name: "Lèrr", image: "https://cafe-de-anatolia.com/img/uploads/808171208_lerr.jpg" },
  { id: 45, name: "Kankin", image: "https://cafe-de-anatolia.com/img/uploads/563394543_kankin.jpg" },
  { id: 46, name: "Nora Projekt", image: "https://cafe-de-anatolia.com/img/uploads/161897544_nora projekt.jpg" },
  { id: 47, name: "Serdar Ayyildiz", image: "https://cafe-de-anatolia.com/img/uploads/473956165_serdae ayyildiz.jpg" },
  { id: 48, name: "Dogan Sezen", image: "https://cafe-de-anatolia.com/img/uploads/811402295_a_blank_black_picture.jpg" },
  { id: 49, name: "Mladen Mande", image: "https://cafe-de-anatolia.com/img/uploads/148821824_mladen mande.png" },
  { id: 50, name: "Phanoman", image: "https://cafe-de-anatolia.com/img/uploads/273500666_a_blank_black_picture.jpg" },
];

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    const savedArtists = localStorage.getItem("cafeArtists");
    if (savedArtists) {
      setArtists(JSON.parse(savedArtists));
    } else {
      setArtists(defaultArtists);
    }
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gold">Artists</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          For booking inquiries, contact:{" "}
          <a href="mailto:bookings@cafe-de-anatolia.com" className="text-gold hover:underline">
            bookings@cafe-de-anatolia.com
          </a>
        </p>

        {artists.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p>No artists to display.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artists.map((artist, index) => (
              <div 
                key={index}
                className="group bg-white/5 hover:bg-white/10 rounded-lg overflow-hidden transition-all duration-300 border border-white/10 hover:border-gold"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gold group-hover:text-white transition-colors">
                    {artist.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
