function compute(){

	
    var text = document.getElementById('favchap').value;
    
        
            
      var x = document.createElement("LI");
      var t = document.createTextNode(text);
        
        var btn = document.createElement("button");
        
        btn.innerHTML = "x";
        btn.style.color = "Red";
        btn.setAttribute("id", "btn");
        btn.setAttribute("class", "btn");
        btn.setAttribute("onclick", "removeDummy()");
	
	x.setAttribute("id", "div2");
           
      x.appendChild(t);
     x.appendChild(btn); document.getElementById("div1").appendChild(x);
            
        }
    
    function removeDummy() {
     var elem = document.getElementById('div2');
     elem.parentNode.removeChild(elem);
    }