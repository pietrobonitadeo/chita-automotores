import { MessageCircle, MapPin, Phone } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/543442472249?text=Hola%2C%20quiero%20consultar%20sobre%20un%20auto"

const LINKS = [
  {
    title: "Vehículos",
    items: [
      { label: "Autos Nuevos", href: "#nuevos" },
      { label: "Autos Usados", href: "#usados" },
      { label: "Financiación", href: "#contacto" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Garantía", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="inline-flex flex-col leading-none mb-4">
              <span className="text-2xl font-black tracking-widest text-white">CHITA</span>
              <span className="text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase">Automotores</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Tu próximo auto, te está esperando. Más de 30 años de confianza en Concepción del Uruguay.
            </p>
          </div>

          {/* Nav columns */}
          {LINKS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div id="contacto">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Contacto</p>
            <ul className="flex flex-col gap-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-white/30" />
                Concepción del Uruguay, Entre Ríos
              </li>
              <li>
                <a
                  href="tel:+543442472249"
                  className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 shrink-0 text-white/30" />
                  +54 3442 472249
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Chita Automotores. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">Concepción del Uruguay, Entre Ríos, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
