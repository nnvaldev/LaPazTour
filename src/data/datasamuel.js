// ============================================
// LA PAZ TOUR - Datos del proyecto
// Persona 3: Audio y Datos
// ============================================

const lugares = [
  { id: 1,  nombre: "Mirador Killi Killi",        lat: -16.4949, lng: -68.1357, accesible: true,  ruta: "Miradores",  foto: "killi.jpg",       descripcion: "El mirador más querido de La Paz, con vista panorámica al Illimani." },
  { id: 2,  nombre: "Plaza Murillo",               lat: -16.4954, lng: -68.1336, accesible: true,  ruta: "Centro Histórico", foto: "murillo.jpg",  descripcion: "Corazón político de Bolivia, rodeada de palacio, catedral y congreso." },
  { id: 3,  nombre: "Catedral Metropolitana",       lat: -16.4958, lng: -68.1339, accesible: true,  ruta: "Centro Histórico", foto: "catedral.jpg", descripcion: "Imponente catedral neoclásica junto a la Plaza Murillo." },
  { id: 4,  nombre: "Iglesia de San Francisco",     lat: -16.4967, lng: -68.1370, accesible: true,  ruta: "Centro Histórico", foto: "sanfrancisco.jpg", descripcion: "Templo colonial del siglo XVI, símbolo religioso y cultural." },
  { id: 5,  nombre: "Calle Jaén",                   lat: -16.4949, lng: -68.1385, accesible: false, ruta: "Centro Histórico", foto: "jaen.jpg",     descripcion: "Calle empedrada colonial con museos y fachadas coloridas." },
  { id: 6,  nombre: "Mercado de las Brujas",        lat: -16.4938, lng: -68.1378, accesible: false, ruta: "Mercados y Artesanías", foto: "brujas.jpg", descripcion: "Mercado tradicional de amuletos, hierbas y artesanía andina." },
  { id: 7,  nombre: "Calle Sagárnaga",              lat: -16.4944, lng: -68.1373, accesible: false, ruta: "Mercados y Artesanías", foto: "sagarnaga.jpg", descripcion: "La calle artesanal más famosa de la ciudad, tejidos y souvenirs." },
  { id: 8,  nombre: "Mercado Rodríguez",            lat: -16.4990, lng: -68.1389, accesible: false, ruta: "Mercados y Artesanías", foto: "rodriguez.jpg", descripcion: "Mercado popular de productos frescos y comida típica paceña." },
  { id: 9,  nombre: "Valle de la Luna",             lat: -16.5573, lng: -68.0864, accesible: false, ruta: "Miradores",  foto: "valleluna.jpg",  descripcion: "Formaciones rocosas erosionadas de paisaje casi lunar." },
  { id: 10, nombre: "Mirador Laikakota",            lat: -16.5027, lng: -68.1225, accesible: true,  ruta: "Miradores",  foto: "laikakota.jpg",  descripcion: "Parque y mirador con vista a la hoyada paceña, ideal en familia." },
  { id: 11, nombre: "Teleférico Línea Roja",        lat: -16.4897, lng: -68.1290, accesible: true,  ruta: "Miradores",  foto: "telerojo.jpg",   descripcion: "Vista aérea de la ciudad desde el transporte por cable más alto del mundo." },
  { id: 12, nombre: "Museo Nacional de Arte",       lat: -16.4956, lng: -68.1341, accesible: true,  ruta: "Centro Histórico", foto: "museoarte.jpg", descripcion: "Antiguo palacio colonial convertido en museo de arte boliviano." },
  { id: 13, nombre: "Parque Urbano Central",        lat: -16.5117, lng: -68.1195, accesible: true,  ruta: "Miradores",  foto: "parqueurbano.jpg", descripcion: "Parque moderno bajo el puente Multimodal, ocio y naturaleza." },
  { id: 14, nombre: "Plaza San Pedro",               lat: -16.4991, lng: -68.1400, accesible: true,  ruta: "Centro Histórico", foto: "sanpedro.jpg", descripcion: "Plaza tradicional junto al histórico penal de San Pedro." },
  { id: 15, nombre: "Mirador Muela del Diablo",     lat: -16.5613, lng: -68.0961, accesible: false, ruta: "Miradores",  foto: "muela.jpg",     descripcion: "Formación rocosa icónica, punto de trekking con vista a la ciudad." }
];

const rutas = [
  { nombre: "Centro Histórico", lugares: ["Plaza Murillo", "Catedral Metropolitana", "Iglesia de San Francisco", "Calle Jaén", "Museo Nacional de Arte", "Plaza San Pedro"], duracion: "2h" },
  { nombre: "Miradores y Naturaleza", lugares: ["Mirador Killi Killi", "Valle de la Luna", "Mirador Laikakota", "Teleférico Línea Roja", "Parque Urbano Central", "Mirador Muela del Diablo"], duracion: "3h" },
  { nombre: "Mercados y Artesanías", lugares: ["Mercado de las Brujas", "Calle Sagárnaga", "Mercado Rodríguez"], duracion: "1.5h" }
];

const comercios = [
  { nombre: "Artesanías Bolivia",   direccion: "Calle Sagárnaga #123",       tipo: "Artesanía",  telefono: "78945612" },
  { nombre: "Tejidos Wara Wara",    direccion: "Calle Linares #456",         tipo: "Textiles",   telefono: "77123456" },
  { nombre: "Café del Mundo",       direccion: "Calle Sagárnaga #789",       tipo: "Cafetería",  telefono: "76589321" },
  { nombre: "Restaurante Illimani", direccion: "Plaza San Pedro #234",       tipo: "Gastronomía",telefono: "70456789" },
  { nombre: "Souvenirs Andinos",    direccion: "Calle Jaén #567",            tipo: "Artesanía",  telefono: "79654123" }
];

const aliados = [
  { nombre: "Vecinos de Sopocachi",   tipo: "Vecinos",   aporte: "Rutas locales" },
  { nombre: "UMSA - Turismo",         tipo: "Academia",  aporte: "Validación técnica del contenido" },
  { nombre: "FEDEBOL",                tipo: "ONG",       aporte: "Asesoría en accesibilidad" },
  { nombre: "Cámara de Turismo",      tipo: "Empresa",   aporte: "Directorio de comercios" },
  { nombre: "Mi Teleférico",          tipo: "Empresa",   aporte: "Datos de transporte" },
  { nombre: "GAMLP",                  tipo: "Gobierno",  aporte: "Aval institucional" },
  { nombre: "Artesanos Sagárnaga",    tipo: "Comercio",  aporte: "Directorio de artesanía" },
  { nombre: "Hoteles Zona Sur",       tipo: "Empresa",   aporte: "Difusión turística" }
];

const audioguias = [
  { id: 1, lugar: "Mirador Killi Killi",   url: "https://drive.google.com/uc?export=download&id=1-QA_z0aQLPRv5N0TuC6V9MbBeMshA3mR" },
  { id: 2, lugar: "Plaza Murillo",         url: "https://drive.google.com/uc?export=download&id=1_IlGbIHBz-nIqhO6PAEKjdx0UAj81xUO" },
  { id: 3, lugar: "Mercado de las Brujas", url: "https://drive.google.com/uc?export=download&id=16ch-2pVOWU22O0WMgEXAj6CdAkHh7M6q" }
];
