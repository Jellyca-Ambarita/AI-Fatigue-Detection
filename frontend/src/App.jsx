import React, { useState, useEffect } from 'react'
}catch(e){}
},5000)
return ()=>clearInterval(t)
},[])


return (
<div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
<header className="max-w-6xl mx-auto p-6 flex justify-between items-center">
<h1 className="text-2xl font-bold text-maritime">AI Fatigue Detection</h1>
<nav className="space-x-4">
<button onClick={()=>setView('home')} className="px-3 py-1">Home</button>
<button onClick={()=>setView('dashboard')} className="px-3 py-1">Dashboard</button>
</nav>
</header>


<main className="max-w-6xl mx-auto p-6">
{view==='home' ? (
<>
<Hero onStart={()=>setView('dashboard')} />
<Sections />
</>
) : (
<Dashboard alerts={alerts} />
)}
</main>


<footer className="max-w-6xl mx-auto p-6 text-sm text-gray-600">
© {new Date().getFullYear()} AI Fatigue Detection — Contact: it@company.test
</footer>
</div>
)
}