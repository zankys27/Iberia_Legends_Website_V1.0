
export function roundRobin(teams){
  const t=[...teams];
  if(t.length%2===1) t.push(null);
  const n=t.length; const rounds=[];
  for(let r=0;r<n-1;r++){
    const pairs=[];
    for(let i=0;i<n/2;i++){const a=t[i];const b=t[n-1-i];if(a&&b)pairs.push({home:a,away:b});}
    rounds.push(pairs);
    t.splice(1,0,t.pop());
  }
  return rounds;
}
