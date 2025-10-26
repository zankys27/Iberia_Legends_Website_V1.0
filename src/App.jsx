
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Clasificacion from './pages/Clasificacion'
import Calendario from './pages/Calendario'
import Mvps from './pages/Mvps'
import Noticias from './pages/Noticias'

function Nav() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Iberia Legends" className="h-12 w-12 object-contain" />
          <div>
            <div className="text-lg font-bold text-[var(--navy)]">Iberia Legends</div>
            <div className="text-xs text-gray-500">Temporada 2025</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/" className="text-sm hover:underline">Inicio</Link>
          <Link to="/clasificacion" className="text-sm hover:underline">Clasificación</Link>
          <Link to="/calendario" className="text-sm hover:underline">Calendario</Link>
          <Link to="/mvps" className="text-sm hover:underline">MVPs</Link>
          <Link to="/noticias" className="text-sm hover:underline">Noticias</Link>
        </nav>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer">Menu</summary>
            <div className="mt-2 flex flex-col bg-white p-2 rounded shadow">
              <Link to="/" className="py-1">Inicio</Link>
              <Link to="/clasificacion" className="py-1">Clasificación</Link>
              <Link to="/calendario" className="py-1">Calendario</Link>
              <Link to="/mvps" className="py-1">MVPs</Link>
              <Link to="/noticias" className="py-1">Noticias</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clasificacion" element={<Clasificacion />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/mvps" element={<Mvps />} />
          <Route path="/noticias" element={<Noticias />} />
        </Routes>
      </main>
      <footer className="bg-[var(--navy)] text-white py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" className="h-10 w-10 object-contain" alt="logo" />
            <div>
              <div className="font-semibold">Iberia Legends</div>
              <div className="text-sm opacity-80">Contacto: contacto@iberialegends.example</div>
            </div>
          </div>
          <div className="flex gap-3">
            <a className="text-sm">Discord</a>
            <a className="text-sm">X</a>
            <a className="text-sm">Twitch</a>
            <a className="text-sm">YouTube</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
