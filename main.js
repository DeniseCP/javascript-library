var data = [];

function openInaNewtab(url) {
	var win = window.open(url);
	win.focus();
}


function generateLBCard() {
	return Math.round(Math.random() * 50000);
}

function addNewUser() {
    document.getElementById("message").innerHTML="";
	let name = newUserForm.username.value;
	let age = newUserForm.userage.value;
	let card = generateLBCard();

    if(name!==undefined && age!==undefined && name!=="" && age!==""){
        var myUser = {
		"name": name,
		"age": age,
		"librarycard": card
	   };

 	  var d = JSON.stringify(myUser);
 	  data.push(d);

        messageSuccess(myUser);
    }else{
        messageError();
    }
	
}

function messageError(){
    var p = document.createElement(p);
    
    p.setAttribute("id", "mgs_success");
    
   document.getElementById("message").appendChild(p);
    p.style.color = "red";
    p.style.fontWeight= "bold";
    p.innerHTML+="Name and/or age cannot be null."
}
function messageSuccess(obj){
    
    var p = document.createElement(p);
    
    p.setAttribute("id", "mgs_success");
    
   document.getElementById("message").appendChild(p);
    
    p.innerHTML += "User: "+obj.name+ " added with success. Card Number: "+ obj.librarycard;  
    
    clearForm();
}

function clearForm(){
    newUserForm.username.innerHTML="";
    newUserForm.userage.innerHTML ="";
}
function listUsers(){
    let ul = document.createElement("ul");
    document.getElementById("userlist").style.display;
    document.getElementById("userlist").appendChild(ul);
    
    let li = document.createElement("li");
    
    ul.appendChild(li);
    
    for(i =0; i< data; i++){
        li.innerHTML+="User name: "+data[i].name +". Library card: "+ data[i].librarycard;
    }
}