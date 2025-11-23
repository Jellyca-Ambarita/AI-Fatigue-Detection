import React, { useState, useEffect } from 'react'
const chartData = {
labels: series.map(s=> new Date(s.t).toLocaleTimeString()),
datasets: [{ label: 'Anomaly Score', data: series.map(s=> s.v), tension: 0.3 }]
}


return (
<div className="space-y-6">
<div className="grid lg:grid-cols-3 gap-4">
<div className="bg-white p-4 rounded shadow lg:col-span-2">
<h4 className="font-bold">Dashboard Monitoring</h4>
<div className="mt-4">
<Line data={chartData} />
</div>
</div>


<div className="bg-white p-4 rounded shadow">
<h4 className="font-bold">Simulasi Input</h4>
<label className="block mt-2">Crew ID</label>
<input value={crewId} onChange={e=>setCrewId(e.target.value)} className="w-full p-2 border rounded" />


<label className="block mt-2">Typing speed (chars/min)</label>
<input type="number" value={form.typingSpeed} onChange={e=>setForm({...form,typingSpeed:+e.target.value})} className="w-full p-2 border rounded" />


<label className="block mt-2">Typos (count)</label>
<input type="number" value={form.typos} onChange={e=>setForm({...form,typos:+e.target.value})} className="w-full p-2 border rounded" />


<label className="block mt-2">Delay (s)</label>
<input type="number" value={form.delay} onChange={e=>setForm({...form,delay:+e.target.value})} className="w-full p-2 border rounded" />


<button onClick={submitSample} className="mt-4 px-3 py-2 bg-maritime text-white rounded">Kirim Sample</button>
</div>
</div>


<div className="grid lg:grid-cols-3 gap-4">
<div className="bg-white p-4 rounded shadow lg:col-span-2">
<h4 className="font-bold">Log Terakhir</h4>
<table className="w-full mt-2 text-sm">
<thead>
<tr className="text-left text-xs text-gray-500"><th>Time</th><th>Crew</th><th>Score</th></tr>
</thead>
<tbody>
{logs.slice(-10).reverse().map((l,i)=> (
<tr key={i}><td>{new Date(l.timestamp).toLocaleString()}</td><td>{l.crewId}</td><td>{l.score.toFixed(2)}</td></tr>
))}
</tbody>
</table>
</div>


<div className="bg-white p-4 rounded shadow">
<h4 className="font-bold">Alerts</h4>
<div className="mt-2 space-y-2">
{alerts.length===0 ? <div className="text-sm text-gray-500">Tidak ada alert</div> : alerts.map((a,i)=>(<AlertCard key={i} a={a}/>))}
</div>
</div>
</div>
</div>
)
}