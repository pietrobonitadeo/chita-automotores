import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Autos } from "@/components/sections/Autos"
import { Nosotros } from "@/components/sections/Nosotros"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      <Autos />
      <Nosotros />
      <Footer />
    </main>
  )
}
