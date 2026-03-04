export const COLORS = {
  accent: "#E8965A",
  accentGlow: "rgba(232,150,90,0.3)",
  accentSoft: "rgba(232,150,90,0.22)",
  bgWarm: "#BCB5A5",
  bgDark: "#0F0F0F",
  bgDarker: "#0A0A0A",
  bgLight: "#F0EBE3",
  bgCard: "#1A1917",
  textDark: "#1A1918",
  textDarkSecondary: "#3D3A37",
  textDarkMuted: "#6B6560",
  textLight: "#FAF8F5",
  textLightSecondary: "#D4CFC7",
  textLightMuted: "#9A958D",
  textFooterMuted: "#7D7D82",
  textPlaceholder: "#55555A",
  borderSubtle: "#2A2824",
  borderInput: "#2A2A2E",
} as const;

export const PRODUCTS = [
  {
    name: "Leggings Premium",
    description: "Tejido acanalado que moldea y estiliza tu figura con compresion premium.",
    price: "$89.00",
    image: "/images/generated-1772592656377.png",
    alt: "Leggings Premium",
  },
  {
    name: "Tops Esculturales",
    description: "Diseno escultural que realza tu silueta con soporte y elegancia.",
    price: "$69.00",
    image: "/images/generated-1772592669187.png",
    alt: "Tops Esculturales",
  },
  {
    name: "Sets Completos",
    description: "Conjuntos coordinados para un look completo de lujo en cada entrenamiento.",
    price: "$139.00",
    image: "/images/generated-1772592681569.png",
    alt: "Sets Completos",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "La calidad de las telas es increible. Cada pieza se siente como lujo puro, y el ajuste es perfecto para entrenar con estilo.",
    name: "Maria Garcia",
    location: "Madrid, Espana",
  },
  {
    quote: "Nunca pense que ropa deportiva pudiera verse tan elegante. GLEZFIT ha cambiado completamente mi forma de vestir para el gimnasio.",
    name: "Valentina Lopez",
    location: "Buenos Aires, Argentina",
  },
  {
    quote: "El equilibrio perfecto entre rendimiento y moda. Me siento poderosa cada vez que uso mis piezas GLEZFIT.",
    name: "Isabella Fernandez",
    location: "Ciudad de Mexico, Mexico",
  },
] as const;

export const FEATURES = [
  {
    title: "Telas Premium",
    description: "Ribbed de alta densidad que moldea y define cada curva con suavidad excepcional.",
  },
  {
    title: "Diseno Ergonomico",
    description: "Patrones anatomicos que abrazan tu cuerpo y permiten libertad total de movimiento.",
  },
  {
    title: "Hecho en Mexico",
    description: "Produccion artesanal con los mas altos estandares de calidad y atencion al detalle.",
  },
] as const;

export const METRICS = [
  { value: "10K+", label: "Clientas" },
  { value: "4.9", label: "Estrellas" },
  { value: "Envio Gratis", label: "En todos los pedidos" },
] as const;

export const INSTAGRAM_IMAGES = [
  "/images/generated-1772592723184.png",
  "/images/generated-1772592730843.png",
  "/images/generated-1772592739651.png",
  "/images/generated-1772592746231.png",
] as const;

export const NAV_LINKS = [
  { label: "Coleccion", href: "#coleccion" },
  { label: "Filosofia", href: "#filosofia" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "TIENDA",
    links: [
      { label: "Leggings", href: "#" },
      { label: "Sports Bras", href: "#" },
      { label: "Sets Completos", href: "#" },
      { label: "Accesorios", href: "#" },
      { label: "Nueva Coleccion", href: "#", accent: true },
    ],
  },
  {
    title: "EMPRESA",
    links: [
      { label: "Nuestra Historia", href: "#" },
      { label: "Filosofia", href: "#" },
      { label: "Sostenibilidad", href: "#" },
      { label: "Prensa", href: "#" },
    ],
  },
  {
    title: "SOPORTE",
    links: [
      { label: "Centro de Ayuda", href: "#" },
      { label: "Guia de Tallas", href: "#" },
      { label: "Envios y Devoluciones", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
] as const;
