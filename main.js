var data=[];

function openInaNewtab(url){
	var win = window.open(url, '_blank');
	win.focus();
}	

function loadJSON(callback){
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("javascript-library");
	xobj.open('GET',"users.json", true );

	xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);   
}

function init(){
	generateLBCard();
	loadJSON(function(response){
		data = JSON.parse(response);
	});
}


function generateLBCard(){
	var p = document.getElementById("library-card");
	p.value = Math.round(Math.random()*50000);
}

window.onload = init();

function addNewUser(){
	var name = newUserForm.username.value;
	var age = newUserForm.userage.value;
	var card = newUserForm.librarycard.value;

	var myUser = {
		"name": name,
		"age": age,
		"librarycard": card
	};

 	var d = JSON.stringify(myUser);
 	data.push(d);


	console.log("oi")
}