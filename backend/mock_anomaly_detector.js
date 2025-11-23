const baselines = {}


function pushBaseline(crewId, features){
if(!baselines[crewId]) baselines[crewId] = { count:0, mean:{typingSpeed:0,typos:0,delay:0}, m2:{typingSpeed:0,typos:0,delay:0} }
const b = baselines[crewId]
b.count +=1
['typingSpeed','typos','delay'].forEach(k=>{
const x = features[k]
const delta = x - b.mean[k]
b.mean[k] += delta / b.count
const delta2 = x - b.mean[k]
b.m2[k] += delta * delta2
})
}


function getStd(crewId,k){
const b = baselines[crewId]
if(!b || b.count<2) return 1
return Math.sqrt(b.m2[k]/(b.count-1)+1e-6)
}


function computeScore(crewId,features){
// push baseline first if not enough
if(!baselines[crewId] || baselines[crewId].count < 10){
pushBaseline(crewId,features)
return 0.1 // low confidence early
}


// z-scores: lower typingSpeed than baseline => positive anomaly
const mean = baselines[crewId].mean
const zTyping = (mean.typingSpeed - features.typingSpeed) / getStd(crewId,'typingSpeed')
const zTypos = (features.typos - mean.typos) / getStd(crewId,'typos')
const zDelay = (features.delay - mean.delay) / getStd(crewId,'delay')


// positive z's indicate worse condition. Combine
const score = Math.max(0, zTyping) * 0.6 + Math.max(0, zTypos) * 0.3 + Math.max(0, zDelay) * 0.4
// occasionally update baseline slowly
pushBaseline(crewId,features)
return score
}


module.exports = { computeScore }