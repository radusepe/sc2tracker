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
    $('#gmleague-symbol').css('background-image', 'url(' + '../../../../images/grandmaster.png' + ') ');
    $('#gmleague-symbol').css('background-repeat', 'no-repeat');
    $('#gmleague-symbol').css('background-position', '0px -318px');


    xhr.open("GET", "https://us.api.battle.net/sc2/ladder/194757?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
    xhr.send();

    result = xhr.response;
    json = JSON.parse(result);
    // console.log(json);
    var ladderMembers = json.ladderMembers;

    var rankIter;

    //will need math fixes
    for(var i=0; i < 5; i++){
        var rowName = document.createElement('p');
        rowName.innerHTML = ladderMembers[i].character.displayName;
        rowName.className = 'rowName';
        document.getElementById('gmname'+(i+1)).appendChild(rowName);

        var rowRank = document.createElement('p');
        rowRank.innerHTML = i+1;
        rowRank.className = 'rowRank';
        document.getElementById('gmrank'+(i+1)).appendChild(rowRank);

        // var rowRace = document.createElement('p');
        if(ladderMembers[i].favoriteRaceP1 != undefined){
            // rowRace.innerHTML = ladderMembers[i+rank-3].favoriteRaceP1;//this has to be changed to use picture not text
            // rowRace.className = 'rowRace';
            // document.getElementById('race'+(i+1)).appendChild(rowRace);
            $('#gmrace'+(i+1)).css('background-image', 'url(' + '../../../../images/race-symbols.png' + ') ');
            $('#gmrace'+(i+1)).css('background-repeat', 'no-repeat');
            if(ladderMembers[i].favoriteRaceP1 == 'TERRAN'){
                $('#gmrace'+(i+1)).css('background-position', '0px 2px');
            }
            else if(ladderMembers[i].favoriteRaceP1 == 'ZERG'){
                $('#gmrace'+(i+1)).css('background-position', '0px -56px');
            }
            else if(ladderMembers[i].favoriteRaceP1 == 'PROTOSS'){
                $('#gmrace'+(i+1)).css('background-position', '0px -110px');
            }
            else{
                $('#gmrace'+(i+1)).css('background-position', '0px -162px');
            }
            

        }
    }
});