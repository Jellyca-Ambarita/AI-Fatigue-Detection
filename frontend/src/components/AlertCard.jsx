import React from 'react'


export default function AlertCard({a}){
return (
<div className={`p-3 rounded border ${a.level==='high' ? 'border-red-400' : a.level==='medium' ? 'border-orange-300' : 'border-slate-200'}`}>
<div className="text-sm font-semibold">{a.crewId} — {a.level.toUpperCase()}</div>
<div className="text-xs text-gray-600">Score: {a.score.toFixed(2)}</div>
<div className="text-xs text-gray-500">{new Date(a.timestamp).toLocaleString()}</div>
</div>
)
}