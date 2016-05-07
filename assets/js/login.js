function hideMessage() {
	$('#error-message').fadeOut();
}

function validateForm() {
    var url = document.forms["login"]["profileUrl"].value;
    if(url.substring(url.length-1, url.length) == '/'){
    	url = url.substring(0, url.length-1)
    }
    // console.log(url);
    
	var parts = url.split("/");
	if(parts.length > 3){
	    var name = parts[parts.length - 1];
	    var realm = parts[parts.length - 2];
	    var id = parts[parts.length - 3];
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://us.api.battle.net/sc2/profile/"+id+"/"+realm+"/"+name+"/?locale=en_US&apikey=tb68txxwdq4vwxtwah7gkww6uqebxn9v", false);
	   	xhr.send();
	   	if(xhr.status != 200){
	   		$('#error-message').show();
	   		setTimeout(hideMessage, 3000);
	   		return false;
	   	}
	}
	else{
		$('#error-message').show();
   		setTimeout(hideMessage, 3000);
		return false;
	}
}

