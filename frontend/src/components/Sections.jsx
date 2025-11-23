import React from 'react'


export default function Sections(){
return (
<div className="grid lg:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded shadow">
<h3 className="font-bold text-xl text-maritime">Metode Penyelesaian</h3>
<ol className="mt-3 list-decimal list-inside space-y-2 text-slate-700">
<li>Pengumpulan Data Operasional (form, checklist, log, laporan)</li>
<li>Analisis pola input & ekstraksi fitur</li>
<li>Baseline perilaku per-kru</li>
<li>Deteksi anomali & notifikasi</li>
<li>Monitoring real-time (non-invasif)</li>
</ol>
</div>


<div className="bg-white p-6 rounded shadow">
<h3 className="font-bold text-xl text-maritime">Manfaat</h3>
<ul className="mt-3 space-y-2 text-slate-700">
<li>Menurunkan human error</li>
<li>Meningkatkan konsistensi pencatatan</li>
<li>Efisiensi supervisor</li>
<li>Cocok untuk kapal dengan internet terbatas</li>
</ul>
</div>


<div id="rencana" className="bg-white p-6 rounded shadow lg:col-span-2">
<h3 className="font-bold text-xl text-maritime">Rencana Anggaran (Ringkasan)</h3>
<table className="w-full mt-4 text-sm">
<tbody>
<tr><td>Pengembangan Sistem</td><td className="text-right">Rp 26.500.000</td></tr>
<tr><td>Infrastruktur</td><td className="text-right">Rp 4.450.000</td></tr>
<tr><td>Pelatihan & Implementasi</td><td className="text-right">Rp 3.250.000</td></tr>
<tr className="font-bold border-t"><td>Total 1 Tahun</td><td className="text-right">Rp 39.200.000</td></tr>
</tbody>
</table>
</div>
</div>
)
}