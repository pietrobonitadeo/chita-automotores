"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Fuel, Gauge, Calendar, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_BASE = "https://wa.me/543442472249?text="

type CarCategory = "todos" | "nuevos" | "usados"

interface Car {
  id: number
  nombre: string
  marca: string
  año: number
  precio: string
  km?: string
  combustible: string
  tipo: "nuevo" | "usado"
  color: string // gradient css
}

const AUTOS: Car[] = [
  {
    id: 1,
    nombre: "Cronos Drive",
    marca: "FIAT",
    año: 2024,
    precio: "$22.500.000",
    combustible: "Nafta",
    tipo: "nuevo",
    color: "from-blue-900/60 to-slate-900/80",
  },
  {
    id: 2,
    nombre: "Tracker Premier",
    marca: "CHEVROLET",
    año: 2024,
    precio: "$38.900.000",
    combustible: "Nafta",
    tipo: "nuevo",
    color: "from-amber-900/60 to-zinc-900/80",
  },
  {
    id: 3,
    nombre: "Sandero Stepway",
    marca: "RENAULT",
    año: 2024,
    precio: "$24.200.000",
    combustible: "Nafta",
    tipo: "nuevo",
    color: "from-yellow-900/60 to-zinc-900/80",
  },
  {
    id: 4,
    nombre: "Polo Track",
    marca: "VOLKSWAGEN",
    año: 2023,
    precio: "$19.800.000",
    km: "18.000 km",
    combustible: "Nafta",
    tipo: "usado",
    color: "from-slate-800/60 to-zinc-900/80",
  },
  {
    id: 5,
    nombre: "Hilux SR 4x4",
    marca: "TOYOTA",
    año: 2022,
    precio: "$52.000.000",
    km: "34.500 km",
    combustible: "Diesel",
    tipo: "usado",
    color: "from-red-900/60 to-zinc-900/80",
  },
  {
    id: 6,
    nombre: "Etios XS",
    marca: "TOYOTA",
    año: 2021,
    precio: "$14.500.000",
    km: "62.000 km",
    combustible: "Nafta",
    tipo: "usado",
    color: "from-indigo-900/60 to-zinc-900/80",
  },
]

const TABS: { label: string; value: CarCategory }[] = [
  { label: "Todos", value: "todos" },
  { label: "Autos Nuevos", value: "nuevos" },
  { label: "Autos Usados", value: "usados" },
]

function CarCard({ car, index }: { car: Car; index: number }) {
  const msg = encodeURIComponent(
    `Hola! Me interesa el ${car.marca} ${car.nombre} ${car.año}. ¿Está disponible?`
  )

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-zinc-900/60 hover:border-white/15 transition-colors duration-300"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

      {/* Image area */}
      <div className={cn("relative h-44 bg-gradient-to-br overflow-hidden", car.color)}>
        {/* Grid lines overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        {/* Car silhouette placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 120 50" className="w-36 opacity-20 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 35 L15 20 Q20 10 35 10 L85 10 Q100 10 105 20 L110 35 Q112 38 110 40 L10 40 Q8 38 10 35Z M25 40 A7 7 0 1 0 25 40.01 M90 40 A7 7 0 1 0 90 40.01"/>
          </svg>
        </div>
        {/* Badge tipo */}
        <div className="absolute top-3 left-3">
          <span className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
            car.tipo === "nuevo"
              ? "bg-blue-500/80 text-white"
              : "bg-amber-500/80 text-white"
          )}>
            {car.tipo === "nuevo" ? "Nuevo" : "Usado"}
          </span>
        </div>
        {/* Marca badge */}
        <div className="absolute top-3 right-3">
          <span className="rounded-full bg-black/40 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white/70 tracking-widest">
            {car.marca}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <p className="text-xs text-white/40 font-medium uppercase tracking-wider mb-0.5">{car.marca}</p>
          <h3 className="text-lg font-bold text-white leading-tight">{car.nombre}</h3>
        </div>

        {/* Specs row */}
        <div className="flex items-center gap-4 text-xs text-white/50">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {car.año}
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5" />
            {car.combustible}
          </span>
          {car.km && (
            <span className="flex items-center gap-1.5">
              <Gauge className="h-3.5 w-3.5" />
              {car.km}
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/8">
          <div>
            <p className="text-[10px] text-white/30 uppercase tracking-wider">Precio</p>
            <p className="text-lg font-black text-white">{car.precio}</p>
          </div>
          <a
            href={`${WHATSAPP_BASE}${msg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:shadow-[0_0_16px_rgba(34,197,94,0.4)]"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Consultar
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function Autos() {
  const [activeTab, setActiveTab] = React.useState<CarCategory>("todos")

  const filtered = AUTOS.filter((car) => {
    if (activeTab === "todos") return true
    if (activeTab === "nuevos") return car.tipo === "nuevo"
    return car.tipo === "usado"
  })

  return (
    <section id="nuevos" className="relative bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle top gradient separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs tracking-widest text-white/30 uppercase mb-3">[ CATÁLOGO ]</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Nuestros Vehículos
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Encontrá el auto que buscás. Todos nuestros vehículos están revisados y con documentación en orden.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                  activeTab === tab.value
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-white/60 hover:text-white"
                )}
              >
                {tab.label}
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-white -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm mb-4">¿No encontrás lo que buscás?</p>
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent("Hola! Busco un auto específico, ¿pueden ayudarme?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-600/40 bg-green-600/10 px-6 py-3 text-sm font-semibold text-green-400 hover:bg-green-600/20 transition-all duration-200"
          >
            <MessageCircle className="h-4 w-4" />
            Consultanos por WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}
