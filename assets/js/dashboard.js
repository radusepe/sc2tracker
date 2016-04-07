$(document).ready(function(){
	var xhr = new XMLHttpRequest();
	if(id != ''){
	    xhr.open("GET", "https://us.api.battle.net/sc2/profile/"+id+"/"+realm+"/"+name+"/ladders?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
	    xhr.send();

	    // console.log(xhr.status);
	    // console.log(xhr.statusText);
	    var result = xhr.response;
	    var json = JSON.parse(result);
	    // console.log(json);
	    var league = "default";
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

	    $("#portrait").attr("src","/images/portrait-summary-" + league + ".png");
	    // $("#portrait").attr("src","/images/portrait-summary-" + "master" + ".png");

	    if(league == "default"){
	    	$("#portrait").css('top', '-10px');
	    	$("#portrait").css('right', '-8px');
	    }
	    else if(league == "bronze"){
	    	$("#portrait").css('top', '-14px');
	    	$("#portrait").css('right', '-12px');
	    }
	    else if(league == "silver"){
	    	$("#portrait").css('top', '-14px');
	    	$("#portrait").css('right', '-12px');
	    }
	    else if(league == "gold"){
	    	$("#portrait").css('top', '-12px');
	    	$("#portrait").css('right', '-10px');	
	    }
	    else if(league == "platinum"){
	    	$("#portrait").css('top', '-12px');
	    	$("#portrait").css('right', '-10px');
	    }
	    else if(league == "diamond"){
	    	$("#portrait").css('top', '-12px');
	    	$("#portrait").css('right', '-10px');
	    }
	    else if(league == "master"){
	    	$("#portrait").css('top', '-18px');
	    	$("#portrait").css('right', '-25px');
	    }
	    else if(league == "grandmaster"){
	    	$("#portrait").css('top', '-18px');
	    	$("#portrait").css('right', '-19px');
	    }

	   	xhr.open("GET", "https://us.api.battle.net/sc2/profile/"+id+"/"+realm+"/"+name+"/?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
	   	xhr.send();

	   	result = xhr.response;
	    json = JSON.parse(result);
	    console.log(json.portrait);

	    $("#portrait-container").css("background", "url( " + json.portrait.url + ")");
	    $("#portrait-container").css("background-position-x", json.portrait.x);
	    $("#portrait-container").css("background-position-y", json.portrait.y);
	}
});