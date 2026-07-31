"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Arbequina",
    description: "Dulce, suave y versátil. Ideal para todos los días.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    color: "#005d6d",
    darkColor: "#003d48",
  },
  {
    id: 2,
    name: "Picual",
    description: "Intenso, con notas amargas y picantes. Gran personalidad.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop",
    color: "#3F51B5",
    darkColor: "#2A3780",
  },
  {
    id: 3,
    name: "Blend Premium",
    description: "Equilibrio perfecto entre frutado, amargor y elegancia.",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=800&auto=format&fit=crop",
    color: "#1E3B33",
    darkColor: "#10241F",
  },
  {
    id: 4,
    name: "Arauco",
    description: "Variedad argentina de carácter intenso, con notas herbáceas y gran personalidad.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop",
    color: "#0D3C2A",
    darkColor: "#08261A",
  },
];

function ProductDissolve() {
  const [active, setActive] = useState(products[0]);

  return (
    <motion.div
      className="relative -mx-6 overflow-hidden px-6 py-16 md:-mx-0 md:rounded-3xl md:px-10"
      animate={{ backgroundColor: active.darkColor }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      {/* Fade negro suave desde abajo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        
        {/* Botella */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-black/20 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.image}
              alt={active.name}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 18 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Lista editorial */}
        <div className="space-y-2">
          <p className="mb-6 text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
            Nuestra selección
          </p>

          {products.map((product) => {
            const isActive = active.id === product.id;

            return (
              <motion.button
                key={product.id}
                onClick={() => setActive(product)}
                className="group block w-full border-b border-white/10 py-5 text-left"
                animate={{ x: isActive ? 16 : 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`font-serif text-2xl transition-colors duration-300 md:text-3xl ${
                      isActive ? "" : "text-white/35 group-hover:text-white/60"
                    }`}
                    style={isActive ? { color: product.color } : undefined}
                  >
                    {product.name}
                  </h3>

                  <span
                    className={`text-[11px] tracking-[0.18em] uppercase transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={isActive ? { color: product.color } : undefined}
                  >
                    Seleccionado
                  </span>
                </div>

                <p
                  className={`mt-2 max-w-md text-sm leading-relaxed transition-all duration-300 ${
                    isActive
                      ? "translate-y-0 text-white/75 opacity-100"
                      : "translate-y-1 text-white/30 opacity-0"
                  }`}
                >
                  {product.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
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

function ScrollytellingStory() {
  const [activeIndex, setActiveIndex] = useState(0);

  const chapters = [
    {
      id: 1,
      label: "01 — El origen",
      title: "Raíces profundas",
      text: "En el corazón de Maipú, Mendoza, los olivos encuentran un clima único. Aquí nace la historia de nuestro aceite, donde la tierra y el tiempo trabajan juntos.",
      image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 2,
      label: "02 — La tierra",
      title: "El carácter de Mendoza",
      text: "Días soleados, noches frescas y suelos privilegiados. Condiciones que dan a las aceitunas una personalidad marcada y una calidad excepcional.",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 3,
      label: "03 — La cosecha",
      title: "El momento justo",
      text: "Recolectamos temprano, cuando el fruto alcanza su máxima expresión. Una decisión que preserva aromas, frescura y la pureza del aceite.",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: 4,
      label: "04 — La esencia",
      title: "Aceite con alma",
      text: "El resultado es un AOVE de carácter: frutado, equilibrado y con la identidad de Mendoza en cada gota. Pensado para quienes buscan calidad real.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
      {/* Textos */}
      <div className="order-2 px-6 py-24 lg:order-1 lg:px-16">
        {chapters.map((chapter, index) => (
          <div key={chapter.id} className="flex min-h-[90vh] flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.55 }}
              onViewportEnter={() => setActiveIndex(index)}
            >
              <span className="text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
                {chapter.label}
              </span>
              <h2 className="mt-3 font-serif text-4xl font-medium leading-tight md:text-5xl">
                {chapter.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600">
                {chapter.text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Imágenes sticky + parallax */}
      <div className="relative order-1 hidden lg:order-2 lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={chapters[activeIndex].id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.img
                src={chapters[activeIndex].image}
                alt={chapters[activeIndex].title}
                className="h-[130%] w-full object-cover"
                initial={{ y: -50, scale: 1.08 }}
                animate={{ y: 0, scale: 1.02 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeProduct, setActiveProduct] = useState(products[0]);

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 80; // altura aproximada del header
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  const start = window.pageYOffset;
  const distance = offsetPosition - start;
  const duration = 700; // más bajo = más rápido / impulsivo
  let startTime: number | null = null;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutCubic(progress);

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#1c1917]">
      {/* ===== HEADER ===== */}
{/* ===== HEADER ===== */}
<header className="fixed top-0 left-0 z-50 w-full border-b border-[#0D3C2A]/10 bg-[#f8f5f0]/85 backdrop-blur-md">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
    
    {/* Logo */}
    <div className="flex items-center gap-3">
      <svg
        width="22"
        height="28"
        viewBox="0 0 22 28"
        fill="none"
        className="text-[#0D3C2A]"
      >
        <ellipse cx="11" cy="15" rx="8" ry="11" fill="currentColor" fillOpacity="0.95" />
        <path
          d="M11 4C11 4 13 2 14.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-serif text-lg font-medium tracking-tight text-[#0D3C2A]">
        AOVE
      </span>
    </div>

    {/* Navegación */}
    <nav className="hidden items-center gap-8 text-sm text-[#1E3B33]/80 md:flex">
      <button onClick={() => scrollToSection("origen")} className="transition hover:text-[#0D3C2A]">
        Origen
      </button>
      <button onClick={() => scrollToSection("aceites")} className="transition hover:text-[#0D3C2A]">
        Aceites
      </button>
      <button onClick={() => scrollToSection("contacto")} className="transition hover:text-[#0D3C2A]">
        Contacto
      </button>
    </nav>

    {/* Botón */}
    <button
      onClick={() => scrollToSection("contacto")}
      className="rounded-full bg-[#0D3C2A] px-4 py-1.5 text-xs font-medium text-[#f8f5f0] transition hover:bg-[#1E3B33]"
    >
      Contactar
    </button>
  </div>
</header>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-20 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
          
          {/* Texto + Tríptico */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#005d6d] uppercase">
              Mendoza · Argentina
            </p>

            <h1 className="font-serif text-5xl leading-[1.1] font-medium tracking-tight text-[#0D3C2A] md:text-6xl">
              Aceite de Oliva
              <br />
              Virgen Extra
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#1E3B33]/80">
              Monovarietales y blends de calidad excepcional.
              Origen, historia y pureza en cada gota.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("aceites")}
                className="rounded-full bg-[#0D3C2A] px-8 py-3.5 text-sm font-medium text-[#f8f5f0] transition hover:bg-[#1E3B33]"
              >
                Descubrir el aceite
              </button>
              <button
                onClick={() => scrollToSection("origen")}
                className="rounded-full border border-[#0D3C2A]/30 px-8 py-3.5 text-sm font-medium text-[#0D3C2A] transition hover:border-[#0D3C2A] hover:bg-[#0D3C2A]/5"
              >
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

          {/* Imagen principal */}
<div className="order-1 relative lg:order-2">
  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200 shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1000&auto=format&fit=crop"
      alt="Aceite de oliva virgen extra"
      className="h-full w-full object-cover"
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

<section id="origen" className="relative border-t border-[#0D3C2A]/10 bg-white">
  <ScrollytellingStory />
</section>

{/* ===== PRODUCTOS ===== */}
<section id="aceites" className="border-t border-[#0D3C2A]/10 bg-[#f8f5f0] px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-16 text-center">
      <h2 className="font-serif text-3xl font-medium text-[#0D3C2A] md:text-4xl">
        Nuestros aceites
      </h2>
      <p className="mt-3 text-[#1E3B33]/70">
        Cada variedad tiene su carácter. Elegí y descubrí.
      </p>
    </div>

    <ProductDissolve />
  </div>
</section>

{/* ===== USOS RECOMENDADOS ===== */}
<section className="border-t border-stone-200 bg-[#f8f5f0] px-6 py-24">
  <div className="mx-auto max-w-6xl">
    
    {/* Título */}
    <div className="mb-16 text-center">
      <p className="mb-3 text-xs font-medium tracking-[0.2em] text-stone-400 uppercase">
        Guía de uso
      </p>
      <h2 className="font-serif text-3xl font-medium md:text-4xl">
        Cada aceite, su momento
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-stone-600">
        Elegí según el plato. Una guía rápida para sacar el máximo de cada variedad.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      
      {/* Arbequina */}
      <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
            alt="Arbequina en ensalada"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl font-medium text-stone-900">Arbequina</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Dulce y versátil. Ideal para el día a día.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Ensaladas</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Tostadas</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Uso diario</span>
          </div>
        </div>
      </div>

      {/* Picual */}
      <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
            alt="Picual con carnes"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl font-medium text-stone-900">Picual</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Intenso y con carácter. Para platos con fuerza.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Carnes</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Guisos</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Fritura suave</span>
          </div>
        </div>
      </div>

      {/* Arauco */}
      <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
            alt="Arauco en parrilla"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl font-medium text-stone-900">Arauco</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Herbáceo y argentino. Ideal para el fuego.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Parrilla</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Verduras asadas</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Platos intensos</span>
          </div>
        </div>
      </div>

      {/* Blend Premium */}
      <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
            alt="Blend Premium en alta cocina"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl font-medium text-stone-900">Blend Premium</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Equilibrado y elegante. Para terminar platos.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Alta cocina</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Terminación</span>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">Mesa especial</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ===== CTA FINAL ===== */}
<section id="contacto" className="border-t border-stone-800 bg-stone-900 px-6 py-28 text-center text-white">
  <div className="mx-auto max-w-2xl">
    <p className="mb-3 text-sm font-medium tracking-[0.2em] text-stone-400 uppercase">
      Edición limitada
    </p>
    <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
      Probá el próximo lote
    </h2>
    <p className="mt-5 text-lg leading-relaxed text-stone-300">
      Aceite de oliva virgen extra de Maipú, Mendoza.  
      Cosecha temprana, acidez baja y carácter propio.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="mailto:hola@tu-marca.com"
        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-stone-900 transition hover:bg-stone-100"
      >
        Solicitar información
      </a>
      <a
        href="#aceites"
        className="inline-flex items-center justify-center rounded-full border border-stone-600 px-8 py-3.5 text-sm font-medium text-white transition hover:border-stone-400"
      >
        Ver aceites
      </a>
    </div>

    <p className="mt-8 text-sm text-stone-500">
      Respuesta en menos de 24 hs · Envíos a coordinar
    </p>
  </div>
</section>

{/* ===== FOOTER ===== */}
<footer className="border-t border-stone-800 bg-stone-950 px-6 py-12 text-stone-400">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
    
    {/* Logo + nombre */}
    <div className="flex items-center gap-3">
      <svg width="18" height="24" viewBox="0 0 22 28" fill="none" className="text-stone-300">
        <ellipse cx="11" cy="15" rx="8" ry="11" fill="currentColor" fillOpacity="0.9" />
        <path d="M11 4C11 4 13 2 14.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-base font-medium tracking-tight text-stone-200">
        OLEAR
      </span>
    </div>

    {/* Links */}
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
      <a href="#origen" className="transition hover:text-white">Origen</a>
      <a href="#aceites" className="transition hover:text-white">Aceites</a>
      <a href="#contacto" className="transition hover:text-white">Contacto</a>
    </div>

    {/* Info */}
    <div className="text-center text-sm md:text-right">
      <p>Maipú, Mendoza · Argentina</p>
      <p className="mt-1 text-stone-500">© 2026 · Todos los derechos reservados</p>
    </div>
  </div>
</footer>
    </main>
  );
}