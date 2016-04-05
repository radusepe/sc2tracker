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
    $('#league-symbol').css('background-image', 'url(' + '../../../../images/' + league + '.png' + ') ');
    $('#league-symbol').css('background-repeat', 'no-repeat');
    if(rank > 50){
        $('#league-symbol').css('background-position', '0px 0px');
    }
    else if(rank > 25){
        $('#league-symbol').css('background-position', '0px -107px');
    }
    else if(rank > 16){
        $('#league-symbol').css('background-position', '0px -212px');
    }
    else{
        $('#league-symbol').css('background-position', '0px -318px');
    }


    xhr.open("GET", "https://us.api.battle.net/sc2/ladder/"+ladderId+"?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
    xhr.send();

    result = xhr.response;
    json = JSON.parse(result);
    // console.log(json);
    var ladderMembers = json.ladderMembers;

    var rankIter;

    //will need math fixes
    for(var i=0; i < 5; i++){
        var rowName = document.createElement('p');
        rowName.innerHTML = ladderMembers[i+rank-3].character.displayName;
        rowName.className = 'rowName';
        document.getElementById('name'+(i+1)).appendChild(rowName);

        var rowRank = document.createElement('p');
        rowRank.innerHTML = i+rank-2;
        rowRank.className = 'rowRank';
        document.getElementById('rank'+(i+1)).appendChild(rowRank);

        // var rowRace = document.createElement('p');
        if(ladderMembers[i+rank-3].favoriteRaceP1 != undefined){
            // rowRace.innerHTML = ladderMembers[i+rank-3].favoriteRaceP1;//this has to be changed to use picture not text
            // rowRace.className = 'rowRace';
            // document.getElementById('race'+(i+1)).appendChild(rowRace);
            $('#race'+(i+1)).css('background-image', 'url(' + '../../../../images/race-symbols.png' + ') ');
            $('#race'+(i+1)).css('background-repeat', 'no-repeat');
            if(ladderMembers[i+rank-3].favoriteRaceP1 == 'TERRAN'){
                $('#race'+(i+1)).css('background-position', '0px 2px');
            }
            else if(ladderMembers[i+rank-3].favoriteRaceP1 == 'ZERG'){
                $('#race'+(i+1)).css('background-position', '0px -56px');
            }
            else if(ladderMembers[i+rank-3].favoriteRaceP1 == 'PROTOSS'){
                $('#race'+(i+1)).css('background-position', '0px -110px');
            }
            else{
                $('#race'+(i+1)).css('background-position', '0px -162px');
            }
            

        }
    }
});