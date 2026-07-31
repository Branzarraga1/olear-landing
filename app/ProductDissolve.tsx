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

export default function ProductDissolve() {
  const [active, setActive] = useState(products[0]);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      
      {/* Botella con efecto dissolve */}
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

      {/* Selector de