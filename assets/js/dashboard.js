$(document).ready(function(){
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us.api.battle.net/sc2/profile/"+id+"/"+realm+"/"+name+"/ladders?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
    xhr.send();

    // console.log(xhr.status);
    // console.log(xhr.statusText);
    var result = xhr.response;
    var json = JSON.parse(result);
    // console.log(json);
    var league = "none";
    var rank;

    var currentSeason = json.currentSeason;
    var ladderId = "0";

    for(var i=0; i < currentSeason.length; i++){
        if(currentSeason[i].ladder[0].matchMakingQueue == "LOTV_SOLO"){
            league = currentSeason[i].ladder[0].league;
            ladderId = currentSeason[i].ladder[0].ladderId;
            rank = currentSeason[i].ladder[0].rank;

        }
    }

    // console.log(rank);

    league = league.toLowerCase();

    // console.log(league);
});