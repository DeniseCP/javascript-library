var books = [
	 {book: "The catcher in the rye", author: "JD Salinger"},
	 {book: "Lord of The Rings - The Fellowship of the Ring" , author: "JRR Tolkien"},
	 {book: "How Grinch Stole Christmas", author: "Dr Seuss"},
	 {book: "The Old Man and The Sea", author:"Ernest Hemingway"},
	 {book: "The Sun also Rises", author:"Ernest Hemingway"},
	 {book: "It", author:"Stephen King"},
	 {book: "I Robot", author:"Isaac Asimov"},
	 {book: "Mind Transfer", author: "Janet Asimov"}
	];

	function find(){
	 let aName = document.getElementById("author").value.toLowerCase();

	let pattern = new RegExp(aName);

	let outPut=[];
	books.forEach(function(elm){
	let na = elm.author;
	if (na.toLowerCase().match(pattern)){
	outPut.push(elm);
	 }
	 });
    
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'bookList');
    let t;
    document.getElementById("renderBookList").appendChild(ul);
    
    outPut.forEach(renderList);

    function renderList(element, index, arr) {
        var li = document.createElement('li');
        
        ul.appendChild(li);
        //li.setAttribute('class', 'item');
        t = document.createTextNode(element);
        
        li.innerHTML=li.innerHTML + "<strong>Author Name:</strong> "+ element.author +"; <strong>Book Name:</strong> "+ element.book;
    }
	  
  }