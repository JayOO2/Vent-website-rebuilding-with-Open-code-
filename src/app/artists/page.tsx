import Image from "next/image";

const artists = [
  { name: "Billy Esteban", image: "https://cafe-de-anatolia.com/img/uploads/802145122_billy-esteban---copy.jpg" },
  { name: "Nickarth/Rialians On Earth", image: "https://cafe-de-anatolia.com/img/uploads/724102938_ae26c1a725b98fa3f71d7ccd9d34bf1d01bc20c5.jpg" },
  { name: "Dj Nil", image: "https://cafe-de-anatolia.com/img/uploads/276685172_2.jpg" },
  { name: "Ferhat Sonsöz", image: "https://cafe-de-anatolia.com/img/uploads/433579432_6.jpg" },
  { name: "Nikko Sunset", image: "https://cafe-de-anatolia.com/img/uploads/238127530_7.jpg" },
  { name: "Belonoga", image: "https://cafe-de-anatolia.com/img/uploads/211015865_10.jpg" },
  { name: "Laroz Camel Rider (Haim)", image: "https://cafe-de-anatolia.com/img/uploads/641848717_5.jpg" },
  { name: "Mozkai", image: "https://cafe-de-anatolia.com/img/uploads/672889992_mozkai.jpg" },
  { name: "Maido Project", image: "https://cafe-de-anatolia.com/img/uploads/409010119_15401099_1367901859909227_3821608120692987165_n.jpg" },
  { name: "David & Diane Arkenstone", image: "https://cafe-de-anatolia.com/img/uploads/504495700_david and diane arkenstone.jpg" },
  { name: "Michael E", image: "https://cafe-de-anatolia.com/img/uploads/146616168_michaele.jpg" },
  { name: "Dj Brahms", image: "https://cafe-de-anatolia.com/img/uploads/859744410_27721025_10208839307179931_1430100179_n.jpg" },
  { name: "Nasser Shibani", image: "https://cafe-de-anatolia.com/img/uploads/396527598_19665573_10158943957030542_4886876026760142688_n.jpg" },
  { name: "Il Santo", image: "https://cafe-de-anatolia.com/img/uploads/917973279_il santo.jpg" },
  { name: "Jasmon", image: "https://cafe-de-anatolia.com/img/uploads/353750719_12729278_1654827814767972_5956070997278266853_n.jpg" },
  { name: "ThroDef", image: "https://cafe-de-anatolia.com/img/uploads/670349142_thro def.jpg" },
  { name: "Dj Maretimo", image: "https://cafe-de-anatolia.com/img/uploads/220552874_dj maretimo.jpg" },
  { name: "Oliver Petkovski", image: "https://cafe-de-anatolia.com/img/uploads/601328477_oliver petkovski.jpg" },
  { name: "Pep Llado", image: "https://cafe-de-anatolia.com/img/uploads/916221111_pep-llado.jpg" },
  { name: "7even (GR)", image: "https://cafe-de-anatolia.com/img/uploads/375142867_seven.jpg" },
  { name: "Dj KhaiKhan", image: "https://cafe-de-anatolia.com/img/uploads/953654408_avatars-000097785513-0w19vv-t500x500.jpg" },
  { name: "Dejan Vizant", image: "https://cafe-de-anatolia.com/img/uploads/590474572_dejan vizant.jpg" },
  { name: "Dzika", image: "https://cafe-de-anatolia.com/img/uploads/177784432_dzika.jpg" },
  { name: "Lemongrass", image: "https://cafe-de-anatolia.com/img/uploads/951859941_lemongrass.jpg" },
  { name: "Berkhan Baser", image: "https://cafe-de-anatolia.com/img/uploads/412454486_4.jpg" },
  { name: "Yulia Niko", image: "https://cafe-de-anatolia.com/img/uploads/141687782_niko.jpg" },
  { name: "Omar Gharbi", image: "https://cafe-de-anatolia.com/img/uploads/276319665_omar.jpg" },
  { name: "Project Blue Sun", image: "https://cafe-de-anatolia.com/img/uploads/342606192_project blue sun.jpg" },
  { name: "Manuel Defil", image: "https://cafe-de-anatolia.com/img/uploads/767003321_manuel defil.jpg" },
  { name: "Mario Dreamers Inc", image: "https://cafe-de-anatolia.com/img/uploads/296546978_b6d1-9834-49bd-95a8-19845fb182d6.jpg" },
  { name: "Dj Professor", image: "https://cafe-de-anatolia.com/img/uploads/557391669_119757892_686353802232891_4192961210306849386_n.jpg" },
  { name: "Stan Kolev", image: "https://cafe-de-anatolia.com/img/uploads/479503715_stan kolev.jpg" },
  { name: "Andre Rizo", image: "https://cafe-de-anatolia.com/img/uploads/774996635_40389349_2155833797822595_1008162479458484224_n.jpg" },
  { name: "Elias Fassos", image: "https://cafe-de-anatolia.com/img/uploads/488485195_eliass fassos.jpg" },
  { name: "Kerem Gell", image: "https://cafe-de-anatolia.com/img/uploads/204479772_kerem gell.jpg" },
  { name: "Michel Le Fleur", image: "https://cafe-de-anatolia.com/img/uploads/162117324_40446988_2095712423773930_5211698709229731840_n.jpg" },
  { name: "Ali Baba", image: "https://cafe-de-anatolia.com/img/uploads/464515347_ali baba.jpg" },
  { name: "Maidoproject", image: "https://cafe-de-anatolia.com/img/uploads/324090758_maidoproject.jpg" },
  { name: "Fabrizio Parisi", image: "https://cafe-de-anatolia.com/img/uploads/720794134_fabrizio parisi.jpg" },
  { name: "Tebra", image: "https://cafe-de-anatolia.com/img/uploads/324778790_tebra.jpg" },
  { name: "Dj Mascota D", image: "https://cafe-de-anatolia.com/img/uploads/636579580_mascota d.jpg" },
  { name: "Dimka", image: "https://cafe-de-anatolia.com/img/uploads/763030431_dimka.jpg" },
  { name: "Calavera Manya", image: "https://cafe-de-anatolia.com/img/uploads/235351749_calavera manya.png" },
  { name: "Lèrr", image: "https://cafe-de-anatolia.com/img/uploads/808171208_lerr.jpg" },
  { name: "Kankin", image: "https://cafe-de-anatolia.com/img/uploads/563394543_kankin.jpg" },
  { name: "Nora Projekt", image: "https://cafe-de-anatolia.com/img/uploads/161897544_nora projekt.jpg" },
  { name: "Serdar Ayyildiz", image: "https://cafe-de-anatolia.com/img/uploads/473956165_serdae ayyildiz.jpg" },
  { name: "Dogan Sezen", image: "https://cafe-de-anatolia.com/img/uploads/811402295_a_blank_black_picture.jpg" },
  { name: "Mladen Mande", image: "https://cafe-de-anatolia.com/img/uploads/148821824_mladen mande.png" },
  { name: "Phanoman", image: "https://cafe-de-anatolia.com/img/uploads/273500666_a_blank_black_picture.jpg" },
  { name: "Stanisha", image: "https://cafe-de-anatolia.com/img/uploads/890738866_stanisha.jpg" },
  { name: "Desert Dwellers", image: "https://cafe-de-anatolia.com/img/uploads/895488517_desert dwellers.jpg" },
  { name: "Alexandr Mar", image: "https://cafe-de-anatolia.com/img/uploads/331917067_alexandr mar.jpg" },
  { name: "Onur Camur", image: "https://cafe-de-anatolia.com/img/uploads/779662903_onur camur.jpg" },
  { name: "Nacho Sotomayor", image: "https://cafe-de-anatolia.com/img/uploads/524615244_nacho sotomayor.jpg" },
  { name: "Arona", image: "https://cafe-de-anatolia.com/img/uploads/243895268_20180613_163200-01.jpeg" },
  { name: "Charlie North", image: "https://cafe-de-anatolia.com/img/uploads/606714497_charlie north.jpg" },
  { name: "David Clavijo", image: "https://cafe-de-anatolia.com/img/uploads/439219922_david clavijo.jpg" },
  { name: "Ersin Ersavas", image: "https://cafe-de-anatolia.com/img/uploads/686401702_ersin ersavas.jpg" },
  { name: "Gold Lounge", image: "https://cafe-de-anatolia.com/img/uploads/725982049_gold lounge.jpg" },
  { name: "Ankoku", image: "https://cafe-de-anatolia.com/img/uploads/602252922_img-20190112-wa0030.jpg" },
  { name: "Kaya Project & Irina Mikhailova", image: "https://cafe-de-anatolia.com/img/uploads/829338348_49829612_296106007714836_6960665926815449088_n.jpg" },
  { name: "Sorian", image: "https://cafe-de-anatolia.com/img/uploads/589329667_49729313_384565315606536_237460903480524800_n.jpg" },
  { name: "Ademar", image: "https://cafe-de-anatolia.com/img/uploads/633413372_ademar.jpg" },
  { name: "John Dice", image: "https://cafe-de-anatolia.com/img/uploads/673279220_john dice.jpg" },
  { name: "TreePines", image: "https://cafe-de-anatolia.com/img/uploads/951719421_tree pines.jpeg" },
  { name: "Stephane Salerno", image: "https://cafe-de-anatolia.com/img/uploads/459591162_stephane salermo.jpg" },
  { name: "SINAN", image: "https://cafe-de-anatolia.com/img/uploads/474257909_sinan.jpg" },
  { name: "Wav-E", image: "https://cafe-de-anatolia.com/img/uploads/395032470_wav-e.jpg" },
  { name: "Ben Beckman", image: "https://cafe-de-anatolia.com/img/uploads/327533064_sasha .jpg" },
  { name: "Achraf Kallel", image: "https://cafe-de-anatolia.com/img/uploads/793475954_achraf kallel.jpg" },
  { name: "Daniel Masson", image: "https://cafe-de-anatolia.com/img/uploads/509459739_daniel masson.jpg" },
  { name: "Jef Stott", image: "https://cafe-de-anatolia.com/img/uploads/345719000_jef stott.jpg" },
  { name: "Jose Solano", image: "https://cafe-de-anatolia.com/img/uploads/285140308_jose solano.jpg" },
  { name: "Kurt Adam", image: "https://cafe-de-anatolia.com/img/uploads/805176665_kurt adam.jpg" },
  { name: "Marco Tegui", image: "https://cafe-de-anatolia.com/img/uploads/185824922_marco tegui.jpg" },
  { name: "Serkan Eles", image: "https://cafe-de-anatolia.com/img/uploads/165049584_serkan eles.jpg" },
  { name: "Solace", image: "https://cafe-de-anatolia.com/img/uploads/130784419_solace.jpg" },
  { name: "Jugurtha", image: "https://cafe-de-anatolia.com/img/uploads/622309526_144-lifestlye-15-july-2jpg.jpg" },
  { name: "Depart", image: "https://cafe-de-anatolia.com/img/uploads/778982798_85150413_2640937569475313_405945512655585280_n.jpg" },
  { name: "Omeria", image: "https://cafe-de-anatolia.com/img/uploads/909968936_avatars-000731553700-ezkyhb-t500x500.jpg" },
  { name: "DJ Phellix", image: "https://cafe-de-anatolia.com/img/uploads/271064790_800x800bb.jpeg" },
  { name: "T-Puse", image: "https://cafe-de-anatolia.com/img/uploads/360930063_avatars-000719584027-2u6ta6-t500x500.jpg" },
  { name: "Batu Boris", image: "https://cafe-de-anatolia.com/img/uploads/293089789_unnamed.jpg" },
  { name: "Tolga Maktay", image: "https://cafe-de-anatolia.com/img/uploads/740454013_avatars-lzccm1gilqsvmi3f-jvsyqg-t500x500.jpg" },
  { name: "desynchronized", image: "https://cafe-de-anatolia.com/img/uploads/548376259_images.jpg" },
  { name: "Fishmanta", image: "https://cafe-de-anatolia.com/img/uploads/262887514_avatars-000727541497-vtexue-t500x500.jpg" },
  { name: "Scorpodra", image: "https://cafe-de-anatolia.com/img/uploads/376293919_download (1).jpg" },
  { name: "Clive Vaz", image: "https://cafe-de-anatolia.com/img/uploads/605651009_download (2).jpg" },
  { name: "Marcello Baptiste", image: "https://cafe-de-anatolia.com/img/uploads/611544586_maxresdefault.jpg" },
  { name: "Wassim Younes", image: "https://cafe-de-anatolia.com/img/uploads/269603495_avatars-000568209393-ihb2hp-t500x500.jpg" },
  { name: "IV-IN", image: "https://cafe-de-anatolia.com/img/uploads/389346371_a-4742845-1448878672-5501.jpeg.jpg" },
  { name: "Stephane Salerno", image: "https://cafe-de-anatolia.com/img/uploads/294263150_avatars-000704464657-dmp39r-t500x500.jpg" },
  { name: "Jack Essek", image: "https://cafe-de-anatolia.com/img/uploads/501076374_avatars-000448771341-qpswey-t500x500.jpg" },
  { name: "Neyoud", image: "https://cafe-de-anatolia.com/img/uploads/130503165_92217591_710533686357372_1704568242271420416_n.jpg" },
  { name: "Abdallah Balti", image: "https://cafe-de-anatolia.com/img/uploads/244682859_274688977_3178261899085642_690258063545338319_n.jpg" },
  { name: "Savage&She", image: "https://cafe-de-anatolia.com/img/uploads/578173949_56757573_1041469209383643_2066166177486340096_n.jpg" },
  { name: "Mohamed Rouane", image: "https://cafe-de-anatolia.com/img/uploads/840958999_264266474_10219949570999867_4115478481897364882_n.jpg" },
  { name: "Ghenwa Nemnom", image: "https://cafe-de-anatolia.com/img/uploads/516868855_69350500_1077382472457268_3827817996865241088_n.jpg" },
  { name: "Armen Miran", image: "https://cafe-de-anatolia.com/img/uploads/699272312_193213905_334350924719290_5671709733334208384_n.jpg" },
  { name: "Jad Halal", image: "https://cafe-de-anatolia.com/img/uploads/823452025_155922465_3138928409667544_8179082449342206430_n.jpg" },
  { name: "Dim Angelo", image: "https://cafe-de-anatolia.com/img/uploads/550565817_95569665_1604805236357634_711144965291376640_n.jpg" },
  { name: "Alex Mihalakis", image: "https://cafe-de-anatolia.com/img/uploads/141512555_94625269_10219674836575587_1618375202192752640_n.jpg" },
  { name: "Felix Raphael", image: "https://cafe-de-anatolia.com/img/uploads/768304148_279043702_10224664716158859_2815120829579858742_n.jpg" },
];

export default function ArtistsPage() {
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
      </div>
    </div>
  );
}
