var data = [];

var btn = document.getElementById("find");
var div = document.getElementById("option");
var render = document.getElementById('renderBookList');

window.onload = 	init();

function loadJSON(callback){
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("javascript-library");
	xobj.open('GET',"books.json", true );

	xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);   
}

function init(){
	loadJSON(function(response){
		data = JSON.parse(response);
	});
}


btn.addEventListener("click", function(){
	document.getElementById('renderBookList').innerHTML="";
	var opt = saveOpt();
	find(data, opt );
});

function saveOpt(){
	let op = [];
	let c = div.childNodes
	for(i =0; i < c.length; i++){
		if(c[i].nodeName ==="INPUT"){
			op.push(c[i]);
		}
	}
	return selected(op)
}

function selected(arr){
	for(j =0; j< arr.length; j++){
		let element = arr[j];
		if(element.value==="1" && element.checked){
			return 1;
		}else if(element.value==="2" && element.checked){
			return 2;
		}else if(element.value==="3" && element.checked){
			return 3;
		}
	}
}


function find(data, opt){
	let param = document.getElementById("param").value.toLowerCase();

	let pattern = new RegExp(param);

	let outPut=[];
	data.forEach(function(elm){
		let na;
		switch(opt){
			case 1:			
				na = elm.title;
				if (na.toLowerCase().match(pattern)){
					outPut.push(elm);
	 			}
				break;
			case 2:
				na = elm.author;
				if (na.toLowerCase().match(pattern)){
					outPut.push(elm);
	 			}
				break;
			case 3:
				na = elm.genre;
				if (na.toLowerCase().match(pattern)){
					outPut.push(elm);
	 			}
				break;
			default:
		}
	 });
	
    
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'bookList');
    let t;
    document.getElementById("renderBookList").style.display;
    document.getElementById("renderBookList").appendChild(ul);
    
    outPut.forEach(renderList);

    function renderList(element, index, arr) {
        var li = document.createElement('li');
        
        ul.appendChild(li);
        li.setAttribute('class', 'item');
        t = document.createTextNode(element);
        
        li.innerHTML=li.innerHTML + "<strong>Author Name:</strong> "+ element.author +"; <strong>Book Name:</strong> "+ element.title;
	}
}

