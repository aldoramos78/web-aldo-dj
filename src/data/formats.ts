export interface ShowcaseFormat {
  slug: string;
  title: string;
  eyebrow: string;
  format: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  idealFor: string[];
  listenLink?: string;
  soundCloudEmbed?: string;
  videoUrl?: string;
}

export const SHOWCASE_FORMATS: ShowcaseFormat[] = [
  {
    slug: "hitsclub",
    title: "Hits & Club",
    eyebrow: "01 / FIESTA & CLUBBING",
    format: "club",
    shortDesc:
      "La mejor selección de rompepistas internacionales y los temazos de siempre. Energía y ritmo para mantener la pista llena tanto en hoteles (21–23h) como en discoteca.",
    longDesc:
      "Sesión dinámica pensada para hacer bailar a todo tipo de público. Combina los grandes éxitos comerciales actuales con himnos internacionales de siempre, remixes exclusivos y transiciones rápidas. Funciona igual de bien animando el horario estelar nocturno en hoteles y resorts (21:00 a 23:00) que en salas de fiesta y discotecas hasta el cierre.",
    image: "/imagenes/Dj.Hits.webp",
    idealFor: ["Hoteles (21:00 – 23:00)", "Discotecas y Clubes", "Fiestas Privadas"]
  },
  {
    slug: "dancefever",
    title: "Dance Fever",
    eyebrow: "02 / DISCO-DANCE + VOZ EN VIVO",
    format: "club",
    shortDesc:
      "Voz en vivo y energía con los temas Disco-Dance imprescindibles. Ritmo, interacción y buen ambiente para una noche divertida.",
    longDesc:
      "Un formato vibrante que une cabina DJ profesional con voz en directo interpretando los clásicos imprescindibles de la era Disco, Funk y Dance. Interacción constante con el público, estética festiva y un repertorio infalible para levantar cualquier gala, fiesta temática o noche de hotel.",
    image: "/imagenes/Dance.Fever.webp",
    idealFor: ["Hoteles & Resorts", "Galas Corporativas", "Noches Temáticas"]
  },
  {
    slug: "loungesessions",
    title: "Lounge Sessions",
    eyebrow: "03 / CHILL, ORGANIC & TERRACE",
    format: "hotel",
    shortDesc:
      "Sonidos lounge, organic house y beats relajados. La música idónea para comidas al mediodía, terrazas en la playa, beach clubs y hoteles.",
    longDesc:
      "Ambientación sonora elegante y cuidada al detalle sin estridencias ni volúmenes invasivos. Texturas orgánicas, afro-deep suave y melodías cálidas diseñadas para acompañar comidas al mediodía, sobremesas frente al mar, tardes en beach clubs, cócteles de boda o zonas chill-out de hoteles.",
    image: "/imagenes/Dj.Chill.webp",
    idealFor: ["Comidas al Mediodía", "Terrazas & Restaurantes", "Beach Clubs & Hoteles"]
  },
  {
    slug: "flamencogrooves",
    title: "Flamenco Grooves",
    eyebrow: "04 / ELECTROFLAMENCO & BAILARINA",
    format: "private",
    shortDesc:
      "Ritmos ElectroFlamencos entrelazados con el arte, la elegancia y el zapateado de una bailarina flamenca.",
    longDesc:
      "Fusión escénica de alto impacto visual y sonoro donde la electrónica moderna, el house melódico y la percusión latina dialogan en vivo con la fuerza, los giros y el taconeo de una bailarina flamenca profesional. Un espectáculo con sello propio para sorprender a público nacional e internacional.",
    image: "/imagenes/Flamenco.Grooves.webp",
    idealFor: ["Eventos VIP", "Hoteles Boutique", "Bodas de Destino"]
  },
  {
    slug: "deepbluesea",
    title: "Deep Blue Sea",
    eyebrow: "05 / VIOLÍN ELÉCTRICO & DEEP HOUSE",
    format: "club",
    shortDesc:
      "Acordes de violín eléctrico flotando sobre bases Deep & House. Un toque elegante para terrazas, beach clubs y eventos especiales.",
    longDesc:
      "Una experiencia musical sofisticada y emotiva. El violín eléctrico en directo aporta brillo melódico y elegancia sobre una base rítmica Deep, Afro y Melodic House perfectamente medida para terrazas frente al Atlántico, recepciones exclusivas y eventos con gusto por el detalle.",
    image: "/imagenes/Deep.Blue.Sea.webp",
    idealFor: ["Terrazas & Beach Clubs", "Cócteles y Recepciones", "Eventos Premium"],
    listenLink: "https://soundcloud.com/aldo_deejay/deep-blue-sea",
    soundCloudEmbed:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/aldo_deejay/deep-blue-sea&color=%238b5cf6&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
  },
  {
    slug: "octopusparty",
    title: "Octopus Party",
    eyebrow: "06 / GRAN PRODUCCIÓN VISUAL",
    format: "club",
    shortDesc:
      "Una llamativa cabina hinchable de 8×3m, performance en directo, candy girls y animación temática para un show visual diferente.",
    longDesc:
      "Nuestra producción escénica más espectacular y reconocible. Incluye una impresionante cabina hinchable gigante en forma de pulpo de 8×3 metros que transforma por completo el recinto, acompañada de equipo de performance, candy girls y animación temática diseñada para festivales, grandes fiestas de hotel y eventos de verano.",
    image: "/imagenes/Dj.Octopus.webp",
    idealFor: ["Macro-Eventos & Festivales", "Noches Estrella de Hotel", "Fiestas Temáticas"]
  }
];
