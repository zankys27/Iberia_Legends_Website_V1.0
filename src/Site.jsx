
import React from 'react';

const COLORS = {
  navy: '#0A0E2A',
  gold: '#FFD166',
  white: '#FFFFFF'
};

// Datos vacíos para rellenar manualmente
const DIVISIONS = []; // Ej: { name: 'División Oro', teams: [...] }
const CALENDAR = []; // Ej: { date: '2025-06-01 20:00', home: '', away: '', stream: '#' }
const MVPS = []; // Ej: { player: '', team: '', kda: '' }
const NEWS = []; // Ej: { id:1, title:'', excerpt:'', date:'' }

export default function Site() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
      <header className="bg-[linear-gradient(90deg,#0A0E2A,transparent)] text-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Iberia Legends" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-xl font-bold">Iberia Legends</h1>
              <p className="text-xs opacity-90">La mayor competición amateur de League of Legends en la península</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <a href="#clasificacion" className="px-3 py-2 hover:underline">Clasificación</a>
            <a href="#calendario" className="px-3 py-2 hover:underline">Calendario</a>
            <a href="#mvps" className="px-3 py-2 hover:underline">MVPs</a>
            <a href="#noticias" className="px-3 py-2 hover:underline">Noticias</a>
            <div className="flex items-center gap-2 ml-4">
              <a className="text-xs px-2 py-1 border rounded-md border-white/20 hover:bg-white/5">Discord</a>
              <a className="text-xs px-2 py-1 border rounded-md border-white/20 hover:bg-white/5">X</a>
              <a className="text-xs px-2 py-1 border rounded-md border-white/20 hover:bg-white/5">Twitch</a>
              <a className="text-xs px-2 py-1 border rounded-md border-white/20 hover:bg-white/5">YouTube</a>
            </div>
          </nav>

          <div className="md:hidden">
            <details className="text-sm text-white">
              <summary className="cursor-pointer">Menu</summary>
              <div className="mt-2 bg-[rgba(255,255,255,0.03)] rounded p-2 flex flex-col gap-2">
                <a href="#clasificacion" className="px-2 py-1">Clasificación</a>
                <a href="#calendario" className="px-2 py-1">Calendario</a>
                <a href="#mvps" className="px-2 py-1">MVPs</a>
                <a href="#noticias" className="px-2 py-1">Noticias</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      <section className="bg-[linear-gradient(90deg,#0A0E2A,transparent)] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl font-extrabold">Iberia Legends</h2>
            <p className="mt-3 text-lg opacity-90">Sigue la liga: clasificaciones, MVPs, calendarios y los mejores highlights.</p>

            <div className="mt-6 flex gap-3">
              <a href="#clasificacion" className="px-4 py-2 rounded-md bg-[rgb(255,209,102)] text-[rgb(10,14,42)] font-semibold">Ver clasificación</a>
              <a href="#calendario" className="px-4 py-2 rounded-md border border-white/20">Ver calendario</a>
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-xl shadow-inner">
            <img src="/logo.png" alt="logo" className="mx-auto h-48 w-48 object-contain" />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-14">

        <section id="clasificacion">
          <h3 className="text-2xl font-bold">Clasificación por divisiones</h3>
          <p className="text-sm opacity-80 mt-1">Edita los datos manualmente en el archivo de configuración para actualizar.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIVISIONS.length === 0 && <div className="p-6 bg-white rounded">Aún no hay divisiones. Rellena el array <code>DIVISIONS</code> en <code>src/Site.jsx</code>.</div>}
            {DIVISIONS.map((div) => (
              <div key={div.name} className="bg-white rounded-lg shadow p-4">
                <h4 className="font-semibold text-lg mb-3">{div.name}</h4>
              </div>
            ))}
          </div>
        </section>

        <section id="calendario">
          <h3 className="text-2xl font-bold">Calendario y horarios</h3>
          <div className="mt-4 space-y-3">
            {CALENDAR.length === 0 && <div className="p-4 rounded bg-white">No hay partidos programados. Rellena el array <code>CALENDAR</code>.</div>}
            {CALENDAR.map((m, idx) => (
              <div key={idx} className="p-4 rounded-lg border flex items-center justify-between bg-white">
                <div>
                  <div className="font-semibold">{m.home} <span className="text-sm opacity-70">vs</span> {m.away}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="mvps">
          <h3 className="text-2xl font-bold">MVPs</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {MVPS.length === 0 && <div className="p-4 rounded bg-white">No hay MVPs todavía. Rellena el array <code>MVPS</code>.</div>}
          </div>
        </section>

        <section id="noticias">
          <h3 className="text-2xl font-bold">Noticias</h3>
          <div className="mt-4 space-y-3">
            {NEWS.length === 0 && <div className="p-4 rounded bg-white">No hay noticias. Rellena el array <code>NEWS</code>.</div>}
          </div>
        </section>

      </main>

      <footer className="bg-[linear-gradient(90deg,#0A0E2A,transparent)] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-semibold">Iberia Legends</div>
              <div className="text-sm opacity-80">Contacto: contacto@iberialegends.example</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm">Discord</span>
            <span className="text-sm">X</span>
            <span className="text-sm">Twitch</span>
            <span className="text-sm">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
