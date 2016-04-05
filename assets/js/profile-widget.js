$(document).ready(function(){
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us.api.battle.net/sc2/profile/"+id+"/"+realm+"/"+name+"/?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
    xhr.send();

    // console.log(xhr.status);
    // console.log(xhr.statusText);
    var result = xhr.response;
    var json = JSON.parse(result);
    // console.log(json.id);
    // console.log(json.career.primaryRace);
    var race = json.career.primaryRace;
    race = race.toLowerCase();
    $('.profile-image').css('background-image', 'url(' + '../../../../images/' + race + '_profile.png' + ')');
});