
import React from 'react'
import news from '../data/news'
export default function Noticias(){
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-[var(--navy)]">Noticias</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {news.map(n=>(
          <article key={n.id} className="bg-white rounded shadow p-4 flex gap-3">
            <img src={n.image} className="h-24 w-32 object-cover rounded" />
            <div>
              <div className="font-semibold">{n.title}</div>
              <div className="text-sm text-gray-600">{n.date}</div>
              <p className="mt-2 text-sm text-gray-700">{n.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
