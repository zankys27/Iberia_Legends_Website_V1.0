
import React from 'react'
import teams from '../data/teams'
export default function Clasificacion(){
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--navy)]">Clasificación - División Iberia</h2>
      <div className="bg-white rounded shadow p-4">
        <table className="w-full text-sm">
          <thead className="text-left text-xs text-gray-500 uppercase">
            <tr><th>#</th><th>Equipo</th><th>PJ</th><th>V</th><th>D</th><th>P</th><th>KDA</th></tr>
          </thead>
          <tbody>
            {teams.map((t,i)=>(
              <tr key={t.name} className="border-t">
                <td className="py-2">{i+1}</td>
                <td className="py-2 flex items-center gap-3"><img src={t.logo} className="h-8 w-8 object-contain"/> <span className="font-medium">{t.name}</span></td>
                <td className="py-2">{t.played}</td>
                <td className="py-2">{t.wins}</td>
                <td className="py-2">{t.losses}</td>
                <td className="py-2">{t.points}</td>
                <td className="py-2">{t.kda}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
