"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MessageCircle, ChevronDown, Car } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/543442472249?text=Hola%2C%20quiero%20consultar%20sobre%20un%20auto"

function GridBackground() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }}
    />
  )
}

function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={cn("absolute rounded-full blur-3xl pointer-events-none", className)}
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center"
    >
      <GridBackground />
      <FloatingOrb className="top-20 left-10 w-72 h-72 bg-blue-500/15" delay={0} />
      <FloatingOrb className="bottom-20 right-10 w-96 h-96 bg-violet-500/10" delay={2} />
      <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10" delay={4} />

      {/* Gradient overlay bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto pt-20">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm">
              <Car className="h-3.5 w-3.5" />
              Concepción del Uruguay, Entre Ríos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-6"
          >
            Tu próximo auto
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
              te está esperando
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Autos nuevos y usados en Concepción del Uruguay, Entre Ríos.
            <br className="hidden sm:block" />
            Financiación a tu medida, atención personalizada.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#nuevos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-zinc-900 hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Ver Autos Disponibles
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
            >
              <MessageCircle className="h-4 w-4 text-green-400" />
              Contactar por WhatsApp
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
