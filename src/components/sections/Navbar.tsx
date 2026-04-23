"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { MessageCircle, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Autos Nuevos", href: "#nuevos" },
  { label: "Autos Usados", href: "#usados" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

const WHATSAPP_URL = "https://wa.me/543442472249?text=Hola%2C%20quiero%20consultar%20sobre%20un%20auto"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={scrolled ? {
          backgroundColor: "rgba(10,10,10,0.85)",
          backdropFilter: "blur(16px)",
          borderBottomColor: "rgba(255,255,255,0.08)",
        } : {
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          borderBottomColor: "transparent",
        }}
        transition={{ duration: 0.3 }}
        className="border-b"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Chita Automotores" className="h-10 w-auto" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-2"
              aria-label="Menú"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base text-white/80 hover:text-white border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-600 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Contactar por WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
