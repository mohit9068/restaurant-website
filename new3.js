var h =function(){


$("#lunch").click(function(){
			
			var l = document.getElementById("change").childElementCount;
			console.log(l);
			for(var i=0;i<l;i++){
				var p = document.getElementById(i);
			while (p.firstChild) {
    			p.removeChild(p.firstChild);
}	}

	$.ajax({url:'https://acadstaging.com/py/udaan/project?meal=lunch&project_name=restaurant',type:'GET',success:function(result){
		var g = (result["lunch"]);
		console.log(g);
		for (var i=0;i<g.length;i++){
			 var nm = document.createTextNode(g[i]['name']);

			 var des = document.createElement('p');
			 var node = document.createTextNode(g[i]["description"]);
		     des.appendChild(node);

			var price = document.createElement('span');
			var node2 = document.createTextNode(g[i]["price"]+" Rs");
			price.appendChild(node2);

			document.getElementById(i).appendChild(nm);
			document.getElementById(i).appendChild(price);		
			document.getElementById(i).appendChild(des);
		};}});
});


$("#dinner").click(function(){
			
			var l = document.getElementById("change").childElementCount;
			console.log(l);
			for(var i=0;i<l;i++){
				var p = document.getElementById(i);
			while (p.firstChild) {
    			p.removeChild(p.firstChild);
}	}

	$.ajax({url:'https://acadstaging.com/py/udaan/project?meal=breakfast&project_name=restaurant',type:'GET',success:function(result){
		var g = (result["breakfast"]);
		for (var i=0;i<g.length;i++){

		var nm = document.createTextNode(g[i]['name']);

			 var des = document.createElement('p');
			 var node = document.createTextNode(g[i]["description"]);
		     des.appendChild(node);

			var price = document.createElement('span');
			var node2 = document.createTextNode(g[i]["price"]+" Rs");
			price.appendChild(node2);

			document.getElementById(i).appendChild(nm);
			document.getElementById(i).appendChild(price);		
			document.getElementById(i).appendChild(des);		
		};}});
});









	$("#sub").click(function(){
 		var a = $('#email').val();
 		var b = $('#date').val();
 		var c = $('#time').val();



 		console.log(a);
 		console.log(b);
 		console.log(c);

		
		$.ajax({
			url:"https://acadstaging.com/py/udaan/project",
	        type: "POST",
	        data: {"name":"Mohit","email_id":a,"contact_number":"99996669995","message":"Hello I Am Mohit","date":b,"guests":"2"} ,
	        success:function(result){ 
	        	console.log(result); 
	        } 
		});
	});
}