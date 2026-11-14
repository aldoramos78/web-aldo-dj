export interface ShowcaseFormat {
  slug: string;
  title: string;
  eyebrow: string;
  format: string;
  shortDesc: string;
  longDesc: string[];
  highlights: string[];
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
      "La mejor selección de rompepistas internacionales y temazos de siempre para mantener la pista llena de principio a fin.",
    longDesc: [
      "Un formato diseñado para conectar con públicos variados y transformar cualquier recinto en una auténtica pista de baile desde el primer minuto. La clave está en la lectura constante de la sala y en saber unir generaciones a través de éxitos reconocibles.",
      "El repertorio combina los grandes hits internacionales actuales con clásicos infalibles del pop-dance, música urbana elegante, latin house y remixes exclusivos pensados para mantener la energía arriba sin altibajos.",
      "Funciona con total solvencia tanto en la programación nocturna de hoteles y resorts como en salas de fiesta, eventos privados de alto nivel o clubes."
    ],
    highlights: [
      "Lectura dinámica de pista y mezcla fluida sin cortes",
      "Repertorio internacional adaptable a público nacional y turístico",
      "Opción de sonido e iluminación profesional acorde al espacio"
    ],
    image: "/imagenes/Dj.Hits.webp",
    idealFor: ["Hoteles & Resorts", "Discotecas y Clubes", "Fiestas Privadas"]
  },
  {
    slug: "dancefever",
    title: "Dance Fever",
    eyebrow: "02 / DISCO-DANCE + VOZ EN VIVO",
    format: "club",
    shortDesc:
      "Voz en vivo y pura energía con los grandes clásicos Disco-Dance. Ritmo, carisma e interacción para una noche inolvidable.",
    longDesc: [
      "Dance Fever rescata la alegría y el magnetismo de la música Disco, Funk y Dance de todos los tiempos, elevándolos mediante la fuerza de una voz femenina en directo sincronizada con la cabina.",
      "Más allá de una sesión convencional, es una experiencia cercana y participativa donde el escenario cobra vida. La conexión vocal con los asistentes convierte las cenas de gala, fiestas temáticas o noches en hoteles en celebraciones memorables.",
      "Un espectáculo luminoso, bailable y elegante pensado para arrancar sonrisas y llenar la pista con himnos que todo el mundo conoce y canta."
    ],
    highlights: [
      "Cabina DJ profesional acompañada de cantante en directo",
      "Clásicos Disco, Funk y Dance con sonido actualizado",
      "Interacción constante con el público y puesta en escena dinámica"
    ],
    image: "/imagenes/Dance.Fever.webp",
    idealFor: ["Hoteles & Resorts", "Galas y Cenas de Empresa", "Noches Temáticas"]
  },
  {
    slug: "loungesessions",
    title: "Lounge Sessions",
    eyebrow: "03 / CHILL, ORGANIC & TERRACE",
    format: "hotel",
    shortDesc:
      "Sonidos lounge, organic house y beats relajados. La banda sonora idónea para terrazas, beach clubs, restaurantes y hoteles.",
    longDesc: [
      "Música cuidada para vestir el espacio con elegancia y naturalidad. Lounge Sessions está pensado para crear una atmósfera agradable donde los invitados puedan conversar, disfrutar de la gastronomía o tomar una copa sin sentirse invadidos por el volumen.",
      "La selección transita por texturas orgánicas, afro-deep suave, bossa electrónica y matices acústicos que aportan frescura y personalidad propia a terrazas frente al mar, beach clubs, zonas de piscina o restaurantes con encanto.",
      "Un acompañamiento sonoro versátil que realza la identidad del local y mantiene un pulso envolvente en cualquier momento de la jornada."
    ],
    highlights: [
      "Ambientación elegante que respeta la conversación del cliente",
      "Selección orgánica, deep melódico y matices mediterráneos",
      "Adaptable a espacios abiertos, restaurantes y zonas chill-out"
    ],
    image: "/imagenes/Dj.Chill.webp",
    idealFor: ["Restaurantes & Terrazas", "Beach Clubs", "Hoteles & Cócteles"]
  },
  {
    slug: "flamencogrooves",
    title: "Flamenco Grooves",
    eyebrow: "04 / ELECTROFLAMENCO & BAILARINA",
    format: "private",
    shortDesc:
      "Ritmos ElectroFlamencos entrelazados con el arte, la fuerza y la elegancia del baile flamenco en directo.",
    longDesc: [
      "Un encuentro escénico sorprendente entre la raíz española y la electrónica contemporánea. Flamenco Grooves une bases melódicas, house percusivo y guitarra flamenca con el taconeo y la presencia visual de una bailarina profesional sobre el escenario.",
      "Cada intervención está coreografiada para crear momentos de auténtica tensión artística y belleza visual, capturando al instante la atención tanto del público local como del visitante internacional que busca algo genuino y sofisticado.",
      "Ideal para dar un toque distintivo a bodas de destino, recepciones VIP y eventos donde el factor sorpresa marca la diferencia."
    ],
    highlights: [
      "Fusión de electrónica actual con baile flamenco en vivo",
      "Fuerte impacto visual para eventos corporativos y hoteles boutique",
      "Formato modular adaptable a cóctel o momento estelar de fiesta"
    ],
    image: "/imagenes/Flamenco.Grooves.webp",
    idealFor: ["Eventos VIP", "Hoteles Boutique", "Bodas de Destino"]
  },
  {
    slug: "deepbluesea",
    title: "Deep Blue Sea",
    eyebrow: "05 / VIOLÍN ELÉCTRICO & DEEP HOUSE",
    format: "club",
    shortDesc:
      "Acordes de violín eléctrico flotando sobre bases Deep & House. Elegancia sonora para terrazas, beach clubs y eventos exclusivos.",
    longDesc: [
      "Deep Blue Sea nace para aportar distinción y sensibilidad musical a través de la unión entre el DJ set y el violín eléctrico interpretado en directo.",
      "Las líneas melódicas del violín envuelven la base electrónica con matices cálidos y emotivos, construyendo un paisaje sonoro refinado que encaja a la perfección en terrazas con vistas al océano, recepciones nupciales y eventos corporativos selectos.",
      "Un formato pensado para quienes buscan diferenciar su evento con música en vivo de estética moderna y acabado impecable."
    ],
    highlights: [
      "Violinista eléctrico en directo sincronizado con sesión Deep & Afro House",
      "Estética sonora sofisticada y emotiva",
      "Ideal para eventos frente al mar, recepciones y celebraciones exclusivas"
    ],
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
      "Espectacular cabina hinchable gigante de 8×3m, performance en directo, candy girls y animación temática para un show inolvidable.",
    longDesc: [
      "Nuestra producción visual más impactante y reconocible. Octopus Party convierte el espacio del evento en un escenario temático inmersivo presidido por una monumental cabina hinchable en forma de pulpo de 8 metros de ancho por 3 de alto.",
      "El espectáculo se completa con equipo de performance, candy girls, vestuario tematizado e interacción constante con el público, generando un reclamo fotográfico y audiovisual irresistible desde el primer vistazo.",
      "Diseñado para grandes fiestas de verano, noches estrella en resorts, festivales y celebraciones que buscan ofrecer un formato diferente a todo lo habitual."
    ],
    highlights: [
      "Cabina hinchable gigante de 8×3 metros de alto impacto visual",
      "Paquete con performers, candy girls y animación temática",
      "Sesión festiva de alta energía pensada para grandes aforos"
    ],
    image: "/imagenes/Dj.Octopus.webp",
    idealFor: ["Macro-Eventos & Festivales", "Noches Estrella de Hotel", "Fiestas Temáticas"]
  }
];
