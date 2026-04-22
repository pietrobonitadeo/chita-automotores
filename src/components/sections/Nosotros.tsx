"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Users, Award, Clock, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

/* ── Animated counter ── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = React.useState(0)
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (!inView) return
    const duration = 1800
    let start: number | null = null
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(ease * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end])

  return <span ref={ref}>{value}{suffix}</span>
}

/* ── Data ── */
const STATS = [
  { label: "Años en el mercado", end: 30, suffix: "+" },
  { label: "Autos vendidos", end: 2000, suffix: "+" },
  { label: "Clientes satisfechos", end: 98, suffix: "%" },
]

const PILARES = [
  {
    icon: Clock,
    title: "Más de 30 años",
    desc: "Desde 1990 formando parte de la comunidad de Concepción del Uruguay. Una trayectoria construida cliente a cliente.",
  },
  {
    icon: Users,
    title: "Empresa familiar",
    desc: "Somos una familia que atiende familias. El trato cercano y honesto es lo que nos diferencia de las grandes cadenas.",
  },
  {
    icon: Shield,
    title: "Sello de garantía",
    desc: "Cada auto que sale de Chita lleva nuestro sello. Revisión técnica completa y documentación en orden, siempre.",
  },
  {
    icon: Award,
    title: "Mejor servicio",
    desc: "No cerramos la venta cuando te entregamos el auto. Te acompañamos antes, durante y después de la compra.",
  },
]

/* ── Pilar card ── */
function PilarCard({ icon: Icon, title, desc, index }: typeof PILARES[0] & { index: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-4 rounded-2xl border border-white/8 bg-zinc-900/50 p-6 hover:border-white/15 transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/4 via-transparent to-transparent" />
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <Icon className="h-5 w-5 text-white/70" />
      </div>
      <div>
        <h3 className="font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

/* ── Main section ── */
export function Nosotros() {
  const headerRef = React.useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="nosotros" className="relative bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: text */}
          <div>
            <p className="text-xs tracking-widest text-white/30 uppercase mb-4">[ NOSOTROS ]</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.05] mb-6">
              Más de 30 años
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                al servicio de tu familia
              </span>
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              Somos una empresa familiar que nació en Concepción del Uruguay con un solo objetivo:
              ayudarte a encontrar el auto que necesitás, con honestidad y el respaldo que merecés.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center rounded-2xl border border-white/8 bg-zinc-900/50 p-5"
              >
                <span className="text-4xl font-black text-white tabular-nums">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-xs text-white/40 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pilares grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PILARES.map((p, i) => (
            <PilarCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-12"
        >
          {/* Corner glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 bg-violet-500/8 rounded-full blur-3xl" />

          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-white mb-2">Nuestro sello de garantía</h3>
              <p className="text-white/50 leading-relaxed">
                Todos los vehículos que vendemos pasan por una revisión técnica completa antes de la entrega.
                Documentación verificada, mecánica revisada y listo para que te subas tranquilo.
              </p>
            </div>
            <ul className="shrink-0 flex flex-col gap-2 text-sm text-white/60">
              {["Revisión técnica completa", "Documentación en orden", "Respaldo post-venta"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
