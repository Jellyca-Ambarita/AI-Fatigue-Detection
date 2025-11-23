import React from 'react'


export default function Hero({onStart}){
return (
<section className="bg-white rounded-2xl shadow p-8 mb-6">
<div className="flex gap-6 items-center">
<div className="flex-1">
<h2 className="text-3xl font-extrabold text-maritime">Mendeteksi Kelelahan Kru Deck Secara Non-Invasif</h2>
<p className="mt-4 text-slate-700">Analisis pola input (kecepatan mengetik, typo, jeda antar-aksi) untuk peringatan dini terhadap fatigue. Kerja otomatis tanpa perubahan SOP.</p>


<div className="mt-6 flex gap-3">
<button className="px-4 py-2 bg-maritime text-white rounded" onClick={onStart}>Buka Dashboard</button>
<a href="#rencana" className="px-4 py-2 border rounded">Download Proposal</a>
</div>
</div>
<div className="w-1/3">
<img src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=800&q=60" alt="ship" className="rounded" />
</div>
</div>
</section>
)
}