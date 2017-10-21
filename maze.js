window.onload = function () {
	  main();
	};
	

	function main() 
	{
		var boundary1 = document.getElementById("boundary1");
		boundary1.onmouseover = function() {
			this.setAttribute("class", "boundary lose");
		};
		
		var boundary = document.querySelectorAll(".boundary");
		var x = 0;
		var y = 0;
		var z = 0;
		for ( x = 0; x < boundary.length; x++)
		{
			boundary[x].onmouseover = function(){
				for ( y = 0; y< boundary.length-1;y++){
					boundary[y].setAttribute("class","boundary lose");
					
				}
				z++;
				document.getElementById("status").innerHTML = "loseer";
			}
		}
		var end = document.getElementById("end");
		end.onmouseover = function(){
			if (z == 0)
			{
				//window.alert("You Win");
				document.getElementById("status").innerHTML = "Winner";
			};
		};
		
		var start = document.getElementById("start");
		start.onclick = function(){
			z=0;
			console.log('test');
			document.getElementById("status").innerHTML = "navigate mouse over \"S\" to begin.";
			for ( x = 0; x < boundary.length-1;x++) {
				boundary[x].setAttribute("class","boundary boundary");
			};
			var maze = document.getElementById("maze");
			document.onmousemove = function (event) {
				var x = event.clientX;
				var y = event.clientY;
				var left = maze.offsetLeft;
				var right = maze.offsetRight;
				var height = maze.offsetHeight;
				var width = maze.offsetWidth;
				var top = maze.offsetTop;
				if ((x < left)||(x < right))
				{
					for (y = 0; y< boundary.length ; y++)
					{
						boundary[y].setAttribute("class","boundary lose");
					}
				};
			};
			
		};
		
		
	};	

