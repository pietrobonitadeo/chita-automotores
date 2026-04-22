"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-zinc-950 flex items-center justify-center px-4 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 404 number */}
          <motion.p
            className="text-[10rem] sm:text-[14rem] font-black leading-none text-white/5 select-none"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            404
          </motion.p>

          <motion.div
            className="-mt-8 sm:-mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Esta página no existe
            </h1>
            <p className="text-white/40 mb-10 max-w-sm mx-auto">
              Pero sí tenemos el auto que buscás. Volvé al inicio y dale un vistazo a nuestro catálogo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/"
                className="rounded-full bg-white px-7 py-3 text-sm font-bold text-zinc-900 hover:bg-white/90 transition-all duration-200"
              >
                Volver al inicio
              </a>
              <a
                href="https://wa.me/543442472249?text=Hola%2C%20busco%20un%20auto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-green-600/40 bg-green-600/10 px-7 py-3 text-sm font-semibold text-green-400 hover:bg-green-600/20 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
