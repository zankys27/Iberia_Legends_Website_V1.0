
import React from 'react'
import matches from '../data/matches'
export default function Calendario(){
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--navy)]">Calendario</h2>
      <div className="space-y-3">
        {matches.map((m,idx)=>(
          <div key={idx} className="p-4 bg-white rounded shadow flex items-center justify-between">
            <div>
              <div className="font-semibold">{m.home} <span className="text-sm opacity-70">vs</span> {m.away}</div>
              <div className="text-sm text-gray-600">{m.date}</div>
            </div>
            <div className="text-sm"><a href={m.stream} className="underline">Ver stream</a></div>
          </div>
        ))}
      </div>
    </section>
  )
}
