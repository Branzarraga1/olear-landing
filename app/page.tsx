"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Arbequina",
    description: "Dulce, suave y versátil. Ideal para todos los días.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Picual",
    description: "Intenso, con notas amargas y picantes. Gran personalidad.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Blend Premium",
    description: "Equilibrio perfecto entre frutado, amargor y elegancia.",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=800&auto=format&fit=crop",
  },
];

function ProductDissolve() {
  const [active, setActive] = useState(products[0]);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-stone-200 shadow-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.image}
            alt={active.name}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      <div className="space-y-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setActive(product)}
            className={`w-full rounded-xl border p-5 text-left transition-all duration-300 ${
              active.id === product.id
                ? "border-stone-900 bg-white shadow-md"
                : "border-stone-200 bg-transparent hover:border-stone-400"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-medium">{product.name}</h3>
              {active.id === product.id && (
                <span className="text-xs tracking-widest text-stone-500 uppercase">
                  Seleccionado
                </span>
              )}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {product.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

type Story = {
  id: number;
  title: string;
  short: string;
  full: string;
  image1: string;
  image2: string;
};

const stories: Story[] = [
  {
    id: 1,
    title: "El origen",
    short: "Olivos centenarios en el corazón de Maipú.",
    full: "En las tierras de Maipú, Mendoza, crecen olivos que llevan generaciones. Aquí nace nuestro aceite, de raíces profundas y clima único que le otorga carácter y elegancia.",
    image1: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=800&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "La cosecha",
    short: "Recolección temprana para máxima pureza.",
    full: "Cosechamos en el momento justo, cuando el fruto alcanza su máxima expresión. Una recolección cuidadosa y temprana que preserva aromas, frescura y la pureza del aceite.",
    image1: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "La esencia",
    short: "Un AOVE de carácter y elegancia.",
    full: "El resultado es un aceite de oliva virgen extra de personalidad marcada: frutado, equilibrado y con el alma de Mendoza en cada gota. Pensado para la alta cocina y el disfrute diario.",
    image1: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Home() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-stone-900">
      {/* ===== HEADER ===== */}
<header className="fixed top-0 left-0 z-50 w-full border-b border-stone-200/50 bg-[#f8f5f0]/80 backdrop-blur-md">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    
    {/* Logo */}
    <div className="flex items-center gap-3">
      <svg
        width="22"
        height="28"
        viewBox="0 0 22 28"
        fill="none"
        className="text-stone-800"
      >
        <ellipse cx="11" cy="15" rx="8" ry="11" fill="currentColor" fillOpacity="0.9" />
        <path
          d="M11 4C11 4 13 2 14.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-serif text-lg font-medium tracking-tight text-stone-900">
        OLEAR
      </span>
    </div>

    {/* Navegación */}
    <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
      <a href="#origen" className="transition hover:text-stone-900">
        Origen
      </a>
      <a href="#aceites" className="transition hover:text-stone-900">
        Aceites
      </a>
      <a href="#contacto" className="transition hover:text-stone-900">
        Contacto
      </a>
    </nav>

    {/* Botón */}
    <a
      href="#contacto"
      className="rounded-full bg-stone-900 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-stone-800"
    >
      Contactar
    </a>
  </div>
</header>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-20 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          {/* Texto + Tríptico */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-stone-500 uppercase">
              Mendoza · Argentina
            </p>

            <h1 className="font-serif text-5xl leading-[1.1] font-medium tracking-tight text-stone-900 md:text-6xl">
              Aceite de Oliva
              <br />
              Virgen Extra
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-stone-600">
              Monovarietales y blends de calidad excepcional.
              Origen, historia y pureza en cada gota.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-stone-800">
                Descubrir el aceite
              </button>
              <button className="rounded-full border border-stone-300 px-8 py-3.5 text-sm font-medium transition hover:bg-white">
                Nuestra historia
              </button>
            </div>

            {/* ===== TRÍPTICO ===== */}
            <div className="mt-14">
              <p className="mb-4 text-xs font-medium tracking-widest text-stone-400 uppercase">
                La historia en tres actos
              </p>

              <div className="flex gap-3">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => setActiveStory(story)}
                    className="group relative h-36 w-28 cursor-pointer overflow-hidden rounded-lg bg-stone-800 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-60 transition group-hover:opacity-40"
                      style={{ backgroundImage: `url(${story.image1})` }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                      <span className="text-[10px] font-medium tracking-wider opacity-70">
                        0{story.id}
                      </span>
                      <span className="text-sm font-medium leading-tight">
                        {story.title}
                      </span>
                      <p className="mt-1 max-h-0 overflow-hidden text-[11px] leading-snug opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                        {story.short}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Imagen principal + secundaria */}
          <div className="order-1 relative lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop"
                alt="Aceite de oliva virgen extra"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-36 overflow-hidden rounded-xl shadow-2xl sm:w-40 md:-bottom-8 md:-left-8 md:w-48">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop"
                alt="Detalle de olivas"
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPUP / TARJETA ===== */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-start bg-black/40 px-6 backdrop-blur-sm">
          <div className="relative ml-4 w-full max-w-md overflow-hidden rounded-2xl bg-[#f8f5f0] shadow-2xl md:ml-16 lg:ml-24">
            
            {/* Botón cerrar */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-stone-700 transition hover:bg-white"
            >
              ✕
            </button>

            {/* Imágenes superpuestas */}
            <div className="relative h-56">
              <img
                src={activeStory.image1}
                alt={activeStory.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-4 w-28 overflow-hidden rounded-xl border-4 border-[#f8f5f0] shadow-lg">
                <img
                  src={activeStory.image2}
                  alt=""
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8 pt-10">
              <span className="text-xs font-medium tracking-widest text-stone-400 uppercase">
                0{activeStory.id} · Historia
              </span>
              <h3 className="mt-2 font-serif text-3xl font-medium">
                {activeStory.title}
              </h3>
              <p className="mt-4 leading-relaxed text-stone-600">
                {activeStory.full}
              </p>
            </div>
          </div>
        </div>
      )}

{/* ===== HISTORIA - SCROLLYTELLING ===== */}
<section className="relative border-t border-stone-200 bg-white">
  <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
    
    {/* Imagen sticky (izquierda) */}
    <div className="relative hidden lg:block">
      <div className="sticky top-0 h-screen">
        <img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop"
          alt="Olivos en Mendoza"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>

    {/* Columna derecha */}
    <div className="px-6 py-20 lg:px-16">
      
      {/* Capítulo 1 */}
      <div className="flex min-h-[30vh] flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
            01 — El origen
          </span>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Raíces profundas
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600">
            En el corazón de Maipú, Mendoza, los olivos encuentran un clima único. 
            Aquí nace la historia de nuestro aceite, donde la tierra y el tiempo 
            trabajan juntos.
          </p>
        </motion.div>
      </div>

      {/* Zigzag de 3 imágenes chicas */}
      <div className="relative my-10 flex flex-col gap-6 py-4">
        <motion.img
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 1"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "8%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: [0, 6, 0, -6, 0] }}
          transition={{
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 2"
          className="h-24 w-24 self-end rounded-lg object-cover shadow-md md:h-28 md:w-28"
          style={{ marginRight: "12%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          animate={{ x: [0, -5, 0, 5, 0] }}
          transition={{
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 3"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "22%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{ x: [0, 7, 0, -7, 0] }}
          transition={{
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
      </div>

      {/* Capítulo 2 */}
      <div className="flex min-h-[30vh] flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
            02 — La tierra
          </span>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
            El carácter de Mendoza
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600">
            Días soleados, noches frescas y suelos privilegiados. 
            Condiciones que dan a las aceitunas una personalidad marcada 
            y una calidad excepcional.
          </p>
        </motion.div>
      </div>

      {/* Zigzag 2 */}
      <div className="relative my-10 flex flex-col gap-6 py-4">
        <motion.img
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 4"
          className="h-24 w-24 self-end rounded-lg object-cover shadow-md md:h-28 md:w-28"
          style={{ marginRight: "18%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: [0, -6, 0, 6, 0] }}
          transition={{
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 5"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "15%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          animate={{ x: [0, 5, 0, -5, 0] }}
          transition={{
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 6"
          className="h-24 w-24 self-end rounded-lg object-cover shadow-md md:h-28 md:w-28"
          style={{ marginRight: "8%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{ x: [0, -7, 0, 7, 0] }}
          transition={{
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
      </div>

      {/* Capítulo 3 */}
      <div className="flex min-h-[30vh] flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
            03 — La cosecha
          </span>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
            El momento justo
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600">
            Recolectamos temprano, cuando el fruto alcanza su máxima expresión. 
            Una decisión que preserva aromas, frescura y la pureza del aceite.
          </p>
        </motion.div>
      </div>

      {/* Zigzag 3 */}
      <div className="relative my-10 flex flex-col gap-6 py-4">
        <motion.img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 7"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "10%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: [0, 6, 0, -6, 0] }}
          transition={{
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 8"
          className="h-24 w-24 self-end rounded-lg object-cover shadow-md md:h-28 md:w-28"
          style={{ marginRight: "20%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          animate={{ x: [0, -5, 0, 5, 0] }}
          transition={{
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 9"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "25%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{ x: [0, 8, 0, -8, 0] }}
          transition={{
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
      </div>

      {/* Capítulo 4 */}
      <div className="flex min-h-[30vh] flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
            04 — La esencia
          </span>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Aceite con alma
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600">
            El resultado es un AOVE de carácter: frutado, equilibrado y 
            con la identidad de Mendoza en cada gota. Pensado para quienes 
            buscan calidad real.
          </p>
        </motion.div>
      </div>

      {/* Zigzag 4 */}
      <div className="relative my-10 flex flex-col gap-6 py-4">
        <motion.img
          src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 7"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "10%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          animate={{ x: [0, 6, 0, -6, 0] }}
          transition={{
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 8"
          className="h-24 w-24 self-end rounded-lg object-cover shadow-md md:h-28 md:w-28"
          style={{ marginRight: "20%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          animate={{ x: [0, -5, 0, 5, 0] }}
          transition={{
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
        <motion.img
          src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=400&auto=format&fit=crop"
          alt="Sketch 9"
          className="h-28 w-28 rounded-lg object-cover shadow-md md:h-32 md:w-32"
          style={{ marginLeft: "25%" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          animate={{ x: [0, 8, 0, -8, 0] }}
          transition={{
            x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 }
          }}
        />
      </div>

    </div>
  </div>
</section>

     {/* ===== PRODUCTOS - DISSOLVE ===== */}
<section className="border-t border-stone-200 bg-stone-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    
    {/* Título */}
    <div className="mb-16 text-center">
      <h2 className="font-serif text-3xl font-medium md:text-4xl">
        Nuestros aceites
      </h2>
      <p className="mt-3 text-stone-600">
        Cada variedad tiene su carácter. Elegí y descubrí.
      </p>
    </div>

    <ProductDissolve />
  </div>
</section>
    </main>
  );
}