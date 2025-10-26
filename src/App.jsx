
import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Clasificacion from './pages/Clasificacion';
import Calendario from './pages/Calendario';
import Mvps from './pages/Mvps';
import Playoffs from './pages/Playoffs';
import Noticias from './pages/Noticias';

function Nav(){return (<header className="bg-white shadow sticky top-0 z-40"><div className="max-w-6xl mx-auto flex items-center justify-between p-4"><div className="flex items-center gap-3"><img src="/logo.png" className="h-12 w-12 object-contain" alt="logo"/><div><div className="text-lg font-bold text-[var(--navy)]">Iberia Legends</div><div className="text-xs text-gray-500">Temporada 2025</div></div></div><nav className="hidden md:flex gap-4"><Link to="/">Inicio</Link><Link to="/clasificacion">Clasificación</Link><Link to="/calendario">Calendario</Link><Link to="/mvps">MVPs</Link><Link to="/playoffs">Playoffs</Link><Link to="/noticias">Noticias</Link></nav><div className="md:hidden"><details><summary>Menu</summary><div className="p-2 flex flex-col"><Link to="/">Inicio</Link><Link to="/clasificacion">Clasificación</Link><Link to="/calendario">Calendario</Link><Link to="/mvps">MVPs</Link><Link to="/playoffs">Playoffs</Link><Link to="/noticias">Noticias</Link></div></details></div></div></header>);}

export default function App(){return (<div className="min-h-screen bg-white text-gray-900"><Nav/><main className="max-w-6xl mx-auto p-4"><Routes><Route path='/' element={<Home/>} /><Route path='/clasificacion' element={<Clasificacion/>} /><Route path='/calendario' element={<Calendario/>} /><Route path='/mvps' element={<Mvps/>} /><Route path='/playoffs' element={<Playoffs/>} /><Route path='/noticias' element={<Noticias/>} /></Routes></main><footer className="bg-[var(--navy)] text-white py-6 mt-8"><div className="max-w-6xl mx-auto px-4 flex items-center justify-between"><div className="flex items-center gap-3"><img src="/logo.png" className="h-10 w-10 object-contain"/><div><div className="font-semibold">Iberia Legends</div><div className="text-sm opacity-80">Contacto: contacto@iberialegends.example</div></div></div><div className="flex gap-3"><a>Discord</a><a>X</a><a>Twitch</a><a>YouTube</a></div></div></footer></div>);}