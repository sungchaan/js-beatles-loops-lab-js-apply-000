// add solution here
function theBeatlesPlay(musicians, instruments){
  let musicAndInstru = [];
  for (let i = 0; i <= musicians.length-1; i++){
    musicAndInstru.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return musicAndInstru;
}
