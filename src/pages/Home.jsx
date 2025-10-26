
import React from 'react'
export default function Home(){
  return (
    <section className="py-8">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-[var(--navy)]">Iberia Legends</h1>
          <p className="mt-3 text-lg text-gray-700">La liga amateur de League of Legends de la península. Sigue clasificaciones, MVPs, calendario y los mejores highlights.</p>
          <div className="mt-6 flex gap-3">
            <a href="/clasificacion" className="px-4 py-2 rounded-md bg-[var(--gold)] text-[var(--navy)] font-semibold">Ver clasificación</a>
            <a href="/calendario" className="px-4 py-2 rounded-md border border-gray-200">Ver calendario</a>
          </div>
        </div>
        <div className="bg-gray-50 p-6 rounded shadow">
          <img src="/team_1.svg" alt="hero" className="w-full object-contain"/>
        </div>
      </div>
    </section>
  )
}
